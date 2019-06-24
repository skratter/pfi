const getters = {
    allValues: state => state.allValues,
    io: state => state.io,
    device: state => device => (typeof state.allValues === 'undefined') ? '' : state.allValues[device]
}
export default getters
