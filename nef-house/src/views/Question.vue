<template>
    <div class="question">
        
        <div class="question__title__parent">
            <div :class="'question__title--' + character"></div>
            <h1 class="question__title">{{questions[questionId].category}}</h1>
        </div>
        <!--<p class="question__desc"></p>-->
        <hr class="question__hr">
        <h3 class="question__progress">Pregunta {{questionId + 1}} De {{questionsCount}}</h3>
        <h2 class="question__question" v-html="question"></h2>
        <ul class="question__answers" :class="{'question__answers__active' : isChoice}">
            <li v-for="answer in possibleAnswers" class="question__answer" :class="{'question__answer--selected': selectedAnswer == answer.i}" @click="selectAnswer(answer)">
                <i class="fa"	 :class="{'circle-o': selectedAnswer != answer.i, 'check-circle': selectedAnswer == answer.i}" aria-hidden="true"></i>
                <div class="answer" >{{answer.a}}</div>
                <br>
            </li>
        </ul>
        <input type="number" class="question__number" :class="{'question__number__active' : isNumber}" v-model.number="numberAnswer" max="9999"/>
        <input @change="submitDisabled" class="question__limit" type="text" :class="{'question__limit__active' : isLimit}" v-bind:maxlength="questions[questionId].maxLength" :style="styleLimitAnswer" v-model.text="limitAnswer"/>
        <div class="question__limit" :class="{'question__limit__active__underline' : isLimit}" :style="styleLimitUnderline"> </div>
        <button :disabled="submitDisabled()" class="question__submit" href="#" @click.prevent="submitAnswer()">¡ENVIAR LA RESPUESTA!</button>
        <p class="question__score"><i class="fa fa-leaf" aria-hidden="true"></i> PUNTUACIÓN: {{score}}</p>
        <p class="question__reset"><a href="#" @click.prevent="startOver()"><i class="fas fa-redo"></i>Comenzar de nuevo</a></p>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
        // Local Variables
        data() {
            return {
                isChoice: false,
                isLimit: false,
                isNumber: false,
                tick: 0,
                selectedAnswer: null,
                numberAnswer: 0,
                limitAnswer: "",
                submitEnabled: false,
            };
        },
        mounted() {
            document.getElementsByClassName("quiz")[0].classList.remove("ad");
        },

        watch: {
            // Whenever the id of the question changes, ticks and changes the type of question displayed
            tick() {
                if (this.questions[this.questionId].type === "choice") {
                    this.isChoice = true;
                    this.isLimit = false;
                    this.isNumber = false;
                } else if (this.questions[this.questionId].type === "limit") {
                    this.isChoice = false;
                    this.isLimit = true;
                    this.isNumber = false;
                } else if (this.questions[this.questionId].type === "number") {
                    this.isChoice = false;
                    this.isLimit = false;
                    this.isNumber = true;
                } else {
                    console.log("ERROR: Question did not have a type");
                    this.isChoice = false;
                    this.isLimit = false;
                    this.isNumber = false;
                }
            },
        },

        // Computed variables are set whenever one of the variables involved changes value
        computed: {
            // questionsCount: Number of questions in total
            questionsCount() {
                return this.questions.length;
            },

            // questionId: The id of the question (ex: 3rd question out of 10)
            questionId() {
                this.tick += 1;
                let id = this.$route.params.question;
                return typeof this.questions[id] != "undefined"
                    ? id
                    : null;
            },

            // question: The question text
            // If the question does not exist, returns an empty string
            question() {
                return this.questionId === null
                    ? ""
                    : this.questions[this.questionId].question;
            },

            // possibleAnswers: All possible answers of a multiple choice question
            // Returns the answers in a random order
            possibleAnswers() {
                if (this.questionId != null) {
                    if (this.questions[this.questionId].type === "choice") {
                        return this.questions[this.questionId].answers
                        .map((a, i) => ({i: i, a: a}))
                        .map((a) => [Math.random(), a])
                        .map((a) => a[1]);
                    }
                }

                return [];
            },

            // If the character becomes null, returns to the starting page
            redirect() {
                if(this.character === null) return '/quiz';
                return null;
            },
            
            // Styles limit questions
            styleLimitAnswer() {
                return {
                    paddingLeft: ((225 - ((this.questions[this.questionId].maxLength - 1) * 11) - ((this.questions[this.questionId].maxLength) * 18)) / (this.questions[this.questionId].maxLength + 1)) + "px",
                    letterSpacing: (((235 - (this.questions[this.questionId].maxLength) * 11) / (this.questions[this.questionId].maxLength))) + "px",
                    border: 0,
                    margin: 0,
                    fontFamily: '"Lucida Console", Lucida, monospace',
                    fontStyle: "bold",
                    fontSize: 18 + "px",
                    background: "transparent",
                    width: 235 + "px",
                }
            },

            // Styles the underline of limit questions
            styleLimitUnderline() {
                return {
                    background: "#0099a9",
                    backgroundImage: "linear-gradient(to left, white 70%, #0099a9 0%)",
                    backgroundPosition: "bottom",
                    backgroundSize: (235 / (this.questions[this.questionId].maxLength)) + "px " + 1 + "px",
                    backgroundRepeat: "repeat-x",
                    backgroundPositionX: (.7 * (235 / (this.questions[this.questionId].maxLength))) + "px",
                    width: 230 + "px",
                    height: 1 + "px",
                }
            },            

            // correct: A boolean indicating whether was answered correctly or not
            correct() {
                return this.answers[this.questionId];
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
            // Selects an answer to the question
            // answer: id of the answer to be selected
            selectAnswer(answer) {
                this.answerFilled = true;              
                this.selectedAnswer = answer.i;
                this.answerDesc = answer.a
            },
            
            submitDisabled() {
                if(this.isNumber) return false;                
                if (this.isChoice) {
                  return (this.answerFilled !== true);
                }

                // otherwise we're dealing with an entered field
                return !this.limitAnswer.length;
                
            },
            

            // Submits the selected answer, thereby calling the result for the question
            submitAnswer() {
                if (this.selectedAnswer !== null) {
                    this.$store.commit('setAnswer', {
                        question: this.questionId,
                        answer: this.answerDesc
                    });
                } else if (this.questions[this.questionId].type == "number") {
                    this.$store.commit('setAnswer', {
                        question: this.questionId,
                        answer: this.numberAnswer
                    });
                } else if (this.questions[this.questionId].type == "limit") {
                    this.$store.commit('setAnswer', {
                        question: this.questionId,
                        answer: this.limitAnswer.toLowerCase()
                    });
                }

                this.$soundEffects.play(this.character + '-' + (this.correct ? 'happy' : 'sad'));

                this.$router.push({ name: 'result', params: { question: this.questionId } });
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

    .question {
        padding: 40px;
        height: calc(100% - 80px);
        background-color: $color-cyan;
        color: $color-white;

        @include bp(xl) {
            position: absolute;
            width: 100%;
            box-sizing: border-box;
        }

        &__title {
            position: absolute;
            bottom: 0px;
            font-family: $font-headline-sans-serif;
            text-transform: uppercase;
            font-size: 20px;
            line-height: 1.1em;
            margin: 0px 0px 15px 0px;
            padding-left: 70px;
            background-repeat: no-repeat;
            background-size: 55px 53px;
            background-position: left center;

            &__parent {
                position: relative;
                height: 55px;
                margin-bottom: 5px;
            }

            &--baby {
                height: 55px;
                width: 53px;
                background-image: url('../assets/characters/character-baby-content.svg');
                background-repeat: no-repeat;
            }
            &--fish {
                height: 55px;
                width: 53px;
                background-image: url('../assets/characters/character-fish-content.svg');
                background-repeat: no-repeat;
            }
            &--robot {
                height: 55px;
                width: 53px;
                background-image: url('../assets/characters/character-robot-content.svg');
                background-repeat: no-repeat;
            }
            &--dog {
                height: 55px;
                width: 53px;
                background-image: url('../assets/characters/character-dog-content.svg');
                background-repeat: no-repeat;
            }
            &--grandpa {
                height: 55px;
                width: 53px;
                background-image: url('../assets/characters/character-grandpa-content.svg');
                background-repeat: no-repeat;
            }
        }

        &__desc {
            font-size: 10px;
            line-height: 1.3em;
            margin: 0px 0px 20px 0px;
        }

        &__hr {
            border: none;
            border-bottom: 1px solid $color-white;
            margin: 0px 0px 20px 0px;
        }

        &__progress {
            font-size: 9px;
            text-transform: uppercase;
            margin: 0px 0px 0px 0px;
            font-weight: normal;
        }

        &__question {
            font-size: 14px;
            line-height: 1.1em;
            margin: 0px 0px 15px 0px;
            font-weight: normal;
        }

        &__answers {
            padding: 0;
            margin: 0;
            list-style: none;
            display: none;
			.fa-circle-o{
				font-family: "Font Awesome 5px Free";
				font-size:15px;
				width:15px;
				height:15px;
			}
			.circle-o{
				width:13px;
				height:13px;
				background-image: url('../assets/NEF_checkbox.svg');
				background-size:cover;
			}
			.check-circle{
				width:13px;
				height:13px;
				background-image: url('../assets/NEF_checkbox_active.svg');
				background-size:cover;
			}
            &__active {
                display: inline;
            }
        }

        &__number {
            margin: 0;
            list-style: none;
            display: none;
            border: 0;
            text-align: center;
            color: #fff;
            font-size: 18px;
            background: #0099a9;
            background-image: linear-gradient(to left, white 100%, #0099a9 0%);
            background-image: -webkit-linear-gradient(to left, white 100%, #0099a9 0%);
            background-image: linear-gradient(to left, white 100%, #0099a9 0%);
            background-position: bottom;
            background-size: 100px 1px;
            background-repeat: repeat-x;
            width: 100px;
            background-position-x: -20px;

            &__active {
                display: inline;
            }
        }

        &__answer {
            clear: both;
            font-size: 13px;
            cursor: pointer;
//            margin: 0px 0px 15px 0px;
//            height: 22px;
            line-height: 15px;

            & > i {
                margin-right: 5px;
            }

            &--selected {
                & > i {
                    color: $color-orange;
                }
            }
        }

        &__limit {
            padding: 0;
            margin: 0;
            color: #fff;
            list-style: none;
            display: none;

            &__active {
                display: inline;

                &__underline {
                    display: block;
                }
            }
        }

        &__submit {
            @include button($color-orange);
            
            font-size: 12px;
            margin-top: 10px;
        }

        &__score {
            color: $color-green;
            font-size: 12px;
            text-transform: uppercase;
            margin-top: 20px;
			font-weight:bold;
            & > i {
                margin-right: 5px;
            }
        }

        &__reset {
            position: absolute;
            top: 5px;
            right: 5px;
            font-size: 8px;
            i {
      				display:inline-block;
      				text-align:center;
      				padding-right: .5em;
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
        input[type=text]::-ms-clear{
			display:none;
		}
    }

    .answer {
//        float: left;
//        max-width: 200px;
    }

    .fa {
        float: left;
    }
</style>

