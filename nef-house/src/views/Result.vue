<template>
    <div class="result" :class="{'result--wrong':!correct}">
        <h1 class="result__title" :class="'result__title--'+character" v-html="title"></h1>
        <p class="result__desc" v-html="this.questions[this.questionId].result"></p>
        <p class="result__score"><i class="fa fa-leaf" aria-hidden="true"></i> Puntuación: {{score}}</p>
        <a class="result__next-question" href="#" @click.prevent="nextQuestion()">{{buttonText}}</a>
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
            // questionId: The id of the question (ex: 3rd question out of 10)
            questionId() {
                return this.$route.params.question;
            },

            // correct: A boolean indicating whether was answered correctly or not
            correct() {
                return this.answers[this.questionId];
            },

            // buttonText: Text that's displayed in next question button
            // If there are questions left, returns "Próxima pregunta", otherwise returns "Ver los resultados"
            buttonText() {
                return this.questionId + 1 >= this.questions.length ? "Ver los resultados" : "Próxima pregunta";
            },

            // title: The description indicating whether the question was answered correctly, with different responses for each character
            title() {
                switch(this.character) {
                    case 'baby':
                        return this.correct
                        ? "Ehehe!!!<br>¡LO HICISTE BIEN!"
                        : "Wah wah<br>¡ESA NO ES LA<br>RESPUESTA CORRECTA!";
                    case 'fish':
                        return this.correct
                        ? "Blub blub!!!<br>¡LO HICISTE BIEN!"
                        : "Bloop bloop<br>That's not the<br>respuesta cprrecta!";
                    case 'robot':
                        return this.correct
                        ? "Beep boop!!!<br>¡LO HICISTE BIEN!"
                        : "Beep beep<br>¡Esa no es la<br>respuesta cprrecta!";
                    case 'dog':
                        return this.correct
                        ? "Wroof Wroof!!!<br>¡LO HICISTE BIEN!"
                        : "Bow Wow<br>¡Esa no es la<br>respuesta cprrecta!";
                    case 'grandpa':
                        return this.correct
                        ? "Ho ho!!!<br>¡LO HICISTE BIEN!"
                        : "Ho Hum<br>¡Esa no es la<br>respuesta cprrecta!";
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
            // If there are no questions left, navigates to the final results page
            nextQuestion() {
                if (this.questionId + 1 >= this.questions.length) {
                    this.$router.push({ name: 'final' });
                    this.$soundEffects.play(this.character + '-content');
                } else {
                    this.$router.push({ name: 'question', params: { question: this.questionId + 1 } });
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "@/styles/utils.scss";

    .result {
        padding: 40px;
        height: calc(100% - 80px);
        width: 100%;
        box-sizing: border-box;
        background-color: $color-green;
        color: $color-white;
        text-align: center;

        @include bp(xl) {
            position: absolute;
        }

        &--wrong {
            background-color: $color-alt-orange;

            .result__title {
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
            background-size: 130px auto;
            background-position: center top;

            &--baby { background-image: url('../assets/characters/character-baby-happy.svg'); }
            &--fish { background-image: url('../assets/characters/character-fish-happy.svg'); }
            &--robot { background-image: url('../assets/characters/character-robot-happy.svg'); }
            &--dog { background-image: url('../assets/characters/character-dog-happy.svg'); }
            &--grandpa { background-image: url('../assets/characters/character-grandpa-happy.svg'); }
        }

        &__desc {
         //   font-size: 10px;
         //   line-height: 1.3em;
            margin: 0px 0px 40px 0px;
        }

        &__score {
            color: $color-white;
            font-size: 18px;
            text-transform: uppercase;
            font-weight: bold;
            margin: 0;

            & > i {
                margin-right: 5px;
            }
        }

        &__next-question {
            @include button($color-orange);
            font-size: 12px;
            margin-top: 40px;
            width: 100%;            
        }
    }
</style>
