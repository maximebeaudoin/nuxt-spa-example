<template>
  <v-app dark>
    <Navigation />
    <Header />
    <v-content>
      <Nuxt />
    </v-content>
  </v-app>
</template>

<style scoped>
</style>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Navigation from '~/components/Navigation.vue'

export default Vue.extend({
  components: {
    Header,
    Navigation
  }
})
</script>
