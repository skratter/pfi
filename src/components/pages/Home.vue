<template>
    <div>
        <div class="grid">
            <tile-plug device-name="HUEDevice2" class="grid-item"/>
            <tile-light device-name="HUEDevice1" :no-dim="false" class="grid-item"/>
            <tile-computer device-name="Computer" class="grid-item"/>
        </div>
        <div class="grid">
            <tile-link
                name="BVG"
                icon="mdi-bus"
                route="bvg"
                class="grid-item"
            />
            <tile-link
                name="Räume"
                icon="mdi-door"
                route="rooms"
                class="grid-item"
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
