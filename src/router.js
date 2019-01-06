import Vue from 'vue';
import Router from 'vue-router';
import About from './components/views/About.vue';
import StartPage from './components/views/StartPage.vue';
import ServicePage from './components/views/ServicePage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'startsida',
      component: StartPage
    },
    {
      path: '/om-oss',
      name: 'About',
      component: About
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