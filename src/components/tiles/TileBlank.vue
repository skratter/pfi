<template>
    <div class="grid-item tile">
    </div>
</template>

<script>
export default {
    props: {
    },
    data: () => {
        return {}
    },
    computed: {
    },
    watch: {
    },
    created () {
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.tile {
    user-select: none;
    -webkit-user-select: none;
    line-height: 120px;
}
@media (max-width: 415px) {
    .tile {
        display: none;
    }
}
</style>
