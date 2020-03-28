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
            <span data-feather="file" />
            Users
          </nuxt-link>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="shopping-cart" />
            Products
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="users" />
            Customers
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="bar-chart-2" />
            Reports
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <span data-feather="layers" />
            Integrations
          </a>
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
    // `this` points to the vm instance
    feather.replace()
  }
})
</script>
