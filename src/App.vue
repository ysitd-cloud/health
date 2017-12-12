<template>
  <v-app light>
    <v-toolbar fixed dark class="primary" app>
      <v-toolbar-title>YSITD Cloud Health</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid grid-list-md>
        <v-layout row>
          <v-flex xs12>
            <section-header>Network</section-header>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 md4>
            <error-boundary>
              <traffic />
            </error-boundary>
          </v-flex>
          <v-flex xs12 md8>
            <error-boundary>
              <cdn />
            </error-boundary>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <section-header>Components</section-header>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <error-boundary>
              <components-card />
            </error-boundary>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer fixed app>
      <span>&copy; 2017 YSITD Cloud</span>
    </v-footer>
  </v-app>
</template>

<style src="../node_modules/vuetify/dist/vuetify.min.css"></style>

<script>
  import SectionHeader from './components/SectionHeader.vue';
  import Traffic from './components/network/traffic/Component.vue';
  import Cdn from './components/network/cdn/Component.vue';
  import ErrorBoundary from './components/ErrorBoundary';
  import ComponentsCard from './components/components/Card.vue';

  export default {
    components: {
      Traffic,
      SectionHeader,
      Cdn,
      ErrorBoundary,
      ComponentsCard,
    },
  };
</script>
