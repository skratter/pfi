const mutations = {
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
        this.io.emit('commandNoResp', command)
    }
}

export default mutations
