const actions = {
  // Get All Values from FHEM
  getAllValues ({ commit }) {
    commit('getAllValues')
  },
  // Toggle Device
  toggleDevice ({ commit }, action) {
    commit('toggleDevice', action)
  }
}

export default actions
