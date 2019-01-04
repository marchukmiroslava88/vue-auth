import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VeeValidate from 'vee-validate'
import fb from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

Vue.use(Vuetify)
Vue.use(VeeValidate)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    fb.initializeApp({
      apiKey: 'AIzaSyB5ctBJ5KydHRZKZ6xrSmETB46QSaWJZBM',
      authDomain: 'vue-spa-ed108.firebaseapp.com',
      databaseURL: 'https://vue-spa-ed108.firebaseio.com',
      projectId: 'vue-spa-ed108',
      storageBucket: 'vue-spa-ed108.appspot.com',
      messagingSenderId: '379790591582'
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
        localStorage.isUserLoggedIn = true
        localStorage.email = user.email
      }
    })
  }
})
