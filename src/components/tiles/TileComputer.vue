<template>
    <div
        class="tile"
        :style="{ 'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')' }"
        @click="switchDevice()"
    >
        <div v-if="switched" class="pct white--text">
            next: {{ toggle }}
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
            <div class="headline white--text">
                {{ name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        deviceName: { type: String, required: true }
    },
    data: () => {
        return {
            demo: false,
            status: false,
            state: 'off',
            switched: false,
            toggle: 'off',

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
            name: 'No Alias defined',
            room: 'No Room defined'
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
                this.name = 'Demo'
                this.colorTop = this.colorOffTop
                this.colorBottom = this.colorOffBottom
                this.status = false
            } else {
                if (this.device.Readings.state.Value === 'off') {
                    this.colorTop = this.colorOffTop
                    this.colorBottom = this.colorOffBottom
                    this.state = 'off'
                }
                if (this.device.Readings.state.Value === 'on') {
                    this.colorTop = this.colorOnTop
                    this.colorBottom = this.colorOnBottom
                    this.state = 'on'
                }
                this.name = this.device.Name
                this.room = this.device.Attributes.pfiRoom
            }
        },
        switchDevice () {
            if (!this.demo) {
                if (this.state === 'off') {
                    this.toggle = 'on'
                } else {
                    this.toggle = 'off'
                }
                this.switched = true
                setTimeout(() => { this.switched = false }, 300000)
                this.$store.dispatch('setDevice', {
                    device: this.deviceName,
                    state: this.toggle
                })
            } else {
                this.status = !this.status
                if (this.status) {
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
.pct {
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
}
.switch-area {
    position: relative;
    // margin: 10px auto;
    line-height: 165px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    .icon {
        // margin-top: 30px;
        font-size: 5rem;
    }
}

.text-area {
    position: absolute;
    bottom: 5px;
    left: 10px;
    font-size: 10pt;
}
</style>
