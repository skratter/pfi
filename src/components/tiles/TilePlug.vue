<template>
    <div class="app-card-icon">
        <div
            :class="{ 'click-app': clickApp }"
            class="app-card"
            :style="{
                'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')'
            }"
            @click="switchDevice()"
        >
            <v-icon>far fa-plug fa-fw</v-icon>
        </div>
        <div class="app-title" @click="switchDevice()">
            {{ name }}
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
            colorTop: '',
            colorBottom: '',
            colorInactiveTop: 'rgba(204,204,204,0.6)',
            colorInactiveBottom: 'rgba(170,170,170,0.6)',
            colorOnTop: 'rgba(0,255,0,0.6)',
            colorOnBottom: 'rgba(0,200,0,0.6)',
            colorOffTop: 'rgba(255,0,0,0.6)',
            colorOffBottom: 'rgba(200,0,0,0.6)',
            clickApp: false,
            name: 'No Alias defined',
            status: ''
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
        console.log(this.device)

        if (this.device !== '') {
            this.setDevice()
        }
    },
    methods: {
        setDevice () {
            if (this.device.Readings.state.Value === 'off') {
                this.colorTop = this.colorOffTop
                this.colorBottom = this.colorOffBottom
            }
            if (this.device.Readings.state.Value === 'on') {
                this.colorTop = this.colorOnTop
                this.colorBottom = this.colorOnBottom
            }
            this.name = this.device.Attributes.alias
        },
        switchDevice () {
            this.clickApp = true
            let that = this

            setTimeout(function () {
                that.clickApp = false
            }, 100)

            this.$store.dispatch('setDevice', {
                device: this.deviceName,
                state: 'toggle'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.app-card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 200px;
    margin: 20px;
    transition: 0.1s filter linear;
    -webkit-transition: 0.1s filter linear;

    .app-card {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border-radius: 4px;
        box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.4);
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        i {
            color: #ffffff;
            font-size: 3rem;
        }

        &:hover {
            transform: scale(1.1);
        }
        html.can-touch &:hover {
            transform: none; /* disable hover effect on touch devices */
        }
    }

    .app-title {
        color: #fff;
        font-size: 1.5rem;
        padding-top: 10px;
        cursor: pointer;
    }
}

.click-app {
    filter: brightness(0.8);
}
</style>
