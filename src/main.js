// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'vue-material/dist/vue-material.css';

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import App from './App';
import router from './router';

Vue.use(VueResource);
Vue.use(VueMaterial);

Vue.config.productionTip = false;
Vue.config.apiServer = process.env.API_SERVER;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App,
  },
});
