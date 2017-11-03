<template>
    <div class="app-viewport" id="app">
        <md-sidenav class="md-left md-fixed" ref="sidebar">
            <md-list>
                <md-list-item @click="goTo('/')" class="menu-home">
                    Home
                </md-list-item>
                <md-list-item @click="goTo('/addEmployee')" class="menu-add-employee">
                    Add Employee
                </md-list-item>
            </md-list>
        </md-sidenav>

        <md-whiteframe md-elevation="3" class="main-toolbar">
            <md-toolbar class="md-small">
                <div class="md-toolbar-container">
                    <md-button class="md-icon-button" @click="$refs.sidebar.toggle()">
                        <md-icon>menu</md-icon>
                    </md-button>

                    <span style="flex: 1"></span>

                    <md-button class="md-icon-button">
                        <md-icon>search</md-icon>
                    </md-button>

                    <md-button class="md-icon-button">
                        <md-icon>view_module</md-icon>
                    </md-button>
                </div>
            </md-toolbar>
        </md-whiteframe>

        <main class="main-content">
            <router-view></router-view>
        </main>

    </div>
</template>

<script>
  import Toolbar from '@/components/Toolbar';

  export default {
    name: 'app',
    components: {
      Toolbar,
    },
    methods: {
      goTo(link) {
        this.$router.push(link);
        this.$refs.sidebar.toggle();
      },
    },
  };
</script>

<style lang="scss">

    @import "assets/stylesheets/app.scss";


</style>
