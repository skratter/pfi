<template>
    <div>
        <div>
            <p style="color: white;">
                Funktionen !!!
            </p>
            <router-link :to="{ name: 'home' }">
                Home
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    data: () => {
        return {}
    },
    sockets: {
        connect () {
            // Fired when the socket connects.
            this.isConnected = true
            this.$options.sockets.reading = data => {
                console.log(data)
            }
        },

        disconnect () {
            this.isConnected = false
        },

        reading (val) {
            console.log(
                'this method was fired by the socket server. eg: io.emit("customEmit", data)'
            )
        }
    },
    computed: {},
    mounted: () => {},
    methods: {
        getAllValues () {
            // this.$store.state.io.emit('commandNoResp', 'JsonList2')
            this.$store.dispatch('getJson', '')
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
