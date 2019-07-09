<template>
    <div>
        <div>
            <h1 style="color:white;">
                BVG
            </h1>

            <v-container v-if="bvg.length > 0" fluid grid-list-xl>
                <v-layout v-cloak row wrap justify-center>
                    <div v-for="(item, index) in bvg" :key="index">
                        <div class="bvg-card">
                            <div class="bvg-header">
                                <v-icon>fas fa-bus-alt fa-fw</v-icon>
                            </div>
                            <div class="size-wrap" style="width: 100%; margin: 5px; display: none;"></div>
                            <div class="bvg-block">
                                <h4 class="bvg-title">
                                    <span class="amp">
                                        {{ item.line }}
                                    </span> in Richtung
                                    <span class="amp">
                                        {{ item.direction }}
                                    </span>
                                </h4>
                                <p
                                    class="bvg-text"
                                    style="margin-bottom: 0.5rem;"
                                >
                                    {{ item.station }}
                                </p>
                                <div v-for="(time, i) in item.times" :key="i">
                                    <span style="font-size: 1.125rem; color: #dddd19; font-weight: bold;">
                                        in 9'
                                    </span>
                                    <span style="margin-right: 10px;">
                                        {{ time.when }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
export default {
    data: () => {
        return {
            bvg: [
                {
                    direction: 'S Marzahn',
                    first: false,
                    line: '195',
                    mode: 'bus',
                    station: 'Eisenacher Str./Gärten der Welt',
                    times: [
                        {
                            delay: null,
                            diff: 14,
                            when: '16:42'
                        }
                    ]
                }
            ]
        }
    },
    computed: {

    },
    mounted () {

    }
    // beforeCreate: function () {
    //     let self = this
    //     axios.get('https://1.bvg.transport.rest/stations/900000170537/departures?duration=60')
    //         .then(response => {
    //             let data = response.data
    //             for (var key in data) {
    //                 if (data.hasOwnProperty(key)) {
    //                     if (!(data[key].direction in self.bvg)) {
    //                         self.bvg[data[key].direction] = {
    //                             first: key === 0,
    //                             direction: data[key].direction,
    //                             line: data[key].line.name,
    //                             mode: 'bus',
    //                             station: data[key].stop.name,
    //                             times: []
    //                         }
    //                     }

    //                     if (self.bvg[data[key].direction].times.length < 3) {
    //                         let when = new Date(data[key].when)
    //                         when = when.setMinutes(when.getMinutes() + parseInt(Math.floor(data[key].delay / 60)))
    //                         let diff = when - new Date()
    //                         diff = Math.round(((diff % 86400000) % 3600000) / 60000) // minutes
    //                         if (diff >= 0) {
    //                             when = new Date(when).toLocaleTimeString().slice(0, -3)

    //                             self.bvg[data[key].direction].times.push({
    //                                 when: when,
    //                                 diff: diff,
    //                                 delay: data[key].delay
    //                             })
    //                         }
    //                     }
    //                 }
    //             }
    //             self.bvg = Object.values(self.bvg).sort()
    //             console.log(self.bvg)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //         })
    // }
}
</script>

<style lang="scss" scoped>
.bvg-card {
    display: flex;
    flex-wrap: wrap !important;
    flex-direction: row !important;
    position: relative;
    margin-top: 20px;
    margin-left: 20px;
    margin-right: 20px;
    color: #e9ecef;
    min-width: 0;
    word-wrap: break-word;
    border: 1px solid black;
    background: rgba(0, 0, 0, 0.6);
}
.bvg-header {
    background: #dddd19;
    color: #000000;
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
}
.bvg-block {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    box-sizing: border-box;
}
.bvg-title {
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
}
.bvg-text {
    margin-bottom: 0.5rem;
    font-size: 16pt;
}
.amp {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #dddd19;
}

@media (max-width: 800px) {
    .size-wrap {
        display: block !important;
    }
}
</style>
