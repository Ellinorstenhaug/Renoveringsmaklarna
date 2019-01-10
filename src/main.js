import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import router from './router';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify); 
Vue.use(VeeValidate);
Vue.config.productionTip = false;


// Vue.use(Vuetify, {
//   theme: {
//     primary: '#60315d',
//     secondary: '#b0bec5',
//     accent: '#8c9eff',
//     error: '#b71c1c'
//   }
// })






new Vue({
  router,
  render: h => h(App),
}).$mount('#app');