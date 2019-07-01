<template>
    <div class="app-card-icon">
        <div
            :class="{ 'click-app': clickApp }"
            class="app-card"
            :style="{
                'background': 'linear-gradient(to bottom, '+colorTop+', '+colorBottom+')'
            }"
            @click="clickIcon()"
        >
            <fa-icon :icon="icon" fixed-width/>
        </div>
        <div class="app-title" @click="clickIcon()">
            {{ name }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: { type: String, required: true },
        colorTop: { type: String, required: true },
        colorBottom: { type: String, required: true },
        icon: { type: Array, required: true },
        route: { type: String, required: true }
    },
    data: () => {
        return {
            clickApp: false
        }
    },
    computed: {

    },
    watch: {

    },
    created () {

    },
    methods: {
        clickIcon () {
            this.$router.push({ name: this.route })
            this.clickApp = true
            let that = this

            setTimeout(function () {
                that.clickApp = false
            }, 100)

            this.$store.commit('setBar', false)
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
