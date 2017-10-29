<template>
  <v-card>
    <v-card-text class="pt-0">
      <table>
        <thead>
          <tr>
            <th>Component</th>
            <th>Status</th>
            <th>Refresh</th>
          </tr>
        </thead>
        <tbody>
          <service v-for="(name, service) in services" :service="service" :name="name" :key="name" />
        </tbody>
      </table>
    </v-card-text>
  </v-card>
</template>

<style scoped src="./style.styl" lang="stylus"></style>

<script src="./script.js"></script>
