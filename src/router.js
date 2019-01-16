import Vue from 'vue';
import Router from 'vue-router';
import About from './components/views/About.vue';
import StartPage from './components/views/StartPage.vue';
import ServicePage from './components/views/ServicePage.vue';
import ContactPage from './components/views/ContactPage.vue';
import Success from './components/views/success.vue'
Vue.use(Router);

export default new Router({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  routes: [{
      path: '/',
      name: 'startsida',
      component: StartPage
    },
    {
      path: '/om-oss',
      name: 'omoss',
      component: About
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: ContactPage
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/tjänster/:id',     
      component: ServicePage,

      children: [{
        path: '',
        component: ServicePage
      }]
    }
  ]
});