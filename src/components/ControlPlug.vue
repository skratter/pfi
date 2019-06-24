<template>
    <div class="app-card-icon" @click="switchDevice()">
        <div
            class="app-card"
            :style="{
                'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')'
            }"
        >
            <i :class="icon"></i>
        </div>
        <div class="app-title">
            {{ name }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String, required: true },
        deviceName: { type: String, required: true }
    },
    data: () => {
        return {
            icon: 'fa fa-plug fa-fw',
            colorTop: '',
            colorBottom: '',
            colorInactiveTop: '#cccccc',
            colorInactiveBottom: '#aaaaaa',
            colorOnTop: '#00ff00',
            colorOnBottom: '#00aa00',
            colorOffTop: '#ff0000',
            colorOffBottom: '#aa0000',
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
            console.log(this.device)
            if (this.device === 'off') {
                console.log('!')
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
    mounted () {

    },
    methods: {
        switchDevice () {
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

        i {
            color: #ffffff;
        }

        &:hover {
            transform: scale(1.1);
        }
    }

    .app-title {
        color: #fff;
        font-size: 1.2rem;
        padding-top: 10px;
    }
}
</style>
