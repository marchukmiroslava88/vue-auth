<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="blue-grey">
            <v-toolbar-title>Login form</v-toolbar-title>
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
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                    dark
                    color="blue-grey"
                    @click="onSubmit"
                    :loading="loading"
            >Login</v-btn>
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
        password: ''
      }
    },
    computed: {
      loading () {
        return this.$store.getters.loading
      }
    },
    methods: {
      onSubmit () {
        this.$validator.validateAll().then(valid => {
          if (valid) {
            const user = {
              email: this.email,
              password: this.password
            }
            this.$store.dispatch('loginUser', user)
                .then(() => {
                  console.log()
                  this.$router.push('/profile')
                })
            localStorage.email = this.email
          }
        })
      }
    },
    created () {
      if (this.$route.query['loginError']) {
        this.$store.dispatch('setError', 'Please log in to access this page.')
      }
    }
  }
</script>