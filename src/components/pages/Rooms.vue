<template>
    <div class="grid">
        <div v-for="room in rooms" :key="room.name">
            <tile-link
                :name="room.name"
                icon="mdi-door"
                :route="room.name"
                class="grid-item"
            />
        </div>
    </div>
</template>

<script>
import data from '@/data/data.json'
export default {
    data: () => {
        return {
            title: 'Räume',
            rooms: []
        }
    },
    computed: { },
    mounted () {
        this.$store.commit('setTitle', this.title)
    },
    created () {
        this.rooms = data
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
