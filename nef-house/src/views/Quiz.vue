<template>
    <div class="quiz">
        <div class="quiz__house">
            <House></House>
        </div>
    
        <div class="quiz__taking">
            <div class="quiz__content">
                <router-view></router-view>
            </div>
            <div class="quiz__footer">
                Presentado por: <br>
                <span v-for="client in clients" class="client-logo" v-if="client.image">
                 <a v-bind:href="client.link" ><img :src ="imageUrl(client.image)" v-if="client.image" v-bind:alt="client.clientName" class="quiz__footer-logo"  /> </a>
                </span>
                <br>
                <br>
                <p class="quiz__footer__copy">Todos los personajes y elementos que se muestran en este juego son marcas comerciales no registradas de National Energy Foundation.</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    import House from '@/components/House.vue';
  
    export default {
      name: 'quiz',
      components: {
        House
      },
      data(){
          return{
                clients: window.nefHouseConfig.providers
          }
      },
       methods: {
	       	//Get Image path
	        imageUrl(path){
                return path;
	            // const url = require(`@/assets/${path}`);
				// return url;
	        },
       }
      
	}
</script>

<style lang="scss" scoped>
    @import "@/styles/utils.scss";

    .quiz {
        width: 100%;
        height: 100%;
//        max-width: 1940px;
       
                             
                             
        @include bp(m) {        
        	
        }
        
        
        &__house {
          width: 100%;
          // provide room for the footer          
          height: calc(100vh - 185px); // 145 charsel + padding
          min-height: calc(100vh - 185px);
          
          // handle device height (ipad):
          @media only screen 
            and (min-device-width: 1024px) 
            and (max-device-width: 1366px) 
            and (orientation: portrait) 
            and (-webkit-min-device-pixel-ratio: 1.5) 
          {
              height: calc(100vh - 225px);
              min-height: calc(100vh - 225px);
          }
          
          @include bp(xl) {
	          float:right;
	          width:59.9%;
	          height:100%;
	        //   height: calc(100vh + 185px);
//	          min-height: calc(100vh + 80px);
          }
          @include bp(xxl) {
            width: 72%;
          }
        }
        

        &__taking {
         width:100%;
         min-height:185px;
         position:relative;

          @include bp(xl) {
           	// float:left;
            width:40.1%;
               min-height:100%;
               display: flex;
               flex-direction: column;
          }

          @include bp(xxl) {
            width: 28%;
          }
        }
        
        &.ad {
	        .quiz__taking{
  		    	position:absolute;
            width:100%;
            -webkit-transition: width 0.3s; /* Safari */
            transition: width 0.3s;   
	        }
        }
        
        
        &__house {
          
        }

        &__content {        
            flex: 1;
            position: relative;
        }

        &__footer {
            box-sizing: border-box;
            width: 100%;
            
            // left: 0px;
            // include bp(m) {
            //   top: calc(100vh - 80px);
            // }
            // position:absolute;
            background-color: $color-white;
            padding: 5px 20px;
            line-height: 1.5em;
            font-size: 12px;

            &__copy {
                text-align: left;
                font-size: 12px;
                background-color: $color-white;
                color: $color-dark-gray;
                
                span {
                  white-space: nowrap;
                }
            }
            .client-logo{
	            &, a{
		            display:inline-block;
		            margin-right: 5px;
	            }
            }
        }

        &__footer-logo {
            display: inline;
            vertical-align: middle;
            background-color: $color-white;
            margin: 0px 8px 0px 0px;
        }
    }
</style>
