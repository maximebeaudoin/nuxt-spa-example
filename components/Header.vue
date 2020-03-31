<template>
  <v-app-bar color="primary" dense fixed clipped-left app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-toolbar-title class="mr-5 align-center">
      <span class="title">{{ title }}</span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<style scoped>
</style>

<script>
export default {
  head () {
    return {
      title: 'Nuxt SPA Example'
    }
  }
}
</script>
