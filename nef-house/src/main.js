import Vue from 'vue'
//import VueCarousel from 'vue-carousel'
import SoundEffects from './plugins/SoundEffects'
import confetti from 'confetti-js';
import App from './App.vue'
import router from './router'
import store from './store'

var VueScrollTo = require('vue-scrollto');

Vue.config.productionTip = false

Vue.use(SoundEffects);
Vue.use(VueScrollTo);
//Vue.use(VueCarousel);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
