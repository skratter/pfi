<template>
    <div class="plug-tile" :style="{ 'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')' }">
        <div v-if="!showSlider && !noDim" class="pct white--text">
            {{ slider }} %
        </div>
        <div v-touch:tap="tap" v-touch:longtap="long" class="switch-area">
            <span v-if="showSlider" style="font-size: 2rem; margin-top: 10px; line-height: 176px;" class="white--text">
                {{ slider }} %
            </span>
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
        <div v-if="showSlider" class="slider-overlay">
            <v-icon class="close-slider white--text" @click="showSlider = !showSlider">
                mdi-close
            </v-icon>
            <input
                id="myRange"
                v-model="slider"
                type="range"
                orient="vertical"
                min="0"
                max="100"
                step="10"
                class="slider"
            />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        deviceName: { type: String, required: true },
        noDim: { type: Boolean, required: false }
    },
    data: () => {
        return {
            demo: false,
            showSlider: false,
            changeInterval: false,

            colorTop: '',
            colorBottom: '',
            colorInactiveTop: 'rgba(204,204,204,0.6)',
            colorInactiveBottom: 'rgba(170,170,170,0.6)',
            colorOnTop: 'rgba(255, 250, 0, 0.6)',
            colorOnBottom: 'rgba(255, 190, 0, 0.6)',
            colorOffTop: 'rgba(0,0,0,0.6)',
            colorOffBottom: 'rgba(0,0,0,0.6)',

            icon: 'mdi-lightbulb-off-outline',
            iconOn: 'mdi-lightbulb',
            iconOff: 'mdi-lightbulb-outline',

            name: 'No Alias defined',
            room: 'No Room defined',
            slider: false,
            currentSlider: false,
            onoff: false
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
        slider: function () {
            if (this.slider > 0) {
                this.onoff = true
            } else {
                this.onoff = false
            }

            clearTimeout(this.changeInterval)
            this.changeInterval = false
            this.switchDevice()
        },
        onoff: function () {
            if (!this.onoff) {
                this.slider = 0
                this.colorTop = this.colorOffTop
                this.colorBottom = this.colorOffBottom
                this.icon = this.iconOff
            } else {
                if (this.slider === 0) {
                    this.slider = 100
                }
                this.colorTop = this.colorOnTop
                this.colorBottom = this.colorOnBottom
                this.icon = this.iconOn
            }
        }
    },
    created () {
        this.colorTop = this.colorInactiveTop
        this.colorBottom = this.colorInactiveBottom
    },
    mounted () {
        this.demo = this.$store.getters.demo
        this.onoff = this.slider !== 0

        if (this.device !== '' || this.demo) {
            this.setDevice()
        }
    },
    methods: {
        tap () {
            this.onoff = !this.onoff
        },
        long () {
            this.showSlider = true
        },
        setDevice () {
            if (this.demo) {
                this.name = 'Demo Light'
                this.slider = 50
                this.currentSlider = 50
            } else {
                this.name = this.device.Attributes.alias
                this.room = this.device.Attributes.pfiRoom
                this.slider = this.device.Readings.pct.Value
                this.currentSlider = this.device.Readings.pct.Value

                if (this.device.Readings.state.Value === 'off') {
                    this.colorTop = this.colorOffTop
                    this.colorBottom = this.colorOffBottom
                    this.icon = this.iconOff
                } else {
                    this.colorTop = this.colorOnTop
                    this.colorBottom = this.colorOnBottom
                    this.icon = this.iconOn
                }
            }
        },
        switchDevice () {
            if (!this.demo && this.slider !== false) {
                if (this.slider !== this.currentSlider) {
                    this.changeInterval = setTimeout(() => {
                        this.$store.dispatch('setDevice', {
                            device: this.deviceName,
                            state: 'pct' + ' ' + this.slider
                        })
                    }, 1000)
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
.pct {
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 2px;
    margin-right: 5px;
}
.slider-overlay {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    z-index: 15;

    .close-slider{
        position: absolute;
        top: 0;
        left: 0;
        cursor: pointer;
    }

    .slider {
        // position: absolute;
        transform: rotate(-90deg);
        -webkit-transform-origin: calc(100% - 1.25rem) 1.25rem;
        transform-origin: calc(100% - 1.25rem) 1.25rem;
        margin-top: 0;

        border-top: .5px solid gray;
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.8) 0%,
            rgba(255, 250, 0, 0.0) 80%
        );

        -webkit-appearance: none;
        top: 0;
        width: 120px;
        height: 2.5rem;

        &:focus {
        outline: none;
        }
    }

    .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 2.0rem;
        height: 2.0rem;
        background: #ffffff;
        border: 1px solid grey;
        // border-radius: 4px;
        cursor: pointer;

        &:focus {
            outline: none;
        }
    }

    .slider::-moz-range-thumb {
        width: 2.5rem;
        height: 2.5rem;
        background: #ffffff;
        border-radius: 4px;
        cursor: pointer;
    }
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
