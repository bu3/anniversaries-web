<template>
  <div id="addEmployee">
    <h1>Add new employee</h1>
    <input class="name" v-model="employee.name"/>
    <input class="hiringDate" v-model="employee.hireDate"/>
    <button class="saveBtn" v-on:click="save">Save</button>
  </div>
</template>

<script>
  import Vue from 'vue';

  export default {
    name: 'add-employee',
    data() {
      return {
        employee: {},
      };
    },
    methods: {
      save() {
        Vue.http.post(`${Vue.config.apiServer}/employees`, this.employee).then(() => {
          this.$router.push('/');
        });
      },
    },
  };
</script>

<style scoped>

</style>
