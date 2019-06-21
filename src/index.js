import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/fontawesome-icons.js'
import '../assets/app.styl'
import bar from '@/components/Bar.vue'

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('bar', bar)

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
