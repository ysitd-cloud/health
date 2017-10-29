<template>
  <tr>
    <td>{{ name }}</td>
    <td>
      <v-icon :class="statusClass">fiber_manual_record</v-icon>
      {{ health }} / {{ total }} ({{ status }})
    </td>
    <td>
      <v-btn
        @click="fetchData"
        icon
        flat
        color="primary"
        :disabled="fetching"
        :loading="fetching"
      >
        <v-icon>replay</v-icon>
      </v-btn>
    </td>
  </tr>
</template>

<style scoped lang="stylus" src="./service.styl"></style>

<script src="./service.js"></script>
