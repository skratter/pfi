<template>
    <v-app id="inspire">
        <bar/>
        <main>
            <router-view/>
        </main>
    </v-app>
</template>

<script>
export default {
    data: () => ({}),
    computed: { },
    created: () => {
        document.addEventListener('touchstart', function addtouchclass (e) { // first time user touches the screen
            document.documentElement.classList.add('can-touch') // add "can-touch" class to document root using classList API
            document.removeEventListener('touchstart', addtouchclass, false) // de-register touchstart event
        }, false)
    },
    mounted: () => { }
}
</script>

<style lang="scss" scoped>
#inspire {
    background-color: #000000;
    background-image: url("/img/bg.jpg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    background-attachment: fixed;
}
</style>
