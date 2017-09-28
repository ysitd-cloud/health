<template>
  <v-app light>
    <v-toolbar fixed dark class="primary">
      <v-toolbar-title>YSITD Cloud Health</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-container fluid>
        <traffic></traffic>
      </v-container>
    </main>
    <v-footer fixed>
      <span>&copy; 2017 YSITD Cloud</span>
    </v-footer>
  </v-app>
</template>

<style src="./assets/main.styl" lang="stylus"></style>

<script>
  import Traffic from './components/traffic/Component.vue';

  export default {
    components: {
      Traffic,
    },
  };
</script>
