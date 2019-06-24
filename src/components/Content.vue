<template>
    <div>
        <div>
            <button @click="getAllValues()">
                Get All Values
            </button>
            <button @click="toggleDevice()">
                Toggle Device
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

        // Fired when the server sends something on the "messageChannel" channel.
        // getAllValues (data) {
        //   console.log('data from server')
        //   console.log(data)
        //   this.socketMessage = data
        // }
    },
    computed: {},
    mounted: () => {},
    methods: {
        getAllValues () {
            this.$store.dispatch('getAllValues')
        },
        toggleDevice () {
            this.$store.dispatch('setDevice', {
                device: 'HUEDevice2',
                state: 'off'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
