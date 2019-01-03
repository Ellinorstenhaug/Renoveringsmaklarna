import Vue from 'vue'
import Vuetify from 'vuetify'
// import VueRouter from 'vue-router';
import App from './App.vue'
import VeeValidate from 'vee-validate';
import router from './router';
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.use(Vuetify); 
Vue.use(VeeValidate);
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App),
}).$mount('#app');