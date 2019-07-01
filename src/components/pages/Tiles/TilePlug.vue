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
            <fa-icon :icon="['far', 'plug']" fixed-width/>
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
            colorInactiveTop: '#cccccc',
            colorInactiveBottom: '#aaaaaa',
            colorOnTop: '#00ff00',
            colorOnBottom: '#00aa00',
            colorOffTop: '#ff0000',
            colorOffBottom: '#aa0000',
            clickApp: false,
            name: '',
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
    padding: 20px;
    transition: 0.1s filter linear;
    -webkit-transition: 0.1s filter linear;

    .app-card {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border-radius: 20px;
        box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.4);
        font-size: 3rem;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        svg {
            color: #ffffff;
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
        font-size: 1.2rem;
        padding-top: 10px;
        cursor: pointer;
    }
}

.click-app {
    filter: brightness(0.8);
}
</style>
