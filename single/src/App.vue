<template>
  <div id="app">
    <icon class="logo" name="logo"></icon>
    <img src="./assets/img/logo.png" alt="">

    <app-header></app-header>

    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/header/header.vue'

  export default {
    name: 'app',
    components: {
      'app-header': Header
    },
    created () {

    }
  }
</script>

<style lang="stylus">
  @import "assets/styles"
</style>
