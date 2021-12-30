<template>
    <div class="start">
        <h1 class="start__title" :class="'start__title--'+character"></h1>
        <p class="start__desc" v-html="title"></p>
        <a class="start__start-quiz" href="#" @click.prevent="startQuiz()">Empieza La Prueba</a>
        <span>o <a class="start__pick_another" href="#" v-scroll-to="'.house__drag'" @click.prevent=startOver()>elije otro personaje.</a></span>
        
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

        // Computed variables are set whenever one of the variables involved changes value
        computed: {
            // title: The description indicating whether the question was answered correctly, with different responses for each character
            title() {
              
                var opt = Math.floor((Math.random() * 4) + 1);              
                
                switch(this.character) {
                    case 'baby':
                        return "Hazme sentir feliz respondiendo bien el cuestionario. Ten cuidado: si me desilusionas, ¡podría llorar por horas!";
                    case 'fish':
                      switch(opt) {
                        case 1:
                         return "¿Cómo se llama un pez grandote? ¡Pezado! ";
                        case 2:
                         return "¿Por qué los peces de colores son fáciles de pesar? ¡Traemos nuestras propias escalas! ¡Juguemos!";
                        case 3:
                         return "¿Qué hace un pez dorado? ¡Nada! ";
                        case 4:
                         return "Two goldfish are in a tank. One turns to the other and says 'how do you drive this thing?'  Let's play the game!";
                      } 
                    case 'robot':
                        return "BLIP BLIP. Ayúdame a conquistar el mundo. Quiero decir, ayúdame a mostrarme cuánto sabes sobre la eficiencia energética. OLVÍDATE LO QUE DIJE SOBRE CONQUISTAR EL MUNDO.";
                    case 'dog':
                        return "¡GUAU! ¡Cuantas más respuestas obtengas, más premios me dará mi familia!";
                    case 'grandpa':
                        return "¡Hola! ¿Sabías que este juego tiene lo que llaman un 'diseño receptivo', por lo que incluso puedes usarlo en un teléfono o tableta?";
                }
            },

            // Gets state properties for listed variables
            ...mapState([
                'character',
                'answers'
            ]),

            // Generates getter functions for listed variables
            ...mapGetters([
                'questions',
                'score'
            ]),
        },

        // Functions that can be called
        methods: {
            // Navigates to the next question
            // If there are no questions left, navigates to the final starts page
            startQuiz() {
                    this.$router.push({ name: 'question', params: { question: 0 } });
            },
            // Returns to character select
            startOver() {
                this.$store.commit('resetCharacter');
                this.$store.commit('resetAnswers');
                this.$router.push({ name: 'characterSelect' });
            },            
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/utils.scss";

    .start {
        padding: 40px;
        height: calc(100% - 80px);
        background-color: $color-green;
        color: $color-white;
        text-align: center;

        @include bp(xl) {
            position: absolute;
        }

        &--wrong {
            background-color: $color-alt-orange;

            .start__title {
                &--baby { background-image: url('../assets/characters/character-baby-sad.svg'); }
                &--fish { background-image: url('../assets/characters/character-fish-sad.svg'); }
                &--robot { background-image: url('../assets/characters/character-robot-sad.svg'); }
                &--dog { background-image: url('../assets/characters/character-dog-sad.svg'); }
                &--grandpa { background-image: url('../assets/characters/character-grandpa-sad.svg'); }
            }
        }

        &__title {
            font-family: $font-headline-sans-serif;
            text-transform: uppercase;
            font-size: 20px;
            line-height: 1.1em;
            margin: 0px 0px 15px 0px;
            padding-top: 150px;
            background-repeat: no-repeat;
            @supports (display: grid) {
            	background-size: 130px auto;
            }
            background-position: center top;

            &--baby { background-image: url('../assets/characters/character-baby-happy.svg'); }
            &--fish { background-image: url('../assets/characters/character-fish-happy.svg'); }
            &--robot { background-image: url('../assets/characters/character-robot-happy.svg'); }
            &--dog { background-image: url('../assets/characters/character-dog-happy.svg'); }
            &--grandpa { background-image: url('../assets/characters/character-grandpa-happy.svg'); }
        }

        &__desc {
            font-size: 18px;
            line-height: 1.3em;
            margin: 0px 0px 40px 0px;
        }

        &__start-quiz {
            @include button($color-orange);
            font-size: 14px;
            margin-top: 40px;
        }
        
        span { display: block; padding: .5em; 
          font-size: 80%;
        }
        &__pick_another {
          display: block;
          clear: both;
          color: white;
          padding-top: .5em;
        }
    }
</style>
