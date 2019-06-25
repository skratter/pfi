import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import '@/external/inobounce.js'
import '@fortawesome/fontawesome-pro/js/all'
import '../assets/app.scss'
import bar from '@/components/Bar.vue'
import content from '@/components/Content.vue'
import controlplug from '@/components/ControlPlug'
import store from '@/fhem-api/store.js'
import socket from '@/fhem-api/socket.js'

Vue.component('bar', bar)
Vue.component('content-view', content)
Vue.component('control-plug', controlplug)

// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Start Service-Worker
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
    })
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
