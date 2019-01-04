import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Identifier from './views/Identifier.vue';
import LogIn from './views/LogIn.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/identifier',
      name: 'identifier',
      component: Identifier
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    }
  ]
});
