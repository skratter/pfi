<template>
    <div>
        <div>
            <h1 style="color: white;">
                Funktionen !!!
            </h1>

            <v-container fluid grid-list-xl>
                <v-layout
                    row
                    wrap
                    justify-center
                >
                    <div v-for="app in apps" :key="app.name">
                        <tile-link
                            :name="app.name"
                            :color-top="app.colorTop"
                            :color-bottom="app.colorBottom"
                            :icon="app.icon"
                            :route="app.route"
                        />
                    </div>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            title: 'Funktionen',
            apps: [
                {
                    name: 'BVG',
                    colorTop: '#FFEE00',
                    colorBottom: '#FF6000',
                    icon: 'fas fa-bus fa-fw',
                    route: 'bvg'
                }
            ]
        }
    },
    computed: {},
    mounted () {
        this.$store.commit('setTitle', this.title)
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
</style>
