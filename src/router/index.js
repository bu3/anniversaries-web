import Vue from 'vue';
import Router from 'vue-router';
import Anniversaries from '@/components/Anniversaries';
import AddEmployee from '@/employee/AddEmployee';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Anniversaries',
      component: Anniversaries,
    },
    {
      path: '/addEmployee',
      name: 'AddEmployee',
      component: AddEmployee,
    },
  ],
});
