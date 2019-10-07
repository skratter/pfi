import io from 'socket.io-client'
import config from '~/config/config.js'
import store from '@/store/store.js'

if (!config.demo) {
    const options = {
        timeout: 5000,
        'sync disconnect on unload': true
    }

    const server = config.socket
    const socket = io(server, options)

    socket.on('connect', function () {
        socket.emit('getAllValuesOnChange')
        socket.emit('getAllDevicesOnChange')
    })
    socket.on('reading', function (data) {
        console.log('reading')
        console.log(data)
    })

    store.commit('setSocket', socket)
    store.dispatch('getAllValues')
    socket.on('value', function (data) {
        store.commit('setStatus', data)
    })
}
