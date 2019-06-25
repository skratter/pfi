<template>
    <div>
        <div>
            <button @click="getAllValues()">
                Get All Values
            </button>
            <control-plug
                name="Baby"
                device-name="HUEDevice2"
            />
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
            this.$store.dispatch('getAllValues')
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
