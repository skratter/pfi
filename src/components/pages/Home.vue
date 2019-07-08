<template>
    <div>
        <div>
            <h1 style="color:white;">
                Home !!!
            </h1>

            <button @click="getAllValues()">
                Get JsonList from Server !
            </button>

            <v-container fluid grid-list-xl>
                <v-layout row wrap justify-center>
                    <tile-light device-name="HUEDevice1"/>
                    <tile-plug device-name="HUEDevice2"/>
                    <tile-link
                        name="Test"
                        color-top="red"
                        color-bottom="orange"
                        icon="fas fa-bus fa-fw"
                        route="home"
                    />
                </v-layout>
            </v-container>

            <router-link :to="{ name: 'funktionen' }">
                Link Funktionen
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
    computed: {

    },
    mounted: () => { },
    methods: {
        getAllValues () {
            // this.$store.state.io.emit('commandNoResp', 'JsonList2')
            this.$store.dispatch('getJson', '')
        }
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
