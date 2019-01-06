import Vue from 'vue';
import Router from 'vue-router';
import About from './components/views/About.vue';
import StartPage from './components/views/StartPage.vue';
<<<<<<< HEAD
// import Services from './components/views/Services.vue';
=======
>>>>>>> 067787dcc02d7282a4ae6a7cb12c09213d412d0f
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