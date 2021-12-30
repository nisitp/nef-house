<template>
    <div class="house">
        <drag-it-dude ref="houseDrag" class="house__drag" :scale.sync="scale" :top.sync="houseTop" :left.sync="houseLeft">
            <div class="house__image" :style="style" @gestureend.stop="pintch">
                <div v-for="tooltip in tooltips" class="house__tooltip" :class="[{'house__tooltip__active' : tooltipActive[tooltip.appliance + ',' + tooltip.room]}, 'house__'+(tooltip.appliance)+'__'+(tooltip.room)]" >
                    <span class="house__tooltip__icon"
                        :class="[{'layer' : tooltip.num > 1},
                                {'lightItRight' : tooltip.category === 'La iluminación Correcta'},
                                {'getSet' : tooltip.category === 'Configuración de Nivels'},
                                {'sealItUp' : tooltip.category === 'Sellalo'},
                                {'flowLow' : tooltip.category === 'Bajo Flujo'},
                                {'turnItOff' : tooltip.category === 'Apágalo'},
                                {'washItWell' : tooltip.category === 'Lavar bien'},
                                {'beSmart' : tooltip.category === 'Se Inteligente'},
                                {'didYouKnow' : tooltip.category === '¿Sabías?'},
                                {'keepItClean' : tooltip.category === 'Mantenlo Limpio'}]" @click="openPopup($event)"></span>
                    <div :style="tipStyle" class="house__popup" :class="[{'layer' : tooltip.num}, {'pos-fl' : tooltip.position === 'far left'}, {'pos-fr' : tooltip.position === 'far right'},{'pos-fb' : tooltip.position === 'far bottom'}]">
                        <div class="house__popup__content">
                            <span class="house__popup__close" @click="closePopup($event)"></span>
                            <div class="house__popup__text">
                                <em style="font-weight: bold;  font-style: normal; font-size: 24px;">{{tooltip.category}}</em><br><br>
                                <div v-html=tooltip.text></div>
                            </div>
                            <div class="house__popup__image" :class="[{'with-multiple-images' :  tooltip.image.split(',').length > 1}]" v-if="tooltip.image">
                                <div class="popup__image"  v-for="image in tooltip.image.split(',')">
                                    <embed :class="[ {'img-s' : tooltip.imageStyle === 'small'},{'img-l' : tooltip.imageStyle === 'large'},{'img-m' : tooltip.imageStyle === 'medium'}]" :src ="imgUrl(image.trim())" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <span class="house__tooltip__icon layer" :class="{'layer__active' : tooltip.num > 1}">{{tooltip.num}}</span>
                </div>
            </div>
        </drag-it-dude>
        <div class="house__controls">
            <i class="house__control fas fa-search-plus" aria-hidden="true" @click.prevent="zoomIn()"></i>
            <i class="house__control fas fa-search-minus" aria-hidden="true" @click.prevent="zoomOut()"></i>
            <i class="house__control play music-icon" aria-hidden="true" @click.prevent="$soundEffects.toggle()"  v-on:click="toggleSoundIcon($event);"></i>
        </div>
    </div>
</template>

