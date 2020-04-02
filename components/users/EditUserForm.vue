<template>
  <v-dialog v-model="dialogState" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline">Edit User</span>
      </v-card-title>

      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-alert v-if="errorMessage" type="error">
                  {{ errorMessage }}
                </v-alert>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="userData.name" label="Name" :rules="[rules.required]" required />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="userData.email" label="Email" :rules="[rules.required, rules.email]" required />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="userData.job_title" label="Job Title" :rules="[rules.required]" required />
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <v-spacer />
        <v-btn color="blue darken-1" text @click="close">
          Cancel
        </v-btn>
        <v-btn color="blue darken-1" text @click="save">
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import { User, Validator } from '~/types'

export default Vue.extend({
  props: {
    dialog: Boolean
  },
  data () {
    return {
      valid: true, // If the form is valid
      errorMessage: '', // Default dialog error message
      userData: {
        name: '',
        email: '',
        job_title: ''
      } as User,
      rules: {
        required: (value: string) => !!value || 'Required.',
        email: (value: string) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
        min: (value: string) => value.length >= 8 || 'Min 8 characters'
      }

    }
  },
  computed: {
    dialogState: {
      get (): boolean {
        return this.dialog
      },
      set (val: boolean) {
        if (!val) {
          this.close()
        }
      }
    }
  },
  methods: {

    close () {
      this.$emit('dialogWasClosed')
    },

    // Save the user
    async save () {
      // Define type for the form. We doing this because we want typescript to understand the validator.
      const form = this.$refs.form as Vue & Validator

      if (form.validate()) {
        try {
          // Send the request to create the user to the api
          await this.$axios.$patch('users/' + this.userData.id, {
            name: this.userData.name,
            email: this.userData.email,
            job_title: this.userData.job_title
          })

          this.$emit('userWasUpdated', this.userData)

          this.close()

          // Add the user add the beginning of the users table list
          // this.users.unshift(this.userData)
        } catch (error) {
          // If we have a form validation error from the pia
          if (error.response.status === 422) {
            this.valid = false

            const responseData = error.response.data.error

            // For simplicity we only handle email error
            if (responseData.message.email !== undefined) {
              this.errorMessage = responseData.message.email[0]
            } else {
              this.errorMessage = "Something's wrong with your form"
            }
          }
        }
      }
    }
  }
})
</script>
