import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import vuetify from '@/vuetify.js'
import settings from '@/settings'
import axios from 'axios'
import store from '@/store/store.js'

import '@/fhem-api/socket.js'
import '../assets/app.scss'
import '@/components/components.js'

// Check that service workers are supported
if (settings.serviceWorker) {
    if ('serviceWorker' in navigator) {
        // Start Service-Worker
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/service-worker.js')
        })
    }
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
