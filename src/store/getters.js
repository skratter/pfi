import fhemGetters from '@/fhem-api/getters'

const getters = {
    bar: state => state.bar,
    demo: state => state.demo,
    weatherApiKey: state => state.weatherApiKey,
    weatherLocId: state => state.weatherLocId,
    title: state => state.title,
    ...fhemGetters
}
export default getters
