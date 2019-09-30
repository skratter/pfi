<template>
    <div class="grid">
        <div class="grid-item orange">
            <v-icon x-large color="white">
                mdi-bus
            </v-icon>
        </div>
        <tile-link
            name="Test Link"
            color-top="red"
            color-bottom="yellow"
            icon="mdi-bus"
            route="home"
            class="grid-item"
        />
        <div class="grid-item red"></div>
        <tile-plug device-name="HUEDevice2" class="grid-item"/>
        <tile-light device-name="HUEDevice1" class="grid-item"/> <!-- :no-dim="true" -->
        <tile-light device-name="HUEDevice1" :no-dim="true" class="grid-item"/>
        <div class="grid-item yellow"></div>
        <div class="grid-item brown"></div>
        <div class="grid-item grid-item-w blue"></div>
        <div class="grid-item purple"></div>
        <div class="grid-item black"></div>
        <div class="grid-item grid-item-h yellow"></div>
        <div class="grid-item green"></div>
        <div class="grid-item yellow"></div>
        <div class="grid-item cyan"></div>
        <div class="grid-item red"></div>
    </div>
</template>

<script>
export default {
    props: {},
    data: () => {
        return {}
    },
    computed: {},
    mounted () {

    },
    beforeCreate () { },
    created () { },
    methods: {}
}
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-gap: 5px;
    // grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fit, 176px);
    // grid-template-rows: repeat(auto, 180px);

    // grid-template-rows: 180px;
    grid-auto-rows: 176px;
    margin: 5% auto;
    position: relative;
}
.grid-item {
    position: relative;
    // Hover Scale
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.025);
    }
    html.can-touch &:hover {
        transform: none; /* disable hover effect on touch devices */
    }
}
.grid-item-w {
    grid-column: span 2;
}
.grid-item-h {
    grid-row: span 2;
}
@media (max-width: 359px) {
    .grid {
        width: 180px;
    }
}
@media (min-width: 360px) {
    .grid {
        width: 360px;
    }
}
@media (min-width: 540px) {
    .grid {
        width: 540px;
    }
}
@media (min-width: 720px) {
    .grid {
        width: 720px;
    }
}
@media (min-width: 900px) {
    .grid {
        width: 900px;
    }
}
</style>
