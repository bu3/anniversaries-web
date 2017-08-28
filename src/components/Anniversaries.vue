<template>
    <div class="anniversaries">
        <h2>Anniversaries</h2>
        <ul>
            <li v-for="anniversary in anniversaries">
                {{ anniversary.name}} {{ anniversary.anniversaryDate }}
            </li>
        </ul>
    </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'hello',
    data() {
      return {
        anniversaries: [],
      };
    },
    created() {
      Vue.http.get('https://anniversaries-api.cfapps.io/anniversaries').then((response) => {
        this.anniversaries = response.body;
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
