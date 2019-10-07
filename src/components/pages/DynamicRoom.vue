<template>
    <div>
        <div class="grid">
            <div v-for="device in devs" :key="device.name">
                <component :is="device.type" :device-name="device.name"/>
            </div>
        </div>
    </div>
</template>

<script>
import data from '@/data/data.json'

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
        const temp = data.find(item => item.name === this.title)
        this.devs = temp.devs
        console.log(this.devs)
    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>

</style>
