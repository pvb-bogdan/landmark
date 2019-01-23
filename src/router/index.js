import Vue from 'vue'
import Router from 'vue-router'
import BookingSearchForm from '@/private/bookings/BookingSearchForm'
import Login from '@/components/Login'
import Layout from '@/private/Layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: {
        render (c) { return c('router-view') }
      },
      redirect: { name: 'login' },
      children: [
        {
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'prv',
          name: 'layout',
          component: Layout,
          redirect: { name: 'bookings' },
          children: [
            // TO DO: IMPORT FROM ELSEWHERE
            {
              path: 'bookings',
              name: 'bookings',
              component: BookingSearchForm
            }
          ]
        }
      ]
    }
  ]
})
