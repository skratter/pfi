<template>
    <div
        class="grid-item plug-tile"
        :style="{ 'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')' }"
    >
        <div v-if="!noDim" class="pct white--text">
            {{ slider }} %
        </div>
        <div v-touch:tap="tap" v-touch:longtap="long" class="switch-area">
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
        <div v-if="showSlider" class="slider-overlay">
            <div class="slider-inner">
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
                <div class="white--text slider-pct">
                    {{ slider }} %
                </div>
            </div>
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

            name: 'No Alias',
            room: 'No Room',
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
    font-size: 0.8rem;

    .headline-area {
        font-size: 1.2rem;
    }
}

.slider-overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.6);
}
@media (max-width: 400px) {
    .slider-inner {
        width: 360px;
        height: 80%;
        margin-top: 10%;
    }
    .slider-pct {
        margin-top: 85%;
        width: 100%;
        text-align: center;
        font-size: 2rem;
    }
}
@media (min-width: 401px) {
    .slider-inner {
        width: 360px;
        height: 600px;
        margin-top: 5%;
        border-radius: 10px;
    }
    .slider-pct {
        margin-top: 300px;
        width: 100%;
        text-align: center;
        font-size: 2rem;
    }
}
.slider-inner {
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    background: rgb(30, 30, 30);
}
.slider {
    transform: rotate(-90deg);
    -webkit-transform-origin: calc(100% - 500px) 100px;
    transform-origin: calc(100% - 200px) 130px;
    margin-top: 80px;
}
.close-slider {
    position: relative;
    top: 0;
    left: 0;
    font-size: 2rem;
    cursor: pointer;
}

.slider {
    background: rgb(40, 40, 40);
    -webkit-appearance: none;
    width: 450px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
    z-index: 1000;

    &:focus {
        outline: none;
    }
}

::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 100px;
    border: 1px solid rgb(40,40,40);
    background:rgb(255, 255, 255);
    box-shadow: -100vw 0 0 100vw rgb(250, 230, 0);
    cursor: pointer;

    &:focus {
        outline: none;
    }
}
</style>
