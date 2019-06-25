const actions = {
    // Get All Values from FHEM
    getAllValues ({ commit }) {
        commit('getAllValues')
    },
    // Toggle Device
    setDevice ({ commit }, action) {
        commit('setDevice', action)
    },
    // Get JSON Data for Device / * for Wildcard
    getJson ({ commit }, device) {
        commit('getJson', device)
    }
}

export default actions
