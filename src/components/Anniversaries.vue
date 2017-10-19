<template>
    <div class="anniversaries">
        <congratulations></congratulations>
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
        <div class="anniversaries-list">
            <h2>Anniversaries</h2>
            <ul>
                <li class="anniversary" v-for="anniversary in anniversaries">
                  <img :src="anniversary.photoURL" v-if="anniversary.photoURL" />
                    {{ anniversary.name}} - {{ anniversary.anniversaryDate }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
  import Vue from 'vue';
  import vueSlider from 'vue-slider-component';
  import congratulations from '@/components/Congratulations';

  export default {
    name: 'anniversaries',
    components: {
      vueSlider,
      congratulations,
    },
    data() {
      return {
        anniversaries: [],
        months: 6,
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

    .anniversaries img {
      width: 48px;
      height: 48px;
      vertical-align: middle;
    }
</style>
