<template>


    <div class="final"> 
      <canvas id="final-screen" class="final__confetti"></canvas>    
      <div class="final__details">
        <h1 class="final__title" :class="'final__title--'+character" v-html="title"></h1>
        <p class="final__desc" v-html="scoreWriteup"></p>

        <div class="final__ad_data">
        	<p><img :src ="imgUrl('NEF_SmartMeter.gif')" /></p>
        </div>
        <div class="final__score_data">        	
	        <p class="final__score"><i class="fa fa-leaf" aria-hidden="true"></i> Score: {{score}}</p>
	        <a class="final__play-again" href="#" @click.prevent="playAgain()">Play Again</a>
        </div>
    
        <div class="final__extra_links">     
          <h2 class="final__title" v-html="extraContentHeader"></h2>
          <p v-for="item in extraContentItems" v-html="item"></p>
        </div>        
      </div>
    </div>
    
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        // Local variables
        data() {
            return {
                selectedAnswer: null,
            };
        },

        // Once mounted, play sound associated with result screen
        mounted() {
            document.getElementsByClassName("quiz")[0].classList.add("ad");

            window.confetti = require('confetti-js');         
            var maxConfetti = 5 + (this.score * 10);
            var smartImg = require("@/assets/smart-meter.svg");
            //First example
            var canvas1Settings = {
              target: 'final-screen',
              max: maxConfetti,
              size: 1,
              props: ["circle","square","triangle","line",{ "type": "svg", "src": smartImg, "size": "100", "weight":0.025 }],
              colors: [[165,104,246],[230,61,135],[0,199,228]],
              clock: 35,
              rotate: true,
            };
            
            var canvas1 = new ConfettiGenerator(canvas1Settings);
            canvas1.render();            

            window.setTimeout(function(){
              document.getElementsByClassName("final__ad_data")[0].classList.add("hide");
              document.getElementsByClassName("final")[0].classList.add("with-celebratory-image");
              document.getElementsByClassName("final__score_data")[0].classList.add("show");
            }, 3000); 
            
            window.setTimeout(function(){
              document.getElementsByClassName("final")[0].classList.remove("with-celebratory-image");
            },4500); 
        },

        // Computed variables are set whenever one of the variables involved changes value
        computed: {
            // title: Dialogue in the results screen, with different responses for each character
            title() {
                switch(this.character) {
                    case 'baby':
                        return "How did you do?";
                    case 'fish':
                        return "How did you do?";
                    case 'robot':
                        return "BLEEPLE BLOOP. HOW MANY ANSWERS DID YOU GET RIGHT, HUMAN CREATURE?";
                    case 'dog':
                        return "Woof Woof, how did you do?";
                    case 'grandpa':
                        return "Well, young person,<br>how did you do?";
                }
            },
            scoreWriteup() {
              switch (this.score) {
                case 0:
                  return "Whoops - you didn't get any answers right! Have another look around the home and click on the bubbles to improve your knowledge, then try again for a higher score!";
                  break;
                case 10:
                  return "Hmmm... that didn't go so well! Have another look around the home and click on the bubbles to improve your knowledge, then try again for a higher score!"
                case 20:
                case 30:
                  return "Not too bad! But you could still do better; why not look around the home some more to improve your knowledge, then try again for a higher score!"
                
                case 40:
                  return "Your superior knowledge saved energy on the meter, natural resources and money. Learn more by clicking bubbles on the home and try again for the chance to improve your score!";
                  break;
                case 50:
                  return "Wow - you aced it! Great job on saving energy on the meter, natural resources and money!";
                  break;
              }
            },
            // Gets state properties for listed variables
            ...mapState([
                'character'
            ]),

            // Generates getter functions for listed variables
            ...mapGetters([
                'score'
            ]),
            
            // Quick hack to get any additional stuff from the HTML config
            extraContentHeader() {
              if (typeof window.nefHouseConfig.resultPage !== 'undefined') {
                return window.nefHouseConfig.resultPage.header;
              } 
            },
            
            extraContentItems() {
              if (typeof window.nefHouseConfig.resultPage !== 'undefined') {
                return window.nefHouseConfig.resultPage.links;
              }
            }
        },

        // Functions that can be called
        methods: {
            // Resets the questions, then starts the quiz agin at the first question
            playAgain() {
                this.$store.commit('resetAnswers');
                this.$router.push({ name: 'question', params: { 'question': 0 } });
            },

            // Resets the questions and character, then returns the player to the character select screen
            startOver() {
                this.$store.commit('resetCharacter');
                this.$store.commit('resetAnswers');
                this.$router.push({ name: 'characterSelect' });
            },
            imgUrl(path){
	            const url = require(`@/assets/${path}`);
				return url;
            },
        }
    }
</script>

<style lang="scss">
  .final__extra_links{
	  a{
	  	color: white;
	  }
	  h2{
		  padding-top:15px !important;
	  } 
  }
</style>
<style lang="scss" scoped>
    @import "@/styles/utils.scss";

    .final {
        padding: 40px;
        height: calc(100% - 80px);
        background-color: $color-cyan;
        color: $color-white;
        text-align: center;
        position: fixed;
        z-index: 3;
        width: calc(100% - 80px);
        top: 0px;
        left: 0px;
        &.with-celebratory-image{
//	        background-image: url('../assets/confetti-cannon.gif');
//	        background-size:cover;

        }
        
        &__confetti {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
        }
        &__title {
            font-family: $font-headline-sans-serif;
            text-transform: uppercase;
            font-size: 20px;
            line-height: 1.1em;
            margin: 0px 0px 15px 0px;
            padding-top: 150px;
            background-repeat: no-repeat;
            background-size: 130px auto;
            background-position: center top;

            &--baby { background-image: url('../assets/characters/character-baby-content.svg'); }
            &--fish { background-image: url('../assets/characters/character-fish-content.svg'); }
            &--robot { background-image: url('../assets/characters/character-robot-content.svg'); }
            &--dog { background-image: url('../assets/characters/character-dog-content.svg'); }
            &--grandpa { background-image: url('../assets/characters/character-grandpa-content.svg'); }
        }
        
        &__extra_links {
          padding-top: 5vh;
        }

    		&__ad_data {
    			margin-top:50px;
    			img{
    				max-width:150px;
    			}
    			&.hide{
    				display:none;
    				opacity:0;
    				-webkit-transition: all 1s; /* Safari */
    				transition: all 1s;   
    			}
    		}
    
    		&__score_data{
    			display:none;
    			opacity:1;
    			&.show{
    				display:block;
    				opacity:1;
    				-webkit-transition: all 1s; /* Safari */
    				transition: all 1s;
    			}
    			h2 {
    				padding-top:50px;
    			}
    		}

        &__desc {
//            font-size: 10px;
//            line-height: 1.3em;
            margin: 0px auto 40px auto;
            max-width:60%;
        }

        &__score {
            color: $color-green;
            font-size: 18px;
            text-transform: uppercase;
            font-weight: bold;
            margin: 0;

            & > i {
                margin-right: 5px;
            }
        }

        &__play-again {
            @include button($color-orange);
            font-size: 12px;
            margin-top: 40px;
        }

        &__start-over {
          position: absolute;
          top: 5px;
          left: 25px;
          margin-top: 5px;
          i{
            display:block;
          }
          @include bp(m) {        
      		  left: 215px;
          }

          & > a {
            color: $color-orange;
            font-size: 12px;
            text-transform: uppercase;
            font-weight: bold;
            text-decoration: none;
  
            &:hover {
                text-decoration: underline;
            }
          }
        }
      }
</style>
