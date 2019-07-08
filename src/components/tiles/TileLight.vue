<template>
    <div class>
        <v-card
            class="app-card-icon"
            :style="{ 'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')' }"
        >
            <v-layout row wrap align-center>
                <v-flex xs2>
                    <v-icon style="font-size: 50px; margin: 10px; padding-top: 10px;" class="white--text">
                        far fa-plug fa-fw
                    </v-icon>
                </v-flex>
                <v-flex xs7>
                    <v-card-title primary-title>
                        <div>
                            <div class="headline white--text" style="padding-top: 10px;">
                                {{ name }}
                            </div>
                        </div>
                    </v-card-title>
                </v-flex>
                <v-flex xs2>
                    <v-switch v-model="onoff" style="margin-top: 25px;" color="white" :value="false"/>
                </v-flex>
            </v-layout>

            <input id="myRange" type="range" min="0" max="100"
                   value="50" step="5" class="slider"
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
            colorTop: '',
            colorBottom: '',
            colorInactiveTop: 'rgba(255, 255, 0, 0.6)',
            colorInactiveBottom: 'rgba(255, 200, 5, 0.6)',
            colorOnTop: 'rgba(0,255,0,0.6)',
            colorOnBottom: 'rgba(0,200,0,0.6)',
            colorOffTop: 'rgba(255,0,0,0.6)',
            colorOffBottom: 'rgba(200,0,0,0.6)',

            clickApp: false,
            name: 'No Alias defined',
            slider: 50
        }
    },
    computed: {

    },
    created () {
        this.colorTop = this.colorInactiveTop
        this.colorBottom = this.colorInactiveBottom
    },
    mounted: () => { },
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
        rgba(255, 255, 161, 0.6) 100%
    );
    border-radius: 4px;
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
    min-width: 320px;
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
</style>
