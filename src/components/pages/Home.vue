<template>
    <div>
        <div class="grid">
            <component :is="device.type"
                       v-for="device in devs"
                       :key="device.name"
                       :room="device.room"
                       :device-name="device.name"
            />
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
import devs from '~/config/json/home.json'

export default {
    data: () => {
        return {
            title: 'Home',
            devs: []
        }
    },
    computed: {

    },
    mounted () {
        this.$store.commit('setTitle', this.title)
    },
    created () {
        this.devs = devs
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
