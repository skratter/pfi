const getters = {
    allValues: state => state.allValues,
    io: state => state.io,
    device: state => device => (typeof state[device] === 'undefined') ? '' : state[device],
    bar: state => state.bar
}
export default getters
