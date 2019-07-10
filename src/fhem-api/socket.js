import io from 'socket.io-client'
import settings from '@/settings'
import store from '@/store/store.js'

if (!settings.demo) {
    const options = {
        timeout: 5000,
        'sync disconnect on unload': true
    }

    const server = settings.socket
    const socket = io(server, options)

    socket.on('connect', function () {
        socket.emit('getAllValuesOnChange')
        socket.emit('getAllDevicesOnChange')
    })
    socket.on('reading', function (data) {
        console.log('reading')
        console.log(data)
    })

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
