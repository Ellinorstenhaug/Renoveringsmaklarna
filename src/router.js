import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import Router from 'vue-router';
import About from './components/views/About.vue';
import StartPage from './components/views/StartPage.vue';
import ServicePage from './components/views/ServicePage.vue';
import ContactPage from './components/views/ContactPage.vue';
import Success from './components/views/success.vue';
import Services from './components/views/AllServices.vue';
Vue.use(Router);

let isProd = false;
if (window.location.host == 'renoveringsmaklarna.se') {
  isProd = true;
}

const router = new Router({

  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  mode: 'history',
  routes: [{
      path: '/',
      name: 'startsida',
      component: StartPage
    },
    {
      path: '/om-oss',
      name: 'om oss',
      component: About
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: ContactPage
    },
    {
      path: '/klart',
      name: 'klart',
      component: Success
    },
    {
      path: '/tjänster/:id',
      component: ServicePage,

      children: [{
        path: '',
        component: ServicePage
      }]
    },
    {
      path: '/våra-tjänster',
      name: "våra tjänster",
      component: Services,
    }
  ]
})


Vue.use(VueAnalytics, {
  // id: 'AW-765636562', GAMLA
  id: 'UA-133944413-1',
  router,
  autoTracking: {
    exception: true
  },
  debug: {
    enabled: !isProd,
    sendHiTask: isProd
  }
})

export default router;