<template>
    <div class="bvg-card">
        <div class="bvg-header">
            <v-icon class="bvg-icon">
                {{ data.mode }}
            </v-icon>
        </div>
        <div class="size-wrap" style="width: 100%; margin: 5px; display: none;"></div>
        <div class="bvg-block">
            <h4 class="bvg-title">
                <span class="amp">
                    {{ data.line }}
                </span> in Richtung
                <span class="amp">
                    {{ data.direction }}
                </span>
            </h4>
            <p
                class="bvg-text"
                style="margin-bottom: 0.5rem;"
            >
                {{ data.station }}
            </p>
            <span v-for="(time, i) in data.times" :key="i">
                <span
                    style="font-size: 1.125rem; color: #dddd19; font-weight: bold;"
                >in {{ time.diff }}'</span>
                <span style="margin-right: 10px;">
                    {{ time.when }}
                </span>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        data: { type: Object, required: true }
    },
    data: () => {
        return { }
    },
    computed: { },
    mounted () { },
    beforeCreate () {},
    created () {},
    methods: {}
}
</script>

<style lang="scss" scoped>
.bvg-card {
    display: flex;
    flex-wrap: wrap !important;
    flex-direction: row !important;
    position: relative;
    margin: 0.6rem;
    color: #e9ecef;
    width: 820px;
    word-wrap: break-word;
    border: 1px solid black;
    background: rgba(0, 0, 0, 0.6);
}
.bvg-header {
    background: #ddc919;
    color: #000000;
    padding: 1rem 1.25rem;
    margin-bottom: 0;
}
.bvg-block {
    padding-left: 1rem !important;
    padding-right: 1rem !important;
    box-sizing: border-box;
}
.bvg-title {
    margin-bottom: 0.75rem;
    font-size: 1.5rem;
}
.bvg-text {
    margin-bottom: 0.5rem;
    font-size: 16pt;
}
.bvg-icon {
    font-size: 5em;
    color: white !important;
    margin: 1rem;
}
.amp {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
    font-weight: bold;
    color: #ddc919;
}
@media (max-width: 820px){
    .size-wrap {
        display: block !important;
    }
}
@media (max-width: 415px) {
    .bvg-card {
        width: 100vw;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>
