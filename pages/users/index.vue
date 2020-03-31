<template>
  <div>
    <v-card>
      <v-card-title>
        Users
        <v-spacer />
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
          class="mb-6"
        />
        <v-spacer />
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="primary" dark class="mb-2" v-on="on">
              Create User
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Create User</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="editedUser.name" label="Name" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="editedUser.email" label="Email" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field v-model="editedUser.jobTitle" label="Job Title" />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-text-field
                      v-model="editedUser.password"
                      :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="passwordShow ? 'text' : 'password'"
                      label="Password"
                      hint="At least 8 characters"
                      counter
                      @click:append="passwordShow = !passwordShow"
                    />
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer />
              <v-btn color="blue darken-1" text @click="dialog = false">
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="save">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="users"
        :search="search"
      />
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface User {
  name: string
  email: string,
  jobTitle: string,
  password: string
}

export default Vue.extend({
  async asyncData ({ app }) {
    const response = await app.$axios.$get('users')

    // @todo add form validation

    return {
      headers: [
        { text: 'Name', align: 'start', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Job title', value: 'job_title' }
      ],
      users: response.data
    }
  },
  data () {
    return {
      passwordShow: false,
      dialog: false,
      search: '',
      editedUser: {
        name: '',
        email: '',
        jobTitle: '',
        password: ''
      } as User

    }
  },
  methods: {
    save () {
      console.log(this.editedUser)
      this.dialog = false

      /** const response = await this.$axios.$post('users', {
        name: this.editedUser.name,
        email: this.editedUser.email,
        job_title: this.editedUser.jobTitle,
        password: this.editedUser.password

      })**/
    }
  }
})
</script>
