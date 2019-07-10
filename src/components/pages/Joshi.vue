<template>
    <div>
        <div>
            <v-container fluid grid-list-xl>
                <v-layout
                    row
                    wrap
                    justify-center
                >
                    <tile-light device-name="HUEDevice1"/>
                    <tile-plug device-name="HUEDevice2"/>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            title: 'Kinderzimmer (Joshi)'
        }
    },
    computed: {

    },
    mounted () {
        this.$store.commit('setTitle', this.title)
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

</style>
