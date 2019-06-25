<template>
    <div class="app-card-icon" @click="switchDevice()">
        <div
            :class="{ 'click-app': clickApp }"
            class="app-card"
            :style="{
                'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')'
            }"
        >
            <fa-icon :icon="['far', 'plug']" fixed-width/>
        </div>
        <div class="app-title">
            {{ name }}
        </div>
    </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
    props: {
        name: { type: String, required: true },
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
            if (this.device === 'off') {
                this.colorTop = this.colorOffTop
                this.colorBottom = this.colorOffBottom
            }
            if (this.device === 'on') {
                this.colorTop = this.colorOnTop
                this.colorBottom = this.colorOnBottom
            }
        }
    },
    created () {
        this.colorTop = this.colorInactiveTop
        this.colorBottom = this.colorInactiveBottom
    },
    methods: {
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
    transition: .1s filter linear;
    -webkit-transition: .1s filter linear;
    cursor: pointer;

    .app-card {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border-radius: 20px;
        box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.4);
        font-size: 3rem;
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
    }
}

.click-app {
    filter: brightness(0.8);
}
</style>
