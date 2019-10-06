<template>
    <div class="grid">
        <div class="grid-item orange">
            <v-icon x-large color="white">
                mdi-bus
            </v-icon>
        </div>
        <div class="grid-item red"></div>
        <tile-plug device-name="HUEDevice2" class="grid-item"/>
        <tile-light device-name="HUEDevice1" :no-dim="false" class="grid-item"/>
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

</style>
