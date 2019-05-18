import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
import Home from './views/Home.vue';
import navsider from './components/NavSider';
import list from './components/List'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/navsider',
      name: 'navsider',
      component: navsider,
    },
    {
      path: '/list',
      name: 'list',
      component: list,
    },
    {
      path: '/404',
      name: '404',
      component: () => import('./views/404'),
    },
    {
      path: '/none-*',
      name: '404',
      component: () => import('./views/404'),
    },

  ],
});
