import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import vuetify from '@/vuetify.js'
import settings from '@/settings'
import axios from 'axios'

import '@/external/inobounce.js'
import '../assets/app.scss'
import '@/components/components.js'

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

// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Start Service-Worker
    // window.addEventListener('load', () => {
    // navigator.serviceWorker.register('/service-worker.js')
    // })
}

store.commit('setDemo', settings.demo)

Vue.prototype.$axios = axios
/* eslint-disable-next-line no-new */
new Vue({
    el: '#app',
    store,
    router,
    vuetify,
    mounted: () => { },
    render: h => h(App)
})
