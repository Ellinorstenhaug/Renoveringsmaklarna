import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import VeeValidate from 'vee-validate';
import router from './router';
import Meta from 'vue-meta'

import 'vuetify/dist/vuetify.min.css'; // Ensure you are using css-loader
import './stylus/main.styl'

Vue.use(Vuetify);
Vue.use(VeeValidate);
Vue.config.productionTip = false;
Vue.use(Meta);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');