<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="blue-grey">
            <v-toolbar-title>Registration form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form autocomplete="off">
              <v-text-field
                      color="teal lighten-3"
                      prepend-icon="person"
                      v-validate="'required|email'"
                      v-model="email"
                      :error-messages="errors.collect('email')"
                      label="E-mail"
                      data-vv-name="email"
                      required
                      autocomplete="nope"
              ></v-text-field>
              <v-text-field
                      color="teal lighten-3"
                      type="password"
                      v-model="password"
                      label="Password"
                      v-validate="'required|alpha_num|min:6'"
                      data-vv-name="password"
                      :error-messages="errors.collect('password')"
                      ref="password"
                      prepend-icon="lock"
                      autocomplete="new-password"
              ></v-text-field>
              <v-text-field
                      color="teal lighten-3"
                      type="password"
                      v-model="match_password"
                      label="Match Password"
                      v-validate="'required|confirmed:password'"
                      :error-messages="errors.collect('match_password')"
                      data-vv-as="password"
                      data-vv-name="match_password"
                      prepend-icon="lock"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    dark
                    color="blue-grey"
                    @click="onSubmit"
                    :loading="loading"
            >Create account</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    $_veeValidate: {
      validator: 'new'
    },
    data () {
      return {
        email: '',
        password: '',
        match_password: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit: function () {
        this.$validator.validateAll().then(valid => {
          if (valid) {
            const user = {
              email: this.email,
              password: this.password
            }
            this.$store.dispatch('registerUser', user)
                .then(() => {
                  this.$router.push('/profile')
                })
            localStorage.email = this.email
          }
        })
      }
    }
  }
</script>