<template>
  <v-card>
    <v-card-title>
      <h3 class="headline">CDN</h3>
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
      <v-container fluid grid-list-md v-if="requests !== null">
        <v-layout row wrap>
          <v-flex xs12 md6>
            <pie-chart
              title="Cache Request"
              title-position="top"
              :datasets="cacheData"
              :labels="['Cached', 'Uncached']"
              :colors="vsColor"
              height="auto"
              width="100%"
            ></pie-chart>
          </v-flex>
          <v-flex xs12 md6>
            <pie-chart
              title="SSL Request"
              title-position="top"
              :datasets="sslData"
              :labels="['Encrypted', 'Unencrypted']"
              :colors="vsColor"
              height="auto"
              width="100%"
            ></pie-chart>
          </v-flex>
          <v-flex xs12 md6>
            <pie-chart
              title="Content Type"
              title-position="top"
              :datasets="contentTypeData"
              :labels="contentTypeLabels"
              :colors="colors"
              height="auto"
              width="100%"
            ></pie-chart>
          </v-flex>
          <v-flex xs12 md6>
            <pie-chart
              title="Country"
              title-position="top"
              :datasets="countryData"
              :labels="countryLabels"
              :colors="colors"
              height="auto"
              width="100%"
            ></pie-chart>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<style scoped lang="stylus">
  .btn.btn--absolute.btn--floating.btn--top
    top 16px
    z-index 1
</style>

<script src="./script.js"></script>
