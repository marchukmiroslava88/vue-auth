export default function (to, from, next) {
  if (JSON.parse(localStorage.getItem('isUserLoggedIn'))) {
    next()
  } else {
    next('/login?loginError=true')
  }
}
