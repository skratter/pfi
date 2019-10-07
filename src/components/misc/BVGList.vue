<template>
    <div>
        <div v-if="error">
            <v-alert
                class="mt-5"
                icon="mdi-alert-circle-outline"
                color="#ff0000"
                elevation="15"
                type="error"
            >
                Leider keine Verbindung zum Server der BVG.
            </v-alert>
        </div>
        <div v-for="(item, index) in bvg" v-else :key="index">
            <tile-bvg :data="item"/>
        </div>
    </div>
</template>

<script>
export default {
    props: {},
    data: () => {
        return {
            demo: false,
            axios: null,
            error: false,

            demoData: [
                {
                    direction: 'DEMO Station 1',
                    first: false,
                    line: '666',
                    mode: 'mdi-subway-variant',
                    station: 'Musterstraße 123 / Ecke Blubb',
                    times: [
                        {
                            delay: 120,
                            diff: 4,
                            when: '09:13'
                        },
                        {
                            delay: 320,
                            diff: 8,
                            when: '10:13'
                        }

                    ]

                },
                {
                    direction: 'DEMO Station 2 with long Name',
                    first: false,
                    line: '666',
                    mode: 'mdi-walk',
                    station: 'Musterstraße 123 / Ecke Blubb',
                    times: [
                        {
                            delay: 120,
                            diff: 4,
                            when: '09:16'
                        },
                        {
                            delay: 0,
                            diff: 20,
                            when: '09:32'
                        }
                    ]
                },
                {
                    direction: 'Demo Station 3',
                    first: false,
                    line: '666',
                    mode: 'mdi-bus',
                    station: 'Musterstraße 123 / Ecke Blubb',
                    times: [
                        {
                            delay: 0,
                            diff: 50,
                            when: '10:02'
                        }
                    ]
                }
            ],
            bvg: []
        }
    },
    computed: { },
    mounted () {
        if (this.demo) {
            this.bvg = this.demoData
        }
    },
    beforeCreate () {},
    created () {
        this.demo = this.$store.getters.demo
        let self = this
        if (!this.demo) {
            this.$axios.get('https://1.bvg.transport.rest/stations/900000170537/departures?duration=60')
                .then(response => {
                    let data = response.data
                    for (var key in data) {
                        if (data.hasOwnProperty(key)) {
                            if (!(data[key].direction in self.bvg)) {
                                self.bvg[data[key].direction] = {
                                    first: key === 0,
                                    direction: data[key].direction,
                                    line: data[key].line.name,
                                    mode: self.getMode(data[key].line.mode),
                                    station: data[key].stop.name,
                                    times: []
                                }
                            }

                            if (self.bvg[data[key].direction].times.length < 3) {
                                let when = new Date(data[key].when)
                                when = when.setMinutes(when.getMinutes() + parseInt(Math.floor(data[key].delay / 60)))
                                let diff = when - new Date()
                                diff = Math.round(((diff % 86400000) % 3600000) / 60000) // minutes
                                if (diff >= 0) {
                                    when = new Date(when).toLocaleTimeString().slice(0, -3)

                                    self.bvg[data[key].direction].times.push({
                                        when: when,
                                        diff: diff,
                                        delay: data[key].delay
                                    })
                                }
                            }
                        }
                    }
                    this.error = false
                    self.bvg = Object.values(self.bvg).sort()
                })
                .catch(error => {
                    console.log(error)
                    this.error = true
                })
        }
    },
    methods: {
        getMode: function (mode) {
            switch (mode) {
            case 'bus':
                return 'mdi-bus'
            case 'tram':
                return 'mdi-subway-variant'
            default:
                return 'mdi-walk'
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
