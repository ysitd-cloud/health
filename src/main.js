import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';

/* globals window */
window.ga('create', 'UA-103662489-1', 'auto');
window.ga('set', 'page', `${window.location.hostname}${window.location.pathname}`);
window.ga('send', 'pageview');

Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