<script>
    import DragItDude from './vue-drag-it-dude';
    import { mapState, mapGetters } from 'vuex';
   

    export default {
        components: {
            DragItDude
        },

        // Adds a resize listener on window creation
        mounted() {
            window.addEventListener('resize', this.recalcScale);

            this.$nextTick(() => {
                this.recalcScale();
                this.$nextTick(() => { 
                    this.$refs.houseDrag.center();
                });
            });
        },

        // Destroys resize listener on window destruction
        beforeDestroy() {
            window.removeEventListener('resize', this.recalcScale);
        },

        // Local variables
        data() {
            return {
                scale: 1,           // user controlled scaling of image
                houseTop: -100,
                houseLeft: 0,
                tipScale: 1,
                clientWidth: 1,     // scale of width of displayed house image, relative to original size
                clientHeight: 1,    // scale of height of displayed house image, relative to original size
                zoomSteps: 16,
                minScale: 1,
                tooltipActive: {
                    "furnace,basement": 0,
                    "lights,entrance": 0,
                    "lights,family-room": 0,
                    "shower,lower-bathroom": 0,
                    "washer,basement": 0,
                }
            }
        },

        // Computed variables are set whenever one of the variables involved changes value
        computed: {
//            minScale() { return 0.5; },  // minimum possible scale allowed (zooming out)
              maxScale() { console.log("here w/ " + this.clientWidth * 4); return this.clientWidth * 4; },       // maximum possible scale allowed (zooming in)
              

            // style: a css command transforming the house image
            // Controls both scale and translation
            style() {
                return {
                    transform: "scale(" + (this.scale) + ", " + (this.scale) + ")",
//                    transform: "translateX(-25%) translateY(-25%)",
                };
            },
            tipStyle() {
                return {
                    transform: "scale(" + 1/this.scale + ")",
                };              
            },
            // Generates getter functions for listed variables
            ...mapGetters([
                'tooltips'
            ]),
        },

        // Functions that can be called
        methods: {
            // Zoom house image out
            zoomOut() {
                this.scale = Math.max(this.minScale, this.scale - (this.maxScale - this.minScale) / this.zoomSteps);
            },

            // Zoom house image in
            zoomIn() {
                this.scale = Math.min(this.maxScale, this.scale + (this.maxScale - this.minScale) / this.zoomSteps);
            },
            //Get Image path
            imgUrl(path){
	            const url = require(`@/assets/${path}`);
              return url;
            },
            //Toggle Sound Icon
            toggleSoundIcon(event){
	            event.target.classList.toggle("play");
            },
            //Open Popup
            openPopup(event){
	            
	            var elems = document.querySelectorAll(".house__tooltip");

              // close other ones
      				[].forEach.call(elems, function(el) {
      				    el.classList.remove("hovered");
      				});

  	            document.querySelectorAll(".house__image")[0].classList.add("modal");				
              // open this one

	            event.target.parentElement.classList.toggle("hovered");
	            document.querySelectorAll(".house__controls")[0].style.zIndex = "-1";
	            
              var popupPos = event.target.parentElement.querySelectorAll(".house__popup")[0].getBoundingClientRect();
              var housePos = document.querySelectorAll(".quiz__house")[0].getBoundingClientRect();

              // check the bounding. Could make this more sophisticated but keeping it clear and simple for now.
              if (housePos.left > popupPos.left) {
                var diffLeft = Math.round(housePos.left - popupPos.left);
                var newLeft = parseInt(this.houseLeft) + diffLeft + 20; // add a bit of padding
                this.houseLeft = newLeft; 
                //console.log("now " + this.houseLeft);                
              } else if (popupPos.right > housePos.right) {
                var diffRight = Math.round(popupPos.right - housePos.right);
                //console.log(this.houseLeft);
                var newLeft = parseInt(this.houseLeft) - diffRight - 20; // add a bit of padding
                this.houseLeft = newLeft;                 
              }
              
              // now the bottom (assuming top should always be ok)
              var popupBottom = popupPos.height + popupPos.top;
              var houseBottom = housePos.top + housePos.height;
              if (popupPos.height + popupPos.top > housePos.height + housePos.top) {
                var diffTop = parseInt(popupBottom) - parseInt(houseBottom);
                var newTop = parseInt(this.houseTop) - diffTop - 20;
                this.houseTop = newTop;                                 
              }
	        },
	        //position Popup
	        posPopup(event){
		        if(document.querySelectorAll(".house__tooltip.hovered .house__popup").length > 0){
			        
			        var houseImageWidth = Math.round(document.querySelectorAll(".quiz__house")[0].getBoundingClientRect().width);
		            var houseImageHeight = Math.round(document.querySelectorAll(".quiz__house")[0].getBoundingClientRect().height);
		            console.log("HouseImageWidth:" + houseImageWidth);
		            console.log("HouseImageHeight:" + houseImageHeight);
		            var activePopupWidth = Math.round(document.querySelectorAll(".house__tooltip.hovered .house__popup")[0].getBoundingClientRect().width) ; // add padding  
		            var activePopupHeight = Math.round(document.querySelectorAll(".house__tooltip.hovered .house__popup")[0].getBoundingClientRect().height);   // add padding
		            
		            var posLeft = (houseImageWidth - activePopupWidth) / 2 ;
		            var houseDragTop = parseInt(document.querySelectorAll(".drag-it-dude.house__drag")[0].style.top);
		            var houseDragLeft = parseInt(document.querySelectorAll(".drag-it-dude.house__drag")[0].style.left);
		            console.log(houseDragTop);
		            console.log(houseDragLeft);
		           
		            var posTop1 = ( houseDragTop + houseImageHeight - activePopupHeight ) / 2 + "px"; 
		            //console.log("POS WOT DRAG:" + posTop1);
		            var posTop = ((( houseImageHeight - activePopupHeight ) / 2) + Math.abs(houseDragTop)) + "px";
		            //console.log("POS W DRAG: "+posTop);
		            
		            //console.log("HERE:"+posLeft);
		            //console.log("HERE:"+houseDragLeft);
		            if(houseDragLeft < 0){
			            //posLeft =  Math.abs(posLeft) + Math.abs(houseDragLeft) + "px";
			            posLeft = posLeft + Math.abs(houseDragLeft) + "px";
		            }
		            else{
			            posLeft = posLeft + "px";
		            }
		            
		            //var posTop = ( houseDragTop + houseImageHeight - activePopupHeight ) / 2 + "px"; 
		            //console.log("HERE:"+posLeft);
		            var a = document.querySelectorAll(".drag-it-dude.house__drag")[0].style;
		            console.log("POS Final Left"+posLeft);
		            console.log("POS Final:" + posTop);
		            console.log("HouseWidth: " + houseImageWidth);
		            console.log("HousHeight: " + houseImageHeight);
		            console.log("ActivePopupWidth: " + activePopupWidth);
		            console.log("ActivePopupHeight : " + activePopupHeight);
		            //console.log("POS Final:" + posTop);
		            //document.querySelectorAll(".overlay-content")[0].appendChild(document.querySelectorAll(".house__tooltip.hovered .house__popup")[0].cloneNode(true));
		            //document.querySelectorAll(".house__tooltip.hovered .house__popup")[0].classList.add("np-debug");
		            document.querySelectorAll(".house__tooltip.hovered .house__popup")[0].style.left = posLeft  ;
		            document.querySelectorAll(".house__tooltip.hovered .house__popup")[0].style.top = posTop  ;
		            //document.querySelectorAll(".house__tooltip.hovered .house__popup")[0].style.marginLeft = posLeft ;
		            //document.querySelectorAll(".house__tooltip.hovered .house__popup")[0].style.marginTop = posTop ;
					//document.querySelectorAll(".overlay-content")[0].style.height = houseImageHeight  + "px";
					//document.querySelectorAll(".overlay-content")[0].style.width = houseImageWidth  + "px";
				}
	        },
            //Close Popup
            closePopup(event){
	            //event.target.closest(".house__tooltip").classList.toggle("hovered");
	            //event.target.parentElement.classList.remove("hovered");
	            //console.log(event.target.parentElement.classList);
	            var elems = document.querySelectorAll(".house__tooltip.hovered");

      				[].forEach.call(elems, function(el) {
      				    el.classList.remove("hovered");
      				});
	            document.querySelectorAll(".house__controls")[0].style.zIndex = "0";      				
 	            document.querySelectorAll(".house__image")[0].classList.remove("modal");					            
            },
            pintch(e) {
	            if(document.documentElement.clientWidth < 768){
		           // shouldn't this be merged in with the stuff above?
                if (e.scale < 1.0) {
        					// User moved fingers closer together
                  this.scale = Math.max(this.minScale, this.scale - (this.maxScale - this.minScale) / this.zoomSteps);
      					
      				  } else if (e.scale > 1.0) {
      					  // User moved fingers further apart
                  this.scale = Math.min(this.maxScale, this.scale + (this.maxScale - this.minScale) / this.zoomSteps);
      				  }
				      }
            },
			// Resetposition on resize
            resetPosition() {
                // gc new code to center it... NOT WORKING YET
                // needs checks to see if the house is already fully visible, and to be made to work with the dragging stuff.
                /*
                var house = document.querySelectorAll(".house")[0];
                var drag = document.querySelectorAll(".house__drag")[0];                
                // get the size of the main image and divide it by 2
                var houseWidth = Math.round(1-house.clientWidth / 2);
                // now slide us over
                drag.style.left = houseWidth+"px";
                console.log("moved to " + drag.style.left);
                */
            },

            // Recalculates the scale upon resize
            recalcScale() {
	            if(document.documentElement.clientWidth > 767) {
                  // GC no idea wth is happening here
                    var sb = document.querySelectorAll(".quiz__taking")[0];
                    var mainWidth = document.documentElement.clientWidth - sb.clientWidth;
                    this.clientWidth = mainWidth / (2794/2); // what the af?
                    // gc quick hack to at least get it working
                    if (this.clientWidth <= 0) this.clientWidth = 0.5;
                    this.clientHeight = document.documentElement.clientHeight / (2700/2);
                    this.scale = Math.max(this.clientWidth, this.clientHeight, 1);

                    this.minScale = 1;
	            } else {
		            this.clientWidth = (document.documentElement.clientWidth) / (2794/4);
                    this.clientHeight = document.documentElement.clientHeight / (2700/4);
                    this.scale = Math.min(this.clientWidth, this.clientHeight);
                    this.minScale = Math.min(1, this.scale);
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/utils.scss";
    @import url("https://use.fontawesome.com/releases/v5.2.0/css/all.css");
	
	$blue : #3AA9EA;
	$yellow: #FAD03C;
	$purple: #88008E;
	$green: #28B753;
	
    %tooltip {
        position: relative;
        display: block;
        padding: 0;
        border: 0;
        margin: 0;
        opacity: 0;
        background: transparent;
        border-radius: 50%;
        opacity: 1;
        height: 24px;
        width: 24px;
        top: 0px;
    }
	
    %icon {
        background-repeat: no-repeat;
        background-size: 12px 12px;
        background-position: center;
    }

    .layer {
        display: none;

        &__active {
            display: block;
        }
    }

    .select {

    }            

    .house {
        position: relative;
        height: 100%;
        width: 100%;
        overflow: hidden;
        background: #070F25;

        &__drag {
            z-index: 0;
        }

        &__image {
	        @include bp(0,767, width){
		        width: 1397px;
            height: 1350px;
            background-size: 1397px 1350px;
				/*
				width: 100%;
				height: 100%;
		        background-size: 100% 100%;*/
		        background-repeat:no-repeat;
	        }
	        
	        @include bp(768,5000, width){
		        position: absolute;
		        width: 1397px;
    				height: 1350px;
    				background-size: 1397px 1350px;
	        }
            
/*
            top: 50%;
            left: 50%;
*/
			

            background-image: url('../assets/house.png');
            transition: transform 100ms ease;
            transition: left 10ms ease;
            transition: top 10ms ease;
            transform-origin: 0 0;
            .img-s{
	            //max-width:120px;
	            max-height:135px;
            }
            
            &.modal::before {
              position: absolute;
              width: 100%;
              height: 100%;
              content: " ";
              background: rgba(0,0,0,.8);
            }
            
        }

        &__controls {
	        @include bp(0,767, width){
		        left: 82%;
				top: 10px;
	        }
	        @include bp(768, 5000,width){
		        right: 10px;
				top: 10px;
	        }
            position: absolute;
            font-size: 35px;
            .music-icon{
	            margin-top:45px;
	            background-size:cover;    
  		        width:35px;
  		        height:35px;
  		        display:inline-block;
	            &.play{
		            background-image: url('../assets/NEF_music_on.svg');
	            }
	            &:not(.play){
		            background-image: url('../assets/NEF_music_silent.svg');
	            }
            }
        }

        &__control {
            display: block;
            margin-top: 5px;
            color: rgba($color-light-orange, .6);
            cursor: pointer;
            transition: color 200ms ease;
            z-index: 1;

            &:hover {
                color: rgba($color-light-orange, 1);
            }
        }

        &__tooltip {
            position: absolute;
            display: block;
            padding: 0;
            border: 0;
            margin: 0;
            opacity: 0;
            background: transparent;
            border-radius: 50%;
            opacity: 1;
            height: 20px;
            width: 20px;
            top: 0px;
            
            &.hovered {
              z-index: 3;
            }

            &__icon {
                height: 20px;
                width: 20px;
                z-index: 1;
                color: white;
                position: absolute;
                font-size: 14px;
                background-color: #00afef;
                border-radius: 50%;
				cursor: pointer;
				
                &:hover{
                    z-index: 3;
                }
                &.far{
	                &::before{
		                display:inline-block;
		                position:relative;
		                left:5px;
		                top:3px;
	                }
                }
            }
			
            .getSet { 
            	background-image: url('../assets/icon-turn.svg'); 
            	@extend %icon; 
            	background-color:$green;
            	& + .house__popup{
	            	border-color: $green;
	            	em, .house__popup__close::before{
		            	color: $green;
	            	}
            	}
            }
		    .sealItUp { 
		    	background-image: url('../assets/icon-window.svg'); 
		    	@extend %icon; 
		    	background-color:$blue;
		    	& + .house__popup{
	            	border-color: $blue;
	            	em, .house__popup__close::before{
		            	color: $blue;
	            	}
            	}
		    }
		    .keepItClean { 
		    	background-image: url('../assets/icon-mopfluid.svg'); 
		    	@extend %icon; 
		    	background-color:$green;
		    	& + .house__popup{
	            	border-color: $green;
	            	em, .house__popup__close::before{
		            	color: $green;
	            	}
            	}
		    }
		    .lightItRight { 
		    	background-image: url('../assets/icon-light.svg'); 
		    	@extend %icon; 
		    	background-color:$yellow;
		    	& + .house__popup{
	            	border-color: $yellow;
	            	em, .house__popup__close::before{
		            	color: $yellow;
	            	}
            	}
		    }
		    .flowLow { 
		    	background-image: url('../assets/icon-water.svg'); 
		    	@extend %icon; 
		    	background-color:$blue;
		    	& + .house__popup{
	            	border-color: $blue;
	            	em, .house__popup__close::before{
		            	color: $blue;
	            	}
            	}
		    }
		    .turnItOff { 
		    	background-image: url('../assets/icon-lightening.svg'); 
		    	@extend %icon; 
		    	background-color:$purple;
		    	& + .house__popup{
	            	border-color: $purple;
	            	em, .house__popup__close::before{
		            	color: $purple;
	            	}
            	}
		    }
		    .washItWell { 
		    	background-image: url('../assets/icon-washingmachine.svg'); 
		    	@extend %icon; 
		    	background-color:$yellow;
		    	& + .house__popup{
	            	border-color: $yellow;
	            	em, .house__popup__close::before{
		            	color: $yellow;
	            	}
            	}
		    }
		    .beSmart { 
		    	background-image: url('../assets/icon-brain.svg'); 
		    	@extend %icon; 
		    	background-color:$purple;
		    	& + .house__popup{
	            	border-color: $purple;
	            	.house__popup__close::before{
			            	color: $purple;	
		            }
	            	& .house__popup__text{
		            	em{
			            	color: $purple;	
		            	}
	            	}
            	}
		    }
		    .didYouKnow { 
		    	background-image: url('../assets/icon-book.svg'); 
		    	@extend %icon; 
		    	background-color:$green;
		    	background-size: 20px 20px ;
		    	& + .house__popup{
	            	border-color: $green;
	            	.house__popup__close::before{
			            	color: $green;	
		            }
	            	& .house__popup__text{
		            	em{
			            	color: $green;	
		            	}
	            	}
            	}
		    }
        }
		
        // modifiers for tweaking the position (for new image)
        $widthMod: 280px;
        $heightMod: 30px;
        
        &__refrigerator {
            &__kitchen {
                top: 675px + $heightMod;
                left: 330px + $widthMod;
            }
        }
        &__ceiling {
            &__bedroom {
                top: 175px + $heightMod;
                left: 340px + $widthMod;
            }
        }
        &__wall {
            &__living-room {
                top: 840px + $heightMod;
                left: 100px + $widthMod;
            }
        }
         &__smart-app {
            &__living-room {
                top: 865px + $heightMod;
                left: 250px + $widthMod;
            }
        }
        &__air-conditioner {
            &__outside {
                top: 830px + $heightMod;
                left: 45px + $widthMod;
            }
        }
        &__car {
            &__outside {
                top: 695px + $heightMod;
                left: 15px + $widthMod;
            }
        }
        &__door {
            &__living-room {
                top: 685px + $heightMod;
                left: 255px + $widthMod;
            }
        }
        &__window {
            &__bathroom {
                top: 670px + $heightMod;
                left: 675px + $widthMod;
            }

            &__bedroom {
                top: 300px + $heightMod;
                left: 230px + $widthMod;
            }
        }
        
        &__showerhead {
            &__bathroom {
                top: 685px + $heightMod;
                left: 620px + $widthMod;
            }
        }
        &__wind {
            &__outside {
                top: 395px + $heightMod;
                left: 80px + $widthMod;
            }
        }
        &__lights {
            &__tv-room {
                top: 395px + $heightMod;
                left: 355px + $widthMod;
            }
        }
        &__television {
            &__tv-room {
                top: 480px + $heightMod;
                left: 410px + $widthMod;
            }
        }
        &__smart-outlet {
            &__tv-room {
                top: 562px + $heightMod;
                left: 85px + $widthMod;
            }
        }
        &__lights {
            &__study {
                top: 490px + $heightMod;
                left: 520px + $widthMod;
            }
        }
        &__devices {
            &__study {
                top: 525px + $heightMod;
                left: 705px + $widthMod;
            }
        }
        &__toilet-tank {
            &__bathroom {
                top: 775px + $heightMod;
                left: 665px + $widthMod;
            }
        }
        &__water-outlet {
            &__outside {
                top: 810px + $heightMod;
                left: 800px + $widthMod;
            }
        }
        &__smart-meter {
            &__outside {
                top: 830px + $heightMod;
                left: 760px + $widthMod;
            }
        }
         &__sun {
            &__outside {
                top: 300px + $heightMod;
                left: 740px + $widthMod;
            }
        }
        &__faucet {
            &__bathroom {
                top: 788px + $heightMod;
                left: 702px + $widthMod;
            }

            &__kitchen {
                top: 690px + $heightMod;
                left: 425px + $widthMod;
            }
        }
        &__dishwasher {
            &__kitchen {
                top: 705px + $heightMod;
                left: 390px + $widthMod;
            }
        }
        &__metal-duct {
            &__basement {
                top: 945px + $heightMod;
                left: 690px + $widthMod;
            }
        }
        &__waterheater {
            &__basement {
                top: 980px + $heightMod;
                left: 650px + $widthMod;
            }
        }
        &__showerhead {
            &__upstairs-bathroom {
                top: 260px + $heightMod;
                left: 400px + $widthMod;
            }
        }

        &__thermostat {
            &__living-room {
                top: 755px + $heightMod;
                left: 485px + $widthMod;;
            }
        }
        &__furnace {
            &__basement {
                top: 1100px + $heightMod;
                left: 550px + $widthMod;;
            }
        }
        &__air-heating-system {
            &__basement {
                top: 1015px + $heightMod;
                left: 500px + $widthMod;;
            }
        }
        &__dryer {
            &__basement {
                top: 1005px + $heightMod;
                left: 400px + $widthMod;;
            }
        }
        &__washer {
            &__basement {
                top: 990px + $heightMod;
                left: 350px + $widthMod;;
            }
        }
        &__washer-dryer {
            &__basement {
                top: 1035px + $heightMod;
                left: 375px + $widthMod;;
            }
        }
        &__lights {
            &__basement {
                top: 1030px + $heightMod;
                left: 160px + $widthMod;;
            }
        }

        // all popups
        &__popup {
           // left: -670%;
            position: absolute;
            cursor: default;
           // top: 45%;
            height: auto;
            
            top: 10px;
                        
            transform-origin: top center; 
            
            background: #fff;
            border: 2px solid #00afef;
            color: #6d6e71;
            display: flex;
            flex-direction: column;
            padding: 4px 10px;
            transition: opacity 100ms ease;
            
            z-index: 1;
            display: none;

            width: 300px;
            left: -150px;
            font-size: 12px;
            line-height: 1.5em;
            margin-bottom: 50px;
            
            @include bp(m) {
              width: 450px;
              left: -225px;
              font-size: 16px;
              
            }


            .house__tooltipDISABLED:hover &, .house__tooltip.hovered & {
                display: block;
            }
            &__close{
	            position:absolute;
	            right:6px;
	            top:6px;
	            &, &::before{
		            cursor:pointer;
	            }
            }
            &__text{
	            margin-top:10px;
	            margin-bottom:10px;
            }
            &__image{
	            text-align:center;
	            margin-top:10px;
	            margin-bottom:10px;	            
		       
		       &.with-multiple-images .popup__image{
			        float:left;
    					width:47%;
    					margin-right:3%;
			       	@include bp(0,767, width){
				       	margin-bottom:10px;
				       	
			       	}
			       	@include bp(768,5000, width){
		        		
					}

		       }
			    
	            img{
		            height:100px;
		            width:auto;
	            }
            }
/* Shouldn't be needed as we're scrolling
            &.pos-fl{
	            left:10px !important;
            }
            &.pos-fr{
	            left: auto !important;
	            right:10px !important;
            }
            &.pos-fb{
	            top: auto !important;
	            bottom: 10px !important;
            }
*/
            &__close{
	            &::before{
		            content: "x";
		            font-size: 24px;
		            font-family: $font-headline-sans-serif;
	            }
            }
        }
        .house__tooltip.hovered .house__tooltip__icon{
	        z-index:5;
        }
    }
    
</style>
