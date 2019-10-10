import Vue from 'vue'
import fhemMutations from '@/fhem-api/mutations.js'

const mutations = {
    setDemo (state, mode) {
        Vue.set(state, 'demo', mode)
    },
    setWeatherApiKey (state, mode) {
        Vue.set(state, 'weatherApiKey', mode)
    },
    setWeatherLocId (state, mode) {
        Vue.set(state, 'weatherLocId', mode)
    },
    setTitle (state, title) {
        Vue.set(state, 'title', title)
    },
    setBar (state, bar) {
        Vue.set(state, 'bar', bar)
    },
    ...fhemMutations
}

export default mutations
