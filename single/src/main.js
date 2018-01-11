import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import Icon from './msthomaz/Icon.vue'

import router from './router'
import store from './store'

Vue.component('icon', Icon);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});