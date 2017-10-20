<template>
    <div id="app">
        <toolbar></toolbar>
        <router-view></router-view>
    </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar';

  export default {
    name: 'app',
    components: {
      Toolbar,
    },
  };
</script>

<style lang="scss">

    @import "assets/stylesheets/app.scss";

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $color-blue;
    }
</style>
