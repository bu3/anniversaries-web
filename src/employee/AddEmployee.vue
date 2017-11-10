<template>
  <div id="addEmployee">
    <h1>Add new employee</h1>

    <md-input-container>
      <label>Name</label>
      <md-input v-model="employee.name" class="name" required="true"></md-input>
    </md-input-container>

    <md-input-container>
      <label>Hire Date</label>
      <md-input v-model="employee.hireDate" class="hiringDate" placeholder="YYYY-MM-DD" required="true"></md-input>
    </md-input-container>

    <md-input-container>
      <label>Picture URL</label>
      <md-input v-model="employee.photoURL" class="picture"></md-input>
    </md-input-container>

    <md-button class="md-raised md-primary saveBtn" v-on:click="save">Save</md-button>
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
        console.log(this.employee);
        Vue.http.post(`${Vue.config.apiServer}/employees`, this.employee).then(() => {
          this.$router.push('/');
        });
      },
    },
  };
</script>

<style scoped>

</style>
