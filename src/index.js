import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import '../assets/app.scss'
import bar from '@/components/Bar.vue'
import content from '@/components/Content.vue'
// import VueSocketIO from 'vue-socket.io-extended'
// import io from 'socket.io-client'
import store from '@/store.js'

// Vue.use(VueSocketIO, socket, { store })
Vue.component('bar', bar)
Vue.component('content-view', content)

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // window.addEventListener('load', () => {
  // navigator.serviceWorker.register('/service-worker.js')
  // })
}

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  store,
  router,
  mounted: () => { },
  render: h => h(App)
})
