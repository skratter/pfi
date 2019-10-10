<template>
    <div
        class="grid-item tile white--text"
        :style="{ 'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')' }"
    >
        <div class="temp">
            <v-icon class="white--text" style="font-size: 7rem; float: left;">
                {{ currentWeather.icon }}
            </v-icon>
            <div class="htlt">
                {{ currentWeather.ht }}° <br/>
                {{ currentWeather.lt }}°
            </div>
            {{ currentWeather.temp }}°
            <div class="sunset" style="float: right;">
                <v-icon class="white--text">
                    mdi-weather-sunset-up
                </v-icon>
                {{ currentWeather.sunrise }}
                <br/>
                <v-icon class="white--text">
                    mdi-weather-sunset-down
                </v-icon>
                {{ currentWeather.sunset }}
            </div>
        </div>
        <div style="clear: both;">
            <hr style="margin: 24px; border-top: 2px dashed; border-bottom: 0;"/>
        </div>
        <div class="forecast">
            <v-row>
                <v-col>
                    <v-row align="center" justify="center">
                        <div v-for="item in forecast" :key="item.time" class="forecast-item">
                            <v-icon class="white--text forecast-icon">
                                {{ item.icon }}
                            </v-icon>
                            <div class="forecast-temp">
                                {{ item.temp }}°
                            </div>
                            <div>
                                <div class="forecast-time">
                                    {{ item.time }}
                                </div>
                            </div>
                        </div>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data: () => {
        return {
            colorTop: 'rgba(30,30,30,0.6)',
            colorBottom: 'rgba(100,100,100,0.6)',
            currentWeather: {
                temp: 'TT',
                icon: 'mdi-weather-cloudy-alert',
                ht: 'HT',
                lt: 'LT',
                sunriseRaw: '0',
                sunsetRaw: '0',
                sunrise: '08:00',
                sunset: '20:00',
                rain: '',
                cloud: ''
            },
            forecast: [
                {
                    time: '00:00',
                    temp: 'TT',
                    icon: 'mdi-weather-cloudy-alert'
                },
                {
                    time: '03:00',
                    temp: 'TT',
                    icon: 'mdi-weather-cloudy-alert'
                },
                {
                    time: '06:00',
                    temp: 'TT',
                    icon: 'mdi-weather-cloudy-alert'
                },
                {
                    time: '09:00',
                    temp: 'TT',
                    icon: 'mdi-weather-cloudy-alert'
                }
            ]
        }
    },
    computed: {
        weatherApiKey: function () {
            return this.$store.getters.weatherApiKey
        },
        weatherLocId: function () {
            return this.$store.getters.weatherLocId
        },
        demo: function () {
            return this.$store.getters.demo
        }
    },
    watch: {

    },
    mounted () {
        if (!this.demo) {
            this.$axios.get(
                'http://api.openweathermap.org/data/2.5/weather?id=' +
                this.weatherLocId +
                '&units=metric' +
                '&APPID=' +
                this.weatherApiKey
            )
                .then(response => {
                    let data = response.data
                    console.log(data)
                    this.sunriseRaw = new Date((data.sys.sunrise) * 1000)
                    this.sunsetRaw = new Date((data.sys.sunset) * 1000)
                    this.currentWeather.sunrise = this.sunriseRaw.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
                    this.currentWeather.sunset = this.sunsetRaw.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
                    this.currentWeather.temp = parseInt(data.main.temp)
                    this.currentWeather.ht = parseInt(data.main.temp_max)
                    this.currentWeather.lt = parseInt(data.main.temp_min)
                    let night = this.itsNight()
                    this.currentWeather.icon = this.getWeatherCondition(data.weather[0].id)
                    console.log(night)
                })
            this.$axios.get(
                'http://api.openweathermap.org/data/2.5/forecast?id=' +
                this.weatherLocId +
                '&cnt=4' +
                '&units=metric' +
                '&APPID=' +
                this.weatherApiKey
            )
                .then(response => {
                    let data = response.data
                    console.log(data)
                    for (let i = 0; i < data.list.length; i++) {
                        console.log(data.list[i])
                        this.forecast[i].time = new Date((data.list[i].dt) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
                        this.forecast[i].temp = parseInt(data.list[i].main.temp)
                        this.forecast[i].icon = this.getWeatherCondition(data.list[i].weather[0].id)
                    }
                })
        }
    },
    created () {

    },
    methods: {
        itsNight () {
            let currentTime = new Date()
            if (this.sunriseRaw < currentTime && this.sunsetRaw > currentTime) {
                return false
            } else {
                return true
            }
        },
        getWeatherCondition (code) {
            switch (true) {
            case (code >= 200 && code < 300):
                return 'mdi-weather-lightning'
            case (code >= 300 && code < 400):
                return 'mdi-weather-pouring'
            case (code >= 500 && code <= 504):
                return 'mdi-weather-partly-rainy'
            case (code === 511):
                return 'mdi-snowflake'
            case (code >= 520 && code <= 531):
                return 'mdi-weather-pouring'
            case (code >= 600 && code < 700):
                return 'mdi-snowflake'
            case (code >= 700 && code < 800):
                return 'mdi-weather-fog'
            case (code === 801):
                return 'mdi-weather-partly-cloudy'
            case (code === 802):
                return 'mdi-weather-cloudy'
            case (code === 803):
                return 'mdi-cloud'
            case (code === 804):
                return 'mdi-cloud'
            default:
                return 'mdi-weather-cloudy-alert'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.tile {
    user-select: none;
    -webkit-user-select: none;
    grid-column: span 3;
    grid-row: span 2;
    height: 245px;
    cursor: pointer;
}
.sunset {
    font-size: 1.0rem;
    margin-top: 32px;
}
.temp {
    font-size: 3rem;
    margin-top: 5px;
    margin-right: 24px;
    margin-left: 24px;
}
.htlt {
    text-align: right;
    margin-top: 32px;
    margin-left: 12px;
    margin-right: 0;
    display: inline-block;
    font-size: 1rem;
}
.forecast {
    position: absolute;
    bottom: 10px;
    margin-left: 15px;
}
.forecast-item {
    display: inline-block;
    width: 80px;
    margin: 6px;
}
.forecast-icon {
    font-size: 2.9rem;
}
.forecast-temp {
    display: inline-block;
    font-size: 1.2rem;
    line-height: 3rem;
}
.forecast-time {
    text-align: center;
    width: 80px;
    font-size: 1rem;
}
</style>
