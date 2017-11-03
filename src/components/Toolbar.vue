<template>
    <md-toolbar>
        <h1 class="md-title">My Title</h1>
        <router-link to="/addEmployee" tag="button" class="navButton">Add Employee</router-link>
    </md-toolbar>
</template>

<script>
  export default {
    name: 'toolbar',
    data() {
      return {};
    },
  };
</script>

<style lang="scss" scoped>
    @import "../assets/stylesheets/app";
</style>
