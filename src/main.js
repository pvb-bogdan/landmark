// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'
import VueNotification from 'vue-notification'
import GlobalModal from './plugins/global-modal'
import Vue2Filters from 'vue2-filters'
//  import * as VueGoogleMaps from 'vue2-google-maps'
//  import DatePicker from 'vue2-datepicker'
import BlockUI from 'vue-blockui'

import App from './App'
import router from './router'

import { loadProgressBar } from 'axios-progress-bar'

import '@/assets/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'font-awesome/css/font-awesome.css'

loadProgressBar()

Vue.use(BootstrapVue)
Vue.use(Vue2Filters)
Vue.use(GlobalModal)
Vue.use(VeeValidate, {
  classes: true,
  classNames: {
    invalid: 'invalid'
  }
})
Vue.use(VueNotification)
Vue.use(BlockUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
