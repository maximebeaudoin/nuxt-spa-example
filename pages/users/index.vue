<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Users</v-toolbar-title>
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
        <v-spacer />
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">
              Create User
            </v-btn>
          </template>
          <CreateUserForm @onSaveUser="onSaveUser" />
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editUser(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteUser(item)"
      >
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue'
import CreateUserForm from '~/components/users/CreateUserForm.vue'
import { User } from '~/types'

export default Vue.extend({
  components: {
    CreateUserForm
  },

  async asyncData ({ app }) {
    // Get all users from the API
    const response = await app.$axios.$get('users')

    return {
      headers: [
        { text: 'Name', align: 'start', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Job title', value: 'job_title' },
        { text: 'Actions', value: 'actions', sortable: false }
      ],
      users: response.data
    }
  },
  data () {
    return {
      users: [] as Array<any>,
      search: ''
    }
  },

  computed: {
    dialog: {
      // getter
      get () : boolean {
        return this.$store.state.dialog.open
      },
      // setter
      set (dialog: boolean) {
        this.$store.commit('dialog/update', dialog)
      }
    }
  },
  methods: {

    editUser (user: User) {
      console.log('todo edit user' + user)
    },

    deleteUser (user: User) {
      const index = this.users.indexOf(user)
      confirm('Are you sure you want to delete this user?') && this.users.splice(index, 1)
    },

    onSaveUser (user: User) {
      this.users.unshift(user)
    }
  }
})
</script>
