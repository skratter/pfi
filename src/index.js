import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import vuetify from '@/vuetify.js'

import '@/external/inobounce.js'
import '../assets/app.scss'
import settings from '@/settings'

import bar from '@/components/Bar'
import TilePlug from '@/components/tiles/TilePlug'
import TileLink from '@/components/tiles/TileLink'
import TileLight from '@/components/tiles/TileLight'

// import socket from '@/fhem-api/socket.js'
import store from '@/fhem-api/store.js'

if (!settings.demo) {
    import('@/fhem-api/socket.js')
        .then((s) => {
            const socket = s.default
            // Initialize Socket
            store.commit('setSocket', socket)
            store.dispatch('getAllValues')
            socket.on('value', function (data) {
                store.commit('setStatus', data)
            })
        })
}

Vue.component('bar', bar)
Vue.component('tile-plug', TilePlug)
Vue.component('tile-link', TileLink)
Vue.component('tile-light', TileLight)

// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Start Service-Worker
    // window.addEventListener('load', () => {
    // navigator.serviceWorker.register('/service-worker.js')
    // })
}

// Initialize Socket
// store.commit('setSocket', socket)
// store.dispatch('getAllValues')
// socket.on('value', function (data) {
//     store.commit('setStatus', data)
// })
// console.log(socket)

store.commit('setDemo', settings.demo)

/* eslint-disable-next-line no-new */
new Vue({
    el: '#app',
    store,
    router,
    vuetify,
    mounted: () => { },
    render: h => h(App)
})
