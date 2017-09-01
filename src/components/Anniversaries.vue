<template>
    <div class="anniversaries">
        <iframe src="https://giphy.com/embed/g9582DNuQppxC" width="480" height="270" frameBorder="0" class="giphy-embed"
                allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/hero0fwar-karmawhore-rhyming-g9582DNuQppxC">via GIPHY</a></p>
        <h2>Anniversaries</h2>
        <ul>
            <li v-for="anniversary in anniversaries">
                {{ anniversary.name}} - {{ anniversary.anniversaryDate }}
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
      Vue.http.get(`${Vue.config.apiServer}/anniversaries`).then((response) => {
        this.anniversaries = response.body;
      });
    },
  };
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
