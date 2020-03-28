<template>
  <nav class="col-md-2 d-none d-md-block bg-light sidebar">
    <div class="sidebar-sticky">
      <ul class="nav flex-column">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link">
            <span data-feather="home" />
            Dashboard
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/users" class="nav-link">
            <span data-feather="users" />
            Users
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
const feather = require('feather-icons')

export default Vue.extend({
  mounted () {
    feather.replace()
  }
})
</script>
