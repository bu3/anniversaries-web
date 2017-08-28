import Vue from 'vue';
import Router from 'vue-router';
import Anniversaries from '@/components/Anniversaries';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Anniversaries',
      component: Anniversaries,
    },
  ],
});
