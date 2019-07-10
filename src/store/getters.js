import fhemGetters from '@/fhem-api/getters'

const getters = {
    bar: state => state.bar,
    demo: state => state.demo,
    title: state => state.title,
    ...fhemGetters
}
export default getters
