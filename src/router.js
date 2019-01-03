import Vue from 'vue';
import Router from 'vue-router';
import About from './components/about.vue';
import App from './App.vue' //todo denna ska inte vara start, skapa en start-komponent

Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/start',
      name: 'Start',
      component: App
    }
  ]
});
