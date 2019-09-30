import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router.js'
import vuetify from '@/vuetify.js'
import settings from '@/settings'
import axios from 'axios'
import store from '@/store/store.js'
import Vue2TouchEvents from 'vue2-touch-events'

import '@/fhem-api/socket.js'
import '../assets/app.scss'
import '@/components/components.js'

store.commit('setDemo', settings.demo)

Vue.use(Vue2TouchEvents)

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
