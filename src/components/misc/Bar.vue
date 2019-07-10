<template>
    <div class="bar-container">
        <h2 style="margin-left: 10px;color: white; line-height: 50px;">
            {{ title }}
        </h2>
        <v-icon v-if="!showNav" class="nav-icon" @click="showNavbar">
            far fa-bars fa-fw
        </v-icon>
        <v-icon v-else class="nav-icon" @click="hideNavbar">
            far fa-times fa-fw
        </v-icon>

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
    methods: {
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
.bar-container {
    width: 100%;
    height: 50px;
    background: rgba(0,0,0,.4);
}
.nav-icon {
    position: absolute;
    top: 0;
    right: 0;
    margin: 10px;
    z-index: 999;
    color: #ffffff;
    font-size: 2rem;
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
