<template>
    <div>
        <v-container fluid grid-list-xl>
            <v-layout v-cloak align-center justify-center column
                      fill-height
            >
                <list-bvg/>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            title: 'BVG'
        }
    },
    computed: {

    },
    mounted () {
        this.$store.commit('setTitle', this.title)
    },
    created: function () {

    },
    methods: {

    }
}

</script>

<style lang="scss" scoped>

</style>
