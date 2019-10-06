<template>
    <div
        class="plug-tile"
        :style="{ 'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')' }"
        @click="switchDevice()"
    >
        <div class="status white--text">
            {{ switchStatus }}
        </div>
        <div class="switch-area">
            <v-icon class="white--text icon">
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
export default {
    props: {
        deviceName: { type: String, required: true }
    },
    data: () => {
        return {
            demo: false,
            status: false,
            switchStatus: 'off',

            icon: 'mdi-power-plug-off',
            iconOn: 'mdi-power-plug',
            iconOff: 'mdi-power-plug-off',
            colorTop: '',
            colorBottom: '',
            colorInactiveTop: 'rgba(204,204,204,0.6)',
            colorInactiveBottom: 'rgba(170,170,170,0.6)',
            colorOnTop: 'rgba(0,255,0,0.6)',
            colorOnBottom: 'rgba(0,200,0,0.6)',
            colorOffTop: 'rgba(255,0,0,0.6)',
            colorOffBottom: 'rgba(200,0,0,0.6)',
            clickApp: false,
            name: 'No Alias',
            room: 'No Room'
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
        },
        status: function () {
            if (this.status) {
                this.switchStatus = 'on'
            } else {
                this.switchStatus = 'off'
            }
        }
    },
    created () {
        this.colorTop = this.colorInactiveTop
        this.colorBottom = this.colorInactiveBottom
        this.icon = this.iconOff
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
                this.name = 'Demo Plug'
                this.colorTop = this.colorOffTop
                this.colorBottom = this.colorOffBottom
                this.status = false
            } else {
                if (this.device.Readings.state.Value === 'off') {
                    this.colorTop = this.colorOffTop
                    this.colorBottom = this.colorOffBottom
                    this.icon = this.iconOff
                    this.status = false
                }
                if (this.device.Readings.state.Value === 'on') {
                    this.colorTop = this.colorOnTop
                    this.colorBottom = this.colorOnBottom
                    this.icon = this.iconOn
                    this.status = true
                }
                this.name = this.device.Attributes.alias
                this.room = this.device.Attributes.pfiRoom
            }
        },
        switchDevice () {
            this.clickApp = true
            let that = this

            setTimeout(function () {
                that.clickApp = false
            }, 100)

            if (!this.demo) {
                this.status = !this.status
                this.$store.dispatch('setDevice', {
                    device: this.deviceName,
                    state: 'toggle'
                })
            } else {
                this.status = !this.status
                if (this.status) {
                    this.colorTop = this.colorOnTop
                    this.colorBottom = this.colorOnBottom
                    this.icon = this.iconOn
                } else {
                    this.colorTop = this.colorOffTop
                    this.colorBottom = this.colorOffBottom
                    this.icon = this.iconOff
                }
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.plug-tile {
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
