import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home.vue'
import Functions from '@/components/pages/Functions.vue'
import Rooms from '@/components/pages/Rooms.vue'
import Joshi from '@/components/pages/Joshi.vue'
import BVG from '@/components/pages/BVG.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { name: 'home', path: '/', component: Home },
        { name: 'functions', path: '/functions', component: Functions },
        { name: 'rooms', path: '/rooms', component: Rooms },
        { name: 'joshi', path: '/joshi', component: Joshi },
        { name: 'bvg', path: '/bvg', component: BVG }
    ]
})
