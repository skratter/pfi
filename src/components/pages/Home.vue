<template>
    <div>
        <v-container fluid grid-list-xl>
            <v-layout
                row
                wrap
                justify-center
            >
                <v-layout row wrap justify-center>
                    <v-card color="rgba(0,0,0,.4)">
                        <v-card-title class="white--text">
                            Eingeschaltete Geräte
                        </v-card-title>
                        <tile-light device-name="HUEDevice1"/>
                        <tile-plug device-name="HUEDevice2"/>
                    </v-card>
                </v-layout>

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
