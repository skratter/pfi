<template>
  <div class="container">
    <div class="nav-icon">
      <fa-icon
        v-if="!showNav"
        :icon="['far','bars']"
        fixed-width
        @click="showNavbar"
      />
      <fa-icon
        v-else
        :icon="['far','times']"
        fixed-width
        @click="hideNavbar"
      />
    </div>
    <transition name="fade">
      <div
        v-if="showNav"
        class="nav-container"
      />
    </transition>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      showNav: false,
      showApps: false,
      apps: [
        { title: 'Home', icon: 'far fa-igloo fa-fw', colorTop: 'red', colorBottom: 'yellow' }
      ]
    }
  },
  methods: {
    showNavbar () {
      this.showNav = !this.showNav
    },
    hideNavbar () {
      this.showNav = !this.showNav
    }
  }
}
</script>

<style lang="stylus" scoped>
    .container
        background url('/img/bg_blurry.jpg') center center
        width 100%
        min-height 20vh
        overflow hidden

    .nav-icon
        position absolute
        top 0
        right 0
        padding 20px
        z-index 999

    .nav-icon i
        color #ffffff
        font-size 2rem
        cursor pointer

    .nav-container
        position absolute
        display flex
        justify-content center
        align-items center
        background inherit
        width 100%
        min-height 100vh

    .nav-container:before
        content ''
        position absolute
        width 100%
        min-height 100vh
        background rgba(0,0,0,.5)
        filter blur(10px)
        z-index 10

</style>
