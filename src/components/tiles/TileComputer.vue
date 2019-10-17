<template>
    <div
        class="grid-item tile"
        :style="{ 'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')' }"
        @click="switchDevice()"
    >
        <div v-if="switched" class="status white--text">
            next: {{ nextState }}
        </div>
        <div v-else class="status white--text">
            {{ (running ? 'on' : 'off') }}
        </div>
        <div class="switch-area">
            <v-icon v-if="switched" class="white--text icon">
                {{ iconWait }}
            </v-icon>
            <v-icon v-else class="white--text icon">
                {{ icon }}
            </v-icon>
        </div>
        <div class="text-area">
            <div class="white--text">
                {{ room }}
            </div>
            <div class="headline-area white--text">
                {{ name }}
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
export default {
    props: {
        deviceName: { type: String, required: true },
        room: { type: String, required: false, default: '' }
    },
    data: () => {
        return {
            demo: false,
            switched: false,
            toggle: 'off',
            running: false,

            icon: 'mdi-desktop-tower',
            iconWait: 'mdi-timer-sand',
            colorTop: '',
            colorBottom: '',
            colorInactiveTop: 'rgba(204,204,204,0.6)',
            colorInactiveBottom: 'rgba(170,170,170,0.6)',
            colorOnTop: 'rgba(0,255,0,0.6)',
            colorOnBottom: 'rgba(0,200,0,0.6)',
            colorOffTop: 'rgba(255,0,0,0.6)',
            colorOffBottom: 'rgba(200,0,0,0.6)',
            colorWaitTop: 'rgba(255,196,0,0.6)',
            colorWaitBottom: 'rgba(200,120,0,0.6)',
            nextState: '',
            name: 'No Alias'
        }
    },
    computed: {
        device: function () {
            return this.$store.getters.device(this.deviceName)
        }
    },
    watch: {
        device: function () {
            this.setDevice()
        }
    },
    created () {
        this.colorTop = this.colorInactiveTop
        this.colorBottom = this.colorInactiveBottom
    },
    mounted () {
        this.demo = this.$store.getters.demo

        if (this.device !== '' || this.demo) {
            this.setDevice()
        }
    },
    methods: {
        setDevice () {
            if (this.demo) {
                this.name = 'Demo WoL'
                this.colorTop = this.colorOffTop
                this.colorBottom = this.colorOffBottom
                this.running = false
            } else {
                if (this.device.Readings.isRunning.Value === 'false') {
                    this.colorTop = this.colorOffTop
                    this.colorBottom = this.colorOffBottom
                    this.running = false
                }
                if (this.device.Readings.isRunning.Value === 'true') {
                    this.colorTop = this.colorOnTop
                    this.colorBottom = this.colorOnBottom
                    this.running = true
                }

                const t1 = dayjs(this.device.Readings.state.Time)
                const t2 = dayjs(this.device.Readings.active.Time)

                if (this.device.Readings.state.Value !== this.device.Readings.active.Value && (t1.diff(t2) / 1000) < 310) {
                    this.switched = true
                    this.nextState = this.device.Readings.active.Value
                    this.colorTop = this.colorWaitTop
                    this.colorBottom = this.colorWaitBottom
                } else {
                    this.switched = false
                }
                this.name = this.device.Name
            }
        },
        switchDevice () {
            if (!this.demo) {
                if (!this.running) {
                    this.toggle = 'on'
                } else {
                    this.toggle = 'off'
                }

                this.$store.dispatch('setDevice', {
                    device: this.deviceName,
                    state: this.toggle
                })
            } else {
                this.running = !this.running
                if (this.running) {
                    this.colorTop = this.colorOnTop
                    this.colorBottom = this.colorOnBottom
                } else {
                    this.colorTop = this.colorOffTop
                    this.colorBottom = this.colorOffBottom
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.tile {
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
}
.status {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 2px;
    margin-right: 5px;
}
.switch-area {
    position: relative;
    // margin: 10px auto;
    line-height: 120px;
    height: 120px;
    width: 120px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    z-index: 10;

    .icon {
        position: absolute;
        top: 0;
        left: 0;
        margin: 10px;
        font-size: 3rem;
    }
}

.text-area {
    position: absolute;
    bottom: 2px;
    left: 10px;
    font-size: .8rem;

    .headline-area {
        font-size: 1.2rem;
    }
}
</style>
