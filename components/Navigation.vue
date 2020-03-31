<template>
  <div>
    <v-app-bar color="primary" dense fixed clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Nuxt SPA Example</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed clipped app>
      <v-list>
        <v-list-item v-for="item in items" :key="item.text" link :to="{ name: item.link}" nuxt>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              {{ item.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style scoped>
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      drawer: true
    }
  },
  computed: {
    items () {
      return this.$store.state.navigation.items
    }
  }
})
</script>
