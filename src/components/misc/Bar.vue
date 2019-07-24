<template>
    <div>
        <v-toolbar dark color="rgba(0,0,0,.4)" style="z-index: 1000;">
            <router-link :to="{ name: 'home' }">
                <v-img src="/img/logo.png" max-width="50" max-height="50" class="mr-3 ml-2"/>
            </router-link>
            <v-toolbar-title>{{ title }}</v-toolbar-title>

            <v-spacer/>

            <v-btn icon class="mr-2" @click="reload()">
                <v-icon>mdi-reload</v-icon>
            </v-btn>
            <v-app-bar-nav-icon class="nav-icon mr-1">
                <v-btn icon>
                    <v-icon v-if="!showNav" @click="showNavbar">
                        mdi-menu
                    </v-icon>
                    <v-icon v-else @click="hideNavbar">
                        mdi-close
                    </v-icon>
                </v-btn>
            </v-app-bar-nav-icon>
        </v-toolbar>

        <transition name="fade">
            <div v-if="showNav" class="nav-container">
                <transition-group class="app-wrapper" name="slide-in">
                    <div v-for="(app, i) in getApps" :key="'app'+i" :style="{ '--i':i }">
                        <tile-link
                            :name="app.name"
                            :color-top="app.colorTop"
                            :color-bottom="app.colorBottom"
                            :icon="app.icon"
                            :route="app.route"
                        />
                    </div>
                </transition-group>
            </div>
        </transition>
    </div>
</template>

<script>
import { setTimeout } from 'timers'
export default {
    data: () => {
        return {
            showApps: false,
            apps: [
                {
                    name: 'Home',
                    colorTop: '#FFEE00',
                    colorBottom: '#FF6000',
                    icon: 'fas fa-home fa-fw',
                    route: 'home'
                }, {
                    name: 'Räume',
                    colorTop: '#FFEE00',
                    colorBottom: '#FF6000',
                    icon: 'fas fa-door-closed fa-fw',
                    route: 'rooms'
                }, {
                    name: 'Funktionen',
                    colorTop: '#FFEE00',
                    colorBottom: '#FF6000',
                    icon: 'fas fa-cogs fa-fw',
                    route: 'functions'
                }, {
                    name: 'Test',
                    colorTop: '#FFEE00',
                    colorBottom: '#FF6000',
                    icon: 'far fa-vial fa-fw',
                    route: 'test'
                }, {
                    name: 'Platzhalter',
                    colorTop: '#BBBBBB',
                    colorBottom: '#777777',
                    icon: 'far fa-image fa-fw',
                    route: 'placeholder'
                }
            ]
        }
    },
    computed: {
        title: function () {
            return this.$store.getters.title
        },
        getApps () {
            return this.showApps === true ? this.apps : []
        },
        showNav () {
            return this.$store.getters.bar
        }
    },
    watch: {
        '$route' (to, from) {
            if (to.name !== to.from && this.showNav) {
                this.$store.commit('setBar', false)
            }
        },
        showNav: function () {
            if (!this.showNav) {
                this.hideNavbar()
            }
        }
    },
    mounted () {
    },
    methods: {
        reload () {
            window.location.reload(true)
        },
        showNavbar () {
            this.$store.commit('setBar', true)
            setTimeout(() => {
                this.showApps = true
            }, 200)
        },
        hideNavbar () {
            this.$store.commit('setBar', false)
            this.showApps = !this.showApps
        }
    }
}
</script>

<style lang="scss" scoped>
.nav-icon {
    cursor: pointer;
}

.nav-container {
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: inherit;
    width: 100%;
    min-height: 100%;
    z-index: 100;

    &:before {
        content: '';
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        min-height: 100%;
        background: rgba(0, 0, 0, 0.6);
        z-index: 10;
    }

    .app-wrapper {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        width: 100%;
        max-width: 720px;
        z-index: 11;
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.2s ease-in-out;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-in-enter-active,
.slide-in-leave-active {
    transition: opacity 0.1s linear,
        transform 0.1s cubic-bezier(0.2, 0.5, 0.1, 1);
    transition-delay: calc(0.05s * var(--i));
}
.slide-in-enter,
.slide-in-leave-to {
    opacity: 0;
    transform: translateX(-1em);
}
</style>
