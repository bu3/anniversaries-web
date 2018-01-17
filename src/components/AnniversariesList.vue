<template>
  <div class="anniversaries-list">
    <h2>Anniversaries</h2>
    <ul>
      <li class="anniversary" v-for="anniversary in anniversaries">
        <anniversaryItem :anniversary="anniversary"></anniversaryItem>
      </li>
    </ul>
  </div>
</template>

<script>
  import anniversaryItem from '@/components/AnniversaryItem';

  export default {
    name: 'anniversariesList',
    props: ['anniversaries'],
    components: {
      anniversaryItem,
    },
  };
</script>

<style lang="scss" scoped>
  .anniversaries-list {

    text-align: center;

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      margin: 0 10px;
    }
  }
</style>
