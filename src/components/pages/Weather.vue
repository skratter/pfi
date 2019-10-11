<template>
    <div>
        <h1 class="white--text" style="margin: 50px;">
            Stuff to do !!
        </h1>
        <div class="grid">
            <tile-weather/>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            title: ''
        }
    },
    computed: {

    },
    mounted () {
        this.$store.commit('setTitle', this.title)
    },
    created () {
        this.title = this.$router.currentRoute.name
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

</style>
