<template>
    <div class="grid">
        <div class="grid-item orange">
            <v-icon>fa fa-bus fa-fw</v-icon>
        </div>
        <div class="grid-item red"></div>
        <div class="grid-item green"></div>
        <div class="grid-item yellow"></div>
        <div class="grid-item brown"></div>
        <div class="grid-item grid-item-w blue"></div>
        <div class="grid-item purple"></div>
        <div class="grid-item black"></div>
        <div class="grid-item grid-item-h yellow"></div>
        <div class="grid-item green"></div>
        <div class="grid-item yellow"></div>
        <div class="grid-item cyan"></div>
        <div class="grid-item red"></div>
        <div class="grid-item orange"></div>
        <div class="grid-item blue"></div>
    </div>
</template>

<script>
export default {
    props: {},
    data: () => {
        return {}
    },
    computed: {},
    mounted () {

    },
    beforeCreate () { },
    created () { },
    methods: {}
}
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-gap: 0;
    // grid-auto-flow: dense;
    grid-template-columns: repeat(auto-fit, 180px);
    // grid-template-rows: repeat(auto, 180px);

    // grid-template-rows: 180px;
    grid-auto-rows: 180px;
    margin: 5% auto;
}
.grid-item-w {
    grid-column: span 2;
}
.grid-item-h {
    grid-row: span 2;
}
@media (max-width: 359px) {
    .grid {
        width: 180px;
    }
}
@media (min-width: 360px) {
    .grid {
        width: 360px;
    }
}
@media (min-width: 540px) {
    .grid {
        width: 540px;
    }
}
@media (min-width: 720px) {
    .grid {
        width: 720px;
    }
}
@media (min-width: 900px) {
    .grid {
        width: 900px;
    }
}
</style>
