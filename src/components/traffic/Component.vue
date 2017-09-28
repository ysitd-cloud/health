<template>
  <v-layout column>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="headline">Network Traffic</h3>
          </v-card-title>

          <v-card-text class="pt-0">
            <v-progress-linear indeterminate class="primary--text" v-if="fetching"></v-progress-linear>
            <v-layout row v-if="uptime !== null">
              <v-flex xs12>Uptime: <v-chip>{{ uptime | duration }} hrs</v-chip></v-flex>
            </v-layout>
            <v-layout row v-if="response !== null">
              <v-flex xs12>Average Response Time: <v-chip>{{ response | ms }} ms</v-chip></v-flex>
            </v-layout>
            <v-layout row v-if="statusCode !== null">
              <pie-chart
                title="Status Code"
                title-position="top"
                :datasets="datasets"
                :labels="labels"
                :colors="colors"
                height="40vh"
                width="20vw"
              ></pie-chart>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-layout>
</template>

<script src="./script.js"></script>
