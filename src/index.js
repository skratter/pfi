import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import '@/external/inobounce.js'
import '../assets/app.scss'
import bar from '@/components/Bar.vue'
import TilePlug from '@/components/tiles/TilePlug'
import TileLink from '@/components/tiles/TileLink'
import store from '@/fhem-api/store.js'
import socket from '@/fhem-api/socket.js'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '@/fa-icons'

Vue.component('fa-icon', FontAwesomeIcon)
Vue.component('bar', bar)
Vue.component('tile-plug', TilePlug)
Vue.component('tile-link', TileLink)

// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Start Service-Worker
    // window.addEventListener('load', () => {
    // navigator.serviceWorker.register('/service-worker.js')
    // })
}

// Initialize Socket
store.commit('setSocket', socket)
store.dispatch('getAllValues')
socket.on('value', function (data) {
    store.commit('setStatus', data)
})

/* eslint-disable-next-line no-new */
new Vue({
    el: '#app',
    store,
    router,
    mounted: () => { },
    render: h => h(App)
})
