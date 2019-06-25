<template>
    <div>
        <bar/>
        <main>
            <content-view/>
            <router-view/>
        </main>
    </div>
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

</style>
