import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import '../assets/app.scss'
import bar from '@/components/Bar.vue'

Vue.component('bar', bar)

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
  })
}

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
