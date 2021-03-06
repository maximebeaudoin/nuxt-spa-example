<template>
  <v-data-table
    :headers="headers"
    :items="users"
    :search="search"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        />
        <v-spacer />
        <CreateUserForm @userWasCreated="onUserWasCreated" />
        <EditUserForm :dialog="editUserDialog" :user="userToEdit" @userWasUpdated="onUserWasUpdated" @dialogWasClosed="onEditUserDialogClosed" />
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
import EditUserForm from '~/components/users/EditUserForm.vue'
import { User } from '~/types'

export default Vue.extend({
  components: {
    CreateUserForm,
    EditUserForm
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
      search: '',
      editUserDialog: false,
      editUserIndex: -1,
      userToEdit: {
        name: '',
        email: '',
        job_title: ''
      } as User
    }
  },
  mounted () {
    this.$store.commit('updateTitle', 'Users')
  },
  methods: {

    editUser (user: User) {
      this.editUserIndex = this.users.indexOf(user) // @todo find a better way to do this
      this.editUserDialog = true
      this.userToEdit = Object.assign({}, user)
    },

    async deleteUser (user: User) {
      if (confirm('Are you sure you want to delete this user?')) {
        try {
          // Send the request to create the user to the api
          await this.$axios.$delete('users/' + user.id)

          this.$emit('userWasDeleted', user)

          this.users.splice(this.users.indexOf(user), 1)

          // Add the user add the beginning of the users table list
          // this.users.unshift(this.userData)
        } catch (error) {
          // todo do something
        }
      }
    },

    onUserWasCreated (user: User) {
      this.users.unshift(user)
    },

    onUserWasUpdated (user: User) {
      Object.assign(this.users[this.editUserIndex], user)
      this.resetEditUser()
    },

    onEditUserDialogClosed () {
      this.editUserDialog = false
      this.resetEditUser()
    },

    resetEditUser () {
      this.editUserIndex = -1
      this.userToEdit = {
        name: '',
        email: '',
        job_title: ''
      }
    }
  }
})
</script>
