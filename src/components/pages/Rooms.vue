<template>
    <div>
        <div>
            <h1 style="color:white;">
                Räume
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
            title: 'Räume',
            apps: [
                {
                    name: 'Kinderzimmer',
                    colorTop: '#FFEE00',
                    colorBottom: '#FF6000',
                    icon: 'fas fa-baby fa-fw',
                    route: 'joshi'
                }
            ]
        }
    },
    computed: { },
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
