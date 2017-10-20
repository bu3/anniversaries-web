<template>
    <div class="nav">
        <router-link to="/addEmployee" tag="button" class="navButton">Add Employee</router-link>
    </div>
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
