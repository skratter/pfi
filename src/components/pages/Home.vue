<template>
    <div>
        <div class="grid">
            <tile-plug device-name="HUEDevice2" class="grid-item"/>
            <tile-light device-name="HUEDevice1" :no-dim="false" class="grid-item"/>
            <tile-computer device-name="Computer" class="grid-item"/>
        </div>
        <v-container fluid grid-list-xl>
            <v-layout
                row
                wrap
                justify-center
                style="margin: 0;"
            >
                <v-card color="rgba(0,0,0,.4)" class="mt-3">
                    <v-card-title class="white--text">
                        BVG
                    </v-card-title>
                    <list-bvg/>
                </v-card>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            title: 'Home'
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
.item {
  min-height: 50px;
  min-width: 80px;
  margin: 10px;
}
</style>
