
<template>
  <v-app>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-title>Betalingen dashboard</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { Component, Prop, Vue } from 'vue-property-decorator'

export default class App extends Vue {}
</script>

<style lang="scss">

</style>
