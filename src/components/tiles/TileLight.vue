<template>
    <div class>
        <v-card
            class="app-card-icon"
            :style="{ 'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')' }"
        >
            <v-layout row wrap>
                <div class="icon-area">
                    <v-icon class="white--text icon">
                        {{ icon }} fa-fw
                    </v-icon>
                </div>
                <div class="text-area">
                    <v-card-title primary-title>
                        <div>
                            <div class="headline white--text" style="padding-top: 15px;">
                                {{ name }}
                            </div>
                        </div>
                    </v-card-title>
                </div>
                <div class="switch-area">
                    <v-switch v-model="onoff" color="white" class="switch"/>
                </div>
            </v-layout>

            <input
                id="myRange"
                v-model="slider"
                type="range"
                min="0"
                max="100"
                step="10"
                class="slider"
            />
        </v-card>
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

            colorTop: '',
            colorBottom: '',
            colorInactiveTop: 'rgba(204,204,204,0.6)',
            colorInactiveBottom: 'rgba(170,170,170,0.6)',
            colorOnTop: 'rgba(255, 250, 0, 0.6)',
            colorOnBottom: 'rgba(255, 190, 0, 0.6)',
            colorOffTop: 'rgba(0,0,0,0.6)',
            colorOffBottom: 'rgba(0,0,0,0.6)',

            icon: 'far fa-lightbulb-slash',

            name: 'No Alias defined',
            slider: 50,
            onoff: false
        }
    },
    computed: {

    },
    watch: {
        slider: function () {
            if (this.slider > 0) {
                this.onoff = true
            } else {
                this.onoff = false
            }
        },
        onoff: function () {
            if (!this.onoff) {
                this.slider = 0
                this.colorTop = this.colorOffTop
                this.colorBottom = this.colorOffBottom
                this.icon = 'far fa-lightbulb'
            } else {
                if (this.slider === 0) {
                    this.slider = 100
                }
                this.colorTop = this.colorOnTop
                this.colorBottom = this.colorOnBottom
                this.icon = 'fas fa-lightbulb-on'
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

        if (this.demo) {
            this.name = 'Demo'
        }
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
.slider {
    -webkit-appearance: none;
    width: 100%;
    // background: linear-gradient (to right, yellow, red);
    background: rgba(59, 173, 227, 1);
    background: linear-gradient(
        45deg,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(255, 191, 0, 0.8) 100%
    );
    border-radius: 4px;
    z-index: 10;
}

.slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #ffffff;
    border: 1px solid grey;
    border-radius: 4px;
    cursor: pointer;
}

.slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #ffffff;
    border-radius: 4px;
    cursor: pointer;
}

.app-card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 360px;
    height: 120px;
    margin: 20px;
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.1);
    }
    html.can-touch &:hover {
        transform: none; /* disable hover effect on touch devices */
    }
}

.switch {
    position: relative;
    top: 18px;
    transform: scale(1.4);
}
.icon {
    position: relative;
    top: 10px;
    margin: 10px;
    font-size: 3rem;
}
.icon-area {
    margin-right: 10px;
}
.text-area {
    position: relative;
    top: 18px;
    width: 210px;
    margin-left: -20px;
}
.icon-area,
.text-area,
.switch-area {
    position: relative;
    top: 18px;
}
</style>
