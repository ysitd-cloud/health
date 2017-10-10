import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';

/* globals window */
window.gtag('config', 'UA-103662489-2');

Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
});
