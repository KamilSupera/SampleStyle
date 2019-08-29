import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/pages/home'
import checkboxes from '@/components/pages/marks/checkboxes'
import 'bootstrap';

Vue.use(Router)
export default new Router({

  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/checkboxes',
      name: 'checkboxes',
      component: checkboxes
    }
  ]
})