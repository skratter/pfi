<template>
    <div class="container">
        <b-row>
            <b-col cols="6" sm="4">
                <b-row>
                    <b-col cols="12">
                        <div class="tile" style="margin: 5px;">
                        </div>
                    </b-col>
                    <b-col cols="12">
                        <div class="tile" style="margin: 5px;">
                        </div>
                    </b-col>
                    <b-col cols="6">
                        <div class="tile" style="margin: 5px;">
                        </div>
                    </b-col>
                    <b-col cols="6">
                        <div class="tile" style="margin: 5px;">
                        </div>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>

        <div class="row">
            <div class="col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2">
                <div class="tile" style="margin: 5px;">
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2">
                <div class="tile" style="margin: 5px;">
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2">
                <div class="tile" style="margin: 5px;">
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2">
                <div class="tile" style="margin: 5px;">
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
                <div class="tile" style="margin: 5px;">
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
                <div class="tile" style="margin: 5px;">
                </div>
            </div>
            <div class="col-12 col-sm-8 col-md-6 col-lg-4 col-xl-4">
                <div class="tile tile-wide" style="margin: 5px;">
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-4  col-xl-4">
                <div class="tile tile-wide" style="margin: 5px;">
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2">
                <div class="tile" style="margin: 5px;">
                </div>
            </div>
            <div class="col-6 col-sm-4 col-md-3 col-lg-2  col-xl-2">
                <div class="tile" style="margin: 5px;">
                </div>
            </div>
        </div>
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
.tile {
    background: white;
    width: 150px;
    height: 150px;
}
.tile-wide {
    width: 310px;
}
.tile-height {
    height: 310px;
}
</style>
