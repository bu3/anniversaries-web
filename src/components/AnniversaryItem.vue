<template>
  <div class="anniversary-item">
    <img :src="anniversary.photoURL" v-if="anniversary.photoURL"/>
    {{ anniversary.name}} - {{ anniversary.anniversaryDate | moment("DD/MM/YYYY") }}
  </div>
</template>

<script>
  export default {
    name: 'anniversary-item',
    props: ['anniversary'],
  };
</script>

<style lang="scss" scoped>
  .anniversary-item {
    img {
      width: 48px;
      height: 48px;
      vertical-align: middle;
    }
  }
</style>
