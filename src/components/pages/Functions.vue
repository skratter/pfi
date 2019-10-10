<template>
    <div class="grid">
        <tile-link
            v-for="app in apps"
            :key="app.name"
            :name="app.name"
            :icon="app.icon"
            :route="app.route"
        />
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
