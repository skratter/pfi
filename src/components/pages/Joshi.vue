<template>
    <div class="grid">
        <tile-plug device-name="HUEDevice2" class="grid-item"/>
        <tile-light device-name="HUEDevice1" :no-dim="false" class="grid-item"/>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            title: 'Joshua'
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
