<template>
    <div>
        <div>
            <h1 style="color:white;">
                Kinderzimmer (Joshua)
            </h1>

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
        // getAllValues () {
        //     this.$store.dispatch('getJson', '')
        // }
    }
}
</script>

<style lang="scss" scoped>
.item {
  min-height: 50px;
  min-width: 80px;
  margin: 10px;
}
</style>
