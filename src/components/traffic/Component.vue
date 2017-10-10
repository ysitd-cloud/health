<template>
  <v-card>
    <v-card-title>
      <h3 class="headline">Network Traffic</h3>
    </v-card-title>

    <v-card-text class="pt-0">
      <v-btn
        absolute
        dark
        fab
        top
        right
        class="primary"
        :disabled="fetching"
        :loading="fetching"
        @click="refreshData"
      >
        <v-icon>refresh</v-icon>
      </v-btn>
      <v-progress-linear
        indeterminate
        class="primary--text"
        v-if="!initial"
      />
      <v-layout row v-if="uptime !== null">
        <v-flex xs12>Uptime: <v-chip>{{ uptime | duration }} hrs</v-chip></v-flex>
      </v-layout>
      <v-layout row v-if="response !== null">
        <v-flex xs12>Average Response Time: <v-chip>{{ response | ms }} ms</v-chip></v-flex>
      </v-layout>
      <v-layout row v-if="statusCode !== null">
        <v-flex xs12>
          <pie-chart
            title="Status Code"
            title-position="top"
            :datasets="datasets"
            :labels="labels"
            :colors="colors"
            height="auto"
            width="100%"
          ></pie-chart>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="stylus">
  .btn.btn--absolute.btn--floating.btn--top
    top 16px
</style>

<script src="./script.js"></script>
