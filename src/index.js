import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'

import '../assets/app.styl'
/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
