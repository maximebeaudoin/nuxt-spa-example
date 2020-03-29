<template>
  <v-app dark>
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
    <v-app-bar color="primary" dense fixed clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Nuxt SPA Example</span>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <Nuxt />
    </v-content>
  </v-app>
</template>

<style scoped>
</style>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { icon: 'mdi-home', text: 'Home', link: 'index' },
        { icon: 'mdi-fire', text: 'Users', link: 'users' }
      ]
    }
  },
  head () {
    return {
      title: 'Nuxt SPA Example'
    }
  }
}
</script>
