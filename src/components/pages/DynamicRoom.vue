<template>
    <div>
        <div class="grid">
            <component
                :is="device.type"
                v-for="device in devs"
                :key="device.name"
                :room="title"
                :device-name="device.name"
            />
        </div>
    </div>
</template>

<script>
import rooms from '~/config/json/rooms.json'

export default {
    data: () => {
        return {
            title: '',
            devs: []
        }
    },
    computed: {

    },
    mounted () {
        this.$store.commit('setTitle', this.title)
    },
    created () {
        this.title = this.$router.currentRoute.name
        const temp = rooms.find(item => item.name === this.title)
        this.devs = temp.devs
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

</style>
