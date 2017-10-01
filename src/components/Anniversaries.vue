<template>
    <div class="anniversaries">
        <div>
            <router-link to="/addEmployee" tag="button" class="navButton">Add Employee</router-link>
        </div>

        <iframe src="https://giphy.com/embed/g9582DNuQppxC" width="480" height="270" frameBorder="0" class="giphy-embed"
                allowFullScreen></iframe>
        <p><a href="https://giphy.com/gifs/hero0fwar-karmawhore-rhyming-g9582DNuQppxC">via GIPHY</a></p>
        <div class="months">
            Months:
            <vue-slider
                    ref="slider"
                    v-model="months"
                    :width=280
                    :min="0"
                    :max="24"
                    :interval="6"
                    :height="8"
                    :piecewise="true"
            >
            </vue-slider>
        </div>
        <div class="anniversaries-list  ">
            <h2>Anniversaries</h2>
            <ul>
                <li v-for="anniversary in anniversaries">
                    {{ anniversary.name}} - {{ anniversary.anniversaryDate }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import vueSlider from 'vue-slider-component';

  export default {
    name: 'hello',
    components: {
      vueSlider,
    },
    data() {
      return {
        anniversaries: [],
        months: 3,
      };
    },
    created() {
      this.load();
    },
    methods: {
      load() {
        const url = this.months && this.months !== 0 ? `${Vue.config.apiServer}/anniversaries?months=${this.months}` : `${Vue.config.apiServer}/anniversaries`;
        Vue.http.get(url).then((response) => {
          this.anniversaries = response.body;
        });
      },
    },
    watch: {
      months() {
        this.load();
      },
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

    .months {
        float: left;
    }

    .anniversaries-list {
        width: 100%;
        float: left;
    }
</style>
