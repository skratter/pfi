<template>
    <div>
        <div class="grid">
            <tile-plug device-name="HUEDevice2"/>
            <tile-light device-name="HUEDevice1" :no-dim="false"/>
            <tile-computer device-name="Computer"/>
        </div>
        <div class="grid">
            <tile-link
                name="BVG"
                icon="mdi-bus"
                route="bvg"
            />
            <tile-link
                name="Räume"
                icon="mdi-door"
                route="rooms"
            />
        </div>
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
