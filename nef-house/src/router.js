import Vue from 'vue'
import Router from 'vue-router'
import LoadScreen from './views/LoadScreen.vue'
import Quiz from './views/Quiz.vue'
import CharacterSelect from './views/CharacterSelect.vue'
import Question from './views/Question.vue'
import Result from './views/Result.vue'
import Final from './views/Final.vue'
import Begin from './views/Begin.vue'

Vue.use(Router)

const router = new Router({
    mode: process.env.NODE_ENV == "development" ? 'hash' : 'abstract',
    routes: [
        {
            path: '/',
            name: 'loadScreen',
            component: LoadScreen
        },
        {
            path: '/quiz',
            component: Quiz,
            children: [{
                path: '',
                name: 'characterSelect',
                component: CharacterSelect
            },
            {
                path: 'begin',
                name: 'begin',
                component: Begin
            },
            {
                path: 'question/:question',
                name: 'question',
                component: Question
            },
            {
                path: 'result/:question',
                name: 'result',
                component: Result
            },
            {
                path: 'final',
                name: 'final',
                component: Final
            }]
        }
    ]
});

router.push('/');

export default router;
