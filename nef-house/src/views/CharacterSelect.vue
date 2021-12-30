<template>
    <div class="characterSelect">
      <div class="characterSelect__intro">
        <h1 class="characterSelect__title">¡Juguemos al juego de eficiencia energética!</h1>
        <p class="characterSelect__desc">Explora la casa y haz clic en las burbujas para obtener consejos de eficiencia energética. Luego, comprueba cuánto has aprendido: ¿qué puntaje puedes obtener?</p>
        <hr class="characterSelect__hr">
      </div>
        <h2 class="characterSelect__sub">PRUEBA TUS CONOCIMIENTOS</h2>
        <p class="characterSelect__desc">Elige un personaje para comenzar:</p>
        <div class="characterSelect__characters">
            <a href="#" @click="selectCharacter('baby')" v-scroll-to="{el: '.quiz__content', offset: -225 }"><img src="../assets/characters/character-baby-content.svg" alt="Baby" class="characterSelect__character__baby" /></a>
            <a href="#" @click="selectCharacter('fish')" v-scroll-to="{el: '.quiz__content', offset: -225 }"><img src="../assets/characters/character-fish-content.svg" alt="Fish" class="characterSelect__character__fish" /></a>
            <a href="#" @click="selectCharacter('robot')" v-scroll-to="{el: '.quiz__content', offset: -225 }"><img src="../assets/characters/character-robot-content.svg"  alt="Robot" class="characterSelect__character__robot" /></a>
            <a href="#" @click="selectCharacter('dog')" v-scroll-to="{el: '.quiz__content', offset: -225 }"><img src="../assets/characters/character-dog-content.svg"  alt="Dog" class="characterSelect__character__dog" /></a>
            <a href="#" @click="selectCharacter('grandpa')" v-scroll-to="{el: '.quiz__content', offset: -225 }"><img src="../assets/characters/character-grandpa-content.svg" alt="Grandpa" class="characterSelect__character__grandpa" /></a>
        </div>
    </div>
</template>

<script>
    export default {
	    mounted() {
            document.getElementsByClassName("quiz")[0].classList.remove("ad");
        },
        // Functions that can be called
        methods: {
            // Stops the voiceover dialogue, selects the character that will appear during the quiz, then starts the quiz
            // character: the ID of the character to be selected
            selectCharacter(character) {
                this.$soundEffects.stop('voiceover');
                this.$store.commit('setCharacter', character);
                this.$router.push({ name: 'begin' });

                this.$soundEffects.play(character + '-happy');
                this.$soundEffects.play('background');
                //VueScrollTo.scrollTo('.quiz__content');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/utils.scss";

    .characterSelect {
        padding: 20px;
        @include bp(0, xl) {
          height: 145px;
        }

        @media only screen 
          and (min-device-width: 1024px) 
          and (max-device-width: 1366px) 
          and (orientation: portrait) 
          and (-webkit-min-device-pixel-ratio: 1.5) 
        {
          height: 154px;

        }        

        @include bp(xl) {
          height: 100vh;
          box-sizing:border-box;
        }
        
        background-color: $color-cyan;
        color: $color-white;

        &__intro {
          display: none;
          
          @include bp(xl) {
            display: block;
          }
        }

        &__title {
            font-family: $font-headline-script;
            font-size: 32px;
            text-align: center;
            line-height: 1.1em;
            margin: 0px 0px 15px 0px;
            @include bp(l) {
              font-size: 40px;
            }
            @include bp(xl) {            
              font-size: 48px;
            }
        }

        &__desc {
            font-size: 14px;
            line-height: 1.3em;
            margin: 0px 0px 20px 0px;
        }

        &__hr {
            border: none;
            border-bottom: 1px solid $color-white;
//            margin: 0px 0px 20px 0px;
        }

        &__sub {
            font-size: 12px;
            text-transform: uppercase;
            margin: 0px 0px 5px 0px;
        }

        &__characters {  
	         &:after{
		         content: "";
             display: table;
             clear: both;
            }

    			a{
    		      display:	block;
    		      float:left;
    		      width:20%;
    		      img {
      		      max-width: 80px;
    		      }
    			}
        }

	    @supports (display: grid) {
		   	&__characters {  
				display: grid;
				grid-template-columns: 20% 20% 20% 20% 20%;
				text-align: center;
				a{
					display:inline;
			        float:none;
			        width:100%;
				}
				&:after{
					display:none;
				}
				@include bp(0, m){
			       	margin-left:-13px;
				}
				@include bp(xl,xxl) {
					grid-template-columns: repeat(12, 1fr);
		            a {
		                &:nth-child(-1n + 3) {
		                  -ms-grid-column: span 4;
		                  grid-column: span 4;
		                }
		                &:nth-last-child(2) {
		                  grid-row-start: 2;
		                  -ms-grid-column: 3 / span 4;
		                  grid-column: 3 / span 4;
		                }
		                &:nth-last-child(1) {
		                  grid-row-start: 2;
		                  -ms-grid-column: 7 / span 4;
		                  grid-column: 7 / span 4;
		                }
		
		            }
              }
            }
        }
        
        &__character {                                
            margin-bottom: 10px;
            img {
              border: 20px solid red;
            }
            
            &__baby,
            &__fish,
            &__robot,
            &__dog,
            &__grandpa {
                margin-bottom: 10px;
                padding: 0;
                cursor: pointer;
                z-index: 0;

                &:hover {
                    box-shadow: 0 0 60px 10px #ffff00;
                    border-radius: 50px;
                    background-color: rgba(255,255,0,0.63);
                    z-index: 1;
                }
            }

            // Uncomment if you want charaters displayed in a circle
            /*&__baby {
                position: fixed;
                top: 390px;
                left: 90px;
            }
            &__fish {
                position: fixed;
                top: 460px;
                left: 155px;
            }
            &__robot {
                position: fixed;
                top: 530px;
                left: 130px;
            }
            &__dog {
                position: fixed;
                top: 530px;
                left: 50px;
            }
            &__grandpa {
                position: fixed;
                top: 460px;
                left: 25px;
            }*/
        }
    }
</style>
