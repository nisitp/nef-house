<template>
    <div class="loadScreen">

        <div class="loadScreen__intro">
          <h1><img src="../assets/energy-efficiency-header.png" alt="Energy Efficiency" /></h1>
          <h2><img src="../assets/energy-behaviors-banner.png" alt="and Wise Energy Behaviors" /></h2>
        </div>
        <div class="loadScreen__box">
            <p>On the next screen, use your mouse or mobile device to drag around and explore the home. Click on bubbles for tips that will help your score in our fun game.</p>
            <p><a href="#" class="loadScreen__button" @click.prevent="letsPlay()">Let's Play!</a></p>
            <div class="loadScreen__box__broughtby">
                Brought to you by:
                <span v-for="client in clients" class="client-logo" v-if="client.image">
                 <a v-bind:href="client.link" ><img :src ="imageUrl(client.image)" v-if="client.image" v-bind:alt="client.clientName" class="loadScreen__footer-logo" v-bind:height="client.imageHeight" v-bind:width="client.imageWidth" /> </a>
                </span>
            </div>
        </div>
        <!--<div class="loadScreen__footer">
            <div class="loadScreen__footer-left">
                The Energy Efficiency House by NEF
            </div>
        </div>-->
    </div>
</template>

<script>
    export default {
	    data(){
          return{
              clients: window.nefHouseConfig.providers
          }
		},
        // Functions that can be called
        methods: {
            // Initializes the app, showing the user the character select screen and playing both the background music and voiceover
            letsPlay() {
                this.$router.push({ name: 'characterSelect' });
                this.$soundEffects.play('voiceover');
                this.$soundEffects.play('background');
                this.$soundEffects.mute('background', true);
                setTimeout(() => this.$soundEffects.mute('background', false), 44000);                
            },
            //Get Image path
	        imageUrl(path){
                return path;
	            // const url = require(`@/assets/${path}`);
				// return url;
	        },
        }
    }
</script>

<style scoped lang="scss">
    @import "@/styles/utils.scss";

    .loadScreen {
        position: relative;
        width: 100%;
        height: 100%;
        background-image: url("../assets/house.png");
        background-size: cover;
        background-position: 50% 0;
        background-repeat: no-repeat;
        font-size: 10px;
        @include bp(768, 2500, width){
	        min-height:1300px;
        }
        @include bp(2501, 4000, width){
	        min-height:1700px;
        }
        &__intro {

          text-align: center;          
          padding-top: 5vh;
          
          @include bph(1000) { // height breakpoints ftw
            padding-top: 10vh;
          }
          
          
          img {
            max-width: 90%;
          }
          
        }    

        &__box {
            background:rgba(255,255,255,.9);          
            box-sizing: border-box;
            width: 55%;
            max-width: 625px;
            margin:0 auto;
            
            font-family: $font-content;
            font-size: 3vw;
            
            @include bp(l) {
              font-size: 1.5vw;
            }
            
            line-height: 1.35em;
            color: $color-dark-gray;
            padding: 25px;


            & > p {
                margin: 0px 0px .7em 0px;

                &:nth-child(2) {
                    text-align: center;
                }
            }
        }

        &__button {
            @include button($color-green);
            font-size: 1em;
            line-height: 1em;
        }

        &__footer {
            box-sizing: border-box;
            position: absolute;
            width: 100%;
            height: 70px;
            left: 0px;
            bottom: -1px;
            background-color: $color-white;
            padding: 0px 40px;
        }

        &__footer-left {
            font-size: 12px;
            text-transform: uppercase;
            font-style: italic;
            font-weight: bold;
            color: $color-cyan;
            float: left;
            line-height: 70px;
        }

        &__box__broughtby {
            font-size: 8px;
            //float: right;
            //line-height: 70px;
            text-align:center;
            @include bp(m) {
	            text-align:right;
            }
            
        }

        &__footer-logo {
            display: inline;
            vertical-align: middle;
            margin: 0px 8px;
        }
        
    }
</style>
