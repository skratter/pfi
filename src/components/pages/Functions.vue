<template>
    <div class="grid">
        <div v-for="app in apps" :key="app.name">
            <link-icon
                :name="app.name"
                :color-top="app.colorTop"
                :color-bottom="app.colorBottom"
                :icon="app.icon"
                :route="app.route"
            />
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
                    icon: 'mdi-bus',
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
