const mutations = {
    setSocket (state, io) {
        state.io = io
    },
    getAllValues (state) {
        state.io.emit('getAllValues', function (data) {
            console.log(data)
            state.allValues = data
        })
    },
    setDevice (state, action) {
        let command = 'set ' + action.device + ' ' + action.state
        state.io.emit('commandNoResp', command)
    },
    setStatus (state, status) {
        let key = Object.keys(status)[0]
        state.allValues[key] = status[key]
    },
    getDeviceStatus (state, device) {
        if (typeof state.allValues !== 'undefined') {
            return state.allValues[device]
        }
        return undefined
    }
}

export default mutations
