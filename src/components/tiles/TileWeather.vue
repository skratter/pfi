<template>
    <div
        class="grid-item tile white--text"
        :style="{ 'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')' }"
        @click="goToWeather()"
    >
        <div class="temp">
            <img :src="'/img/weather/' + currentWeather.icon" class="weather-icon"/>
            <div class="htlt">
                {{ currentWeather.temp }}°
            </div>

            <div class="weather-rain">
                <img src="/img/weather/Cloud-Rain.svg" class="weather-rain-icon"/>
                <div class="weather-rain-pct">
                    {{ currentWeather.rainPct }} %
                </div>
            </div>
            <div class="sunset" style="float: right;">
                <img src="/img/weather/Sunrise.svg" class="sunrise-icon"/>
                <div class="sunrise-text">
                    {{ currentWeather.sunrise }}
                </div>
                <br/>
                <img src="/img/weather/Sunset.svg" class="sunrise-icon"/>
                <div class="sunset-text">
                    {{ currentWeather.sunset }}
                </div>
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
                            <img :src="'/img/weather/' + item.icon" class="forecast-icon"/>
                            <div class="forecast-temp">
                                {{ item.temp }}°
                                <div class="forecast-rain">
                                    {{ item.rain }}%
                                </div>
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
            colorTop: 'rgba(20,20,20,0.6)',
            colorBottom: 'rgba(70,70,70,0.6)',
            currentWeather: {
                temp: 'TT',
                apparentTemperature: 'FT',
                icon: 'Cloud-Download.svg',
                rainPct: 100,
                sunriseRaw: '0',
                sunsetRaw: '0',
                sunrise: '08:00',
                sunset: '20:00'
            },
            forecast: [
                {
                    time: '00:00',
                    temp: 'TT',
                    rain: '100',
                    icon: 'Cloud-Download.svg'
                },
                {
                    time: '03:00',
                    temp: 'TT',
                    rain: '100',
                    icon: 'Cloud-Download.svg'
                },
                {
                    time: '06:00',
                    temp: 'TT',
                    rain: '100',
                    icon: 'Cloud-Download.svg'
                },
                {
                    time: '09:00',
                    temp: 'TT',
                    rain: '100',
                    icon: 'Cloud-Download.svg'
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
                'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' +
                this.weatherApiKey +
                '/' +
                this.weatherLocId +
                '?lang=de&units=ca'
            )
                .then(response => {
                    let data = response.data
                    console.log(data)

                    this.sunriseRaw = new Date((data.daily.data[1].sunriseTime) * 1000)
                    this.sunsetRaw = new Date((data.daily.data[1].sunsetTime) * 1000)
                    this.currentWeather.sunrise = this.sunriseRaw.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
                    this.currentWeather.sunset = this.sunsetRaw.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })

                    this.currentWeather.temp = this.toInt(data.currently.temperature)
                    this.currentWeather.apparentTemperature = this.toInt(data.currently.apparentTemperature)
                    this.currentWeather.icon = this.getWeatherIcon(data.currently.icon)
                    this.currentWeather.rainPct = data.currently.precipProbability * 100

                    for (let i = 1; i < 12;) {
                        this.forecast[Math.ceil(i / 3) - 1].time = new Date((data.hourly.data[(Math.ceil(i / 3) * 3)].time) * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })
                        this.forecast[Math.ceil(i / 3) - 1].temp = this.toInt(data.hourly.data[(Math.ceil(i / 3) * 3)].temperature)
                        this.forecast[Math.ceil(i / 3) - 1].icon = this.getWeatherIcon(data.hourly.data[(Math.ceil(i / 3) * 3)].icon)
                        this.forecast[Math.ceil(i / 3) - 1].rain = this.toInt((data.hourly.data[(Math.ceil(i / 3) * 3)].precipProbability) * 100)
                        i = i + 3
                    }
                })
        }
    },
    created () {
    },
    methods: {
        toInt (number) {
            return parseInt(Math.round(number))
        },
        getWeatherIcon (code) {
            switch (code) {
            case 'clear-day':
                return 'Sun.svg'
            case 'clear-night':
                return 'Moon.svg'
            case 'rain':
                return 'Cloud-Rain.svg'
            case 'snow':
                return 'Cloud-Snow.svg'
            case 'sleet':
                return 'Cloud-Hail.svg'
            case 'wind':
                return 'Wind.svg'
            case 'fog':
                return 'Cloud-Fog-Alt.svg'
            case 'cloudy':
                return 'Cloud.svg'
            case 'partly-cloudy-day':
                return 'Cloud-Sun.svg'
            case 'partly-cloudy-night':
                return 'Cloud-Moon.svg'
                // return 'Cloud-Moon.svg'
            case 'hail':
                return 'Cloud-Hail.svg'
            case 'thunderstorm':
                return 'Cloud-Lightning.svg'
            case 'tornado':
                return 'Tornado.svg'
            default:
                return 'Cloud-Download.svg'
            }
        },
        goToWeather () {
            this.$router.push({ name: 'weather' })
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
.weather-icon{
    margin: -56px;
    margin-top: -50px;
    width: 200px;
    height: auto;
    // filter: invert(1);
    float:left;
}
.sunset {
    font-size: 1.0rem;
    margin-top: 32px;
}
.sunrise-icon {
    width: 60px;
    margin: -15px;
    margin-right: 20px;
    margin-top: -22px;
    // filter: invert(1)
}
.sunrise-text {
    position: absolute;
    top: 38px;
    right: 15px;
}
.sunset-text {
    position: absolute;
    top: 67px;
    right: 15px;
}
.temp {
    font-size: 3.2rem;
    margin-top: 7px;
    margin-right: 24px;
    margin-left: 16px;
}
.htlt {
    text-align: right;
    margin-top: 18px;
    margin-left: 10px;
    margin-right: 0;
    display: inline-block;
    font-size: 3rem;
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
    width: 80px;
    height: auto;
    // filter: invert(1);
    margin-left: -22px;
    margin-right: -16px;
    margin-bottom: -22px;
}
.forecast-temp {
    display: inline-block;
    font-size: 1.2rem;
    margin: 0;
}
.forecast-rain {
    display: block;
    margin-top: -5px;
    font-size: .8rem;
}
.forecast-time {
    // text-align: center;
    width: 80px;
    font-size: .8rem;
    margin-top: -3px;
    padding-left: 5px;
}
.weather-rain {
    display: inline-block;
    font-size: 1rem;
}
.weather-rain-icon {
    position: absolute;
    top: 20px;
    left: 195px;
    // filter: invert(1);
    width: 50px;
    height: auto;
    margin-top: 0;
    margin-left: 10px;
}
.weather-rain-pct {
    display: block;
    position: absolute;
    top: 60px;
    left: 208px;
    width: 50px;
    text-align: center;
}
</style>
