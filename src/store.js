import Vue from 'vue'
import Vuex from 'vuex'
import io from 'socket.io-client'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    io: null,
    allValues: null
  },
  mutations: {
    setSocket (state, io) {
      state.io = io
    },
    getAllValues (state) {
      state.io.emit('getAllValues', function (data) {
        state.allValues = data
        console.log(data)
      })
    },
    toggleDevice (state, action) {
      let command = 'set ' + action.device + ' ' + action.state
      socket.emit('commandNoResp', command)
    }
  },
  actions: {
    getAllValues ({ commit }) {
      commit('getAllValues')
    },
    toggleDevice ({ commit }, action) {
      commit('toggleDevice', action)
    }
  },
  getters: {
    allValues: state => state.allValues,
    io: state => state.io
  }
})

const options = {
  timeout: 5000,
  'sync disconnect on unload': true
}
const server = 'http://192.168.178.10:8086'
const socket = io(server, options)
store.commit('setSocket', socket)
store.dispatch('getAllValues')

socket.on('connect', function () {
  socket.emit('getAllValuesOnChange')
  socket.emit('getAllDevicesOnChange')
})
socket.on('reading', function (data) {
  console.log('reading')
  console.log(data)
})
socket.on('value', function (data) {
  console.log(data)
})

export default store
