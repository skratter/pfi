<template>
    <v-container fluid grid-list-xl pa-3>
        <v-layout row wrap justify-center>
            <tile-plug device-name="HUEDevice2"/>
            <tile-plug device-name="HUEDevice2"/>
            <tile-light device-name="HUEDevice1"/>
            <tile-plug device-name="HUEDevice2"/>
            <tile-plug device-name="HUEDevice2"/>
            <tile-plug device-name="HUEDevice2"/>
            <tile-plug device-name="HUEDevice2"/>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: {},
    data: () => {
        return { }
    },
    computed: { },
    mounted () { },
    beforeCreate () {},
    created () {},
    methods: {}
}
</script>

<style lang="scss" scoped>

</style>
