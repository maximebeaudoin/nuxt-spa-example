<template>
  <div>
    <div class="d-flex pa-2">
      <h1>
        Users
      </h1>
    </div>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Email
            </th>
            <th class="text-left">
              Job Title
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.job_title }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData ({ app }) {
    const response = await app.$axios.$get('users')
    return { users: response.data }
  }
})
</script>
