<template>
  <div>
    <Header />
    <div class="container-fluid">
      <div class="row">
        <Sidebar />
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <nuxt />
        </main>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue'

export default Vue.extend({
  components: {
    Header,
    Sidebar
  }
})
</script>
