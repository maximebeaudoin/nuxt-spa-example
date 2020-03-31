<template>
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
        { icon: 'mdi-account-multiple', text: 'Users', link: 'users' }
      ]
    }
  }
}
</script>
