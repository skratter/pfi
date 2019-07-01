import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home.vue'
import Funktionen from '@/components/pages/Funktionen.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { name: 'home', path: '/', component: Home },
        { name: 'funktionen', path: '/funktionen', component: Funktionen }
    ]
})
