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
        {
          title: 'Home',
          icon: 'far fa-igloo fa-fw',
          colorTop: 'red',
          colorBottom: 'yellow'
        }
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
    content: "";
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    min-height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
