<template>
    <div class="anniversaries">
        <div class="months">
            Months:
            <div>
                <md-radio v-model="months" id="my-test4" name="my-test-group2" md-value="0" class="md-primary">All</md-radio>
                <md-radio v-model="months" id="my-test5" name="my-test-group2" md-value="3" class="md-primary">Next 3 months</md-radio>
                <md-radio v-model="months" id="my-test6" name="my-test-group2" md-value="6" class="md-primary">Next 6 months</md-radio>
                <md-radio v-model="months" id="my-test7" name="my-test-group2" md-value="12" class="md-primary">Next 12 months</md-radio>
            </div>
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

        <div style="display: none">
            <congratulations></congratulations>
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

    .anniversaries-list {

    }

    .anniversaries img {
      width: 48px;
      height: 48px;
      vertical-align: middle;
    }
</style>
