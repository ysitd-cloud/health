<template>
  <v-app light>
    <v-toolbar fixed dark class="primary" app>
      <v-toolbar-title>YSITD Cloud Health</v-toolbar-title>
    </v-toolbar>
    <main>
      <v-content>
        <v-container fluid grid-list-md>
          <v-layout row>
            <v-flex xs12>
              <section-header>Network</section-header>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 md4>
              <traffic />
            </v-flex>
            <v-flex xs12 md8>
              <cdn />
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </main>
    <v-footer fixed app>
      <span>&copy; 2017 YSITD Cloud</span>
    </v-footer>
  </v-app>
</template>

<style src="./assets/main.styl" lang="stylus"></style>

<script>
  import SectionHeader from './components/SectionHeader.vue';
  import Traffic from './components/network/traffic/Component.vue';
  import Cdn from './components/network/cdn/Component.vue';

  export default {
    components: {
      Traffic,
      SectionHeader,
      Cdn,
    },
  };
</script>
