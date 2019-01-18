import Vue from 'vue'
import Router from 'vue-router'
import Landmark from '@/components/Landmark'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landmark',
      component: Landmark
    }
  ]
})
