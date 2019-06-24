<template>
    <div class="container">
        <div class="nav-icon">
            <i v-if="!showNav" class="far fa-bars fa-fw" @click="showNavbar"></i>
            <i v-else class="far fa-times fa-fw" @click="hideNavbar"></i>
        </div>
        <transition name="fade">
            <div v-if="showNav" class="nav-container">
                <transition-group class="app-wrapper" name="slide-in">
                    <div
                        v-for="(app, i) in getApps"
                        :key="'app'+i"
                        :style="{ '--i':i }"
                        class="app-container"
                    >
                        <div
                            class="app-card"
                            :style="{ 'background': 'linear-gradient(to bottom, '+app.colorTop+', '+app.colorBottom+')'}"
                        >
                            <i :class="app.icon"></i>
                        </div>
                        <div class="app-title">
                            {{ app.title }}
                        </div>
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
            showNav: false,
            showApps: false,
            apps: [
                {
                    title: 'Home',
                    icon: 'far fa-igloo fa-fw',
                    colorTop: '#D1FE77',
                    colorBottom: '#84B241'
                },
                {
                    title: 'Flight',
                    icon: 'far fa-plane fa-fw',
                    colorTop: '#FEFB81',
                    colorBottom: '#E5AD4C'
                }
            ]
        }
    },
    computed: {
        getApps () {
            return this.showApps === true ? this.apps : []
        }
    },
    methods: {
        showNavbar () {
            this.showNav = !this.showNav
            setTimeout(() => {
                this.showApps = true
            }, 400)
        },
        hideNavbar () {
            this.showNav = !this.showNav
            this.showApps = !this.showApps
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
}
.nav-icon {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    z-index: 999;
    i {
        color: #ffffff;
        font-size: 2rem;
        cursor: pointer;
    }
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

    &:before {
        content: '';
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        min-height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 10;
    }

    .app-wrapper {
        display: grid;
        grid-template: repeat(auto-fit, minmax(120px, 1fr));
        width: 100%;
        max-width: 720px;
    }
}
.app-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    z-index: 11;

    .app-card {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80px;
        height: 80px;
        border-radius: 20px;
        box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.4);
        font-size: 3rem;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        i {
            color: #ffffff;
        }

        &:hover {
            transform: scale(1.1);
        }
    }

    .app-title {
        color: #fff;
        font-size: 1.2rem;
        padding-top: 10px;
    }
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.4s ease-in-out;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.slide-in-enter-active,
.slide-in-leave-active {
    transition: opacity 0.2s linear,
        transform 0.2s cubic-bezier(0.2, 0.5, 0.1, 1);
    transition-delay: calc(0.1s * var(--i));
}
.slide-in-enter,
.slide-in-leave-to {
    opacity: 0;
    transform: translateX(-1em);
}
</style>
