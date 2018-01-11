import Vue from 'vue'
import VueRouter from 'vue-router'

import store from './store'

import WelcomePage from './components/pages/welcome.vue'
import aboutPage from './components/pages/about.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/',        component: WelcomePage },
  { path: '/about',   component: aboutPage },
];

export default new VueRouter({mode: 'history', routes})