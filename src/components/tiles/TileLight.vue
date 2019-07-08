<template>
    <v-flex xs3 class="tile-light">
        <v-card
            class="white--text"
            :style="{ 'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')' }"
        >
            <v-layout justify-center>
                <v-flex xs2>
                    <v-icon style="font-size: 50px; margin: 10px;" :color="color">
                        far fa-plug fa-fw
                    </v-icon>
                </v-flex>
                <v-flex xs10>
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">
                                {{ name }}
                            </div>
                        </div>
                    </v-card-title>
                </v-flex>
            </v-layout>

            <input id="myRange" type="range" min="0" max="100"
                   value="50" step="5" class="slider"
            />
        </v-card>
    </v-flex>
    <!-- <div
        class="app-card-icon"
        :style="{
            'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')'
        }"
    >
        <div :class="{ 'click-app': clickApp }" class="app-card" @click="switchDevice()">
            <v-icon>far fa-plug fa-fw</v-icon>
        </div>
        <div class="app-title" @click="switchDevice()">
            {{ name }}
        </div>
    </div>-->
</template>

<script>
export default {
    props: {
        deviceName: { type: String, required: true }
    },
    data: () => {
        return {
            colorTop: '',
            colorBottom: '',
            colorInactiveTop: '#cccccc',
            colorInactiveBottom: '#aaaaaa',
            colorOnTop: '#00ff00',
            colorOnBottom: '#00aa00',
            colorOffTop: '#ff0000',
            colorOffBottom: '#aa0000',

            clickApp: false,
            name: 'No Alias defined',
            slider: 50,
            interval: null,
            isPlaying: false
        }
    },
    computed: {
        color () {
            let lightness = (50 / 100) * this.slider
            return 'hsl(60,100%,' + lightness + '%)'
        }
    },
    created () {
        this.colorTop = this.colorInactiveTop
        this.colorBottom = this.colorInactiveBottom
    },
    mounted: () => { },
    methods: {
        decrementSlider () {
            this.slider -= 5
        },
        incrementSlider () {
            this.slider += 5
        }
    }
}
</script>

<style lang="scss" scoped>
.slider {
    -webkit-appearance: none;
    width: 100%;
    background: #d3d3d3;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4CAF50;
  cursor: pointer;
}
</style>
