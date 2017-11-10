<template>
    <div class="anniversaries-list">
        <h2>Anniversaries</h2>
        <ul>
            <li class="anniversary" v-for="anniversary in anniversaries">
                <img :src="anniversary.photoURL" v-if="anniversary.photoURL"/>
                {{ anniversary.name}} - {{ anniversary.anniversaryDate }}
            </li>
        </ul>
    </div>
</template>

<script>
  export default {
    name: 'anniversariesList',
    props: ['anniversaries'],
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

        img {
            width: 48px;
            height: 48px;
            vertical-align: middle;
        }
    }
</style>
