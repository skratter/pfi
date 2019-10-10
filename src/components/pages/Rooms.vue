<template>
    <div class="grid">
        <tile-link
            v-for="room in rooms"
            :key="room.name"
            :name="room.name"
            :icon="room.icon"
            :route="room.name"
        />
    </div>
</template>

<script>
import data from '~/config/json/rooms.json'
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
