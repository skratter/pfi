const actions = {
    // Get All Values from FHEM
    getAllValues ({ commit }) {
        commit('getAllValues')
    },
    // Toggle Device
    setDevice ({ commit }, action) {
        commit('setDevice', action)
    }
}

export default actions
