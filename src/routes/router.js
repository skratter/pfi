import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home.vue'
import Functions from '@/components/pages/Functions.vue'
import Rooms from '@/components/pages/Rooms.vue'
import BVG from '@/components/pages/BVG.vue'
import Weather from '@/components/pages/weather.vue'
import Test from '@/components/pages/Test.vue'

import rooms from '@/routes/rooms.js'

Vue.use(Router)

export default new Router({
    routes: [
        { name: 'home', path: '/', component: Home },
        { name: 'functions', path: '/functions', component: Functions },
        { name: 'rooms', path: '/rooms', component: Rooms },
        { name: 'bvg', path: '/bvg', component: BVG },
        { name: 'weather', path: '/weather', component: Weather },
        { name: 'test', path: '/test', component: Test },
        ...rooms
    ]
})
