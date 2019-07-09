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
                    <p>Platzhalter</p>
                </v-layout>
            </v-container>

            <router-link :to="{ name: 'functions' }">
                Link Funktionen
            </router-link>
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
        // getAllValues () {
        //     this.$store.dispatch('getJson', '')
        // }
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
