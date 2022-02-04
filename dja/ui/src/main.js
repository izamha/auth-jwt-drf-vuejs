import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'

Vue.config.productionTip = false

Vue.use(VueCookie)
Vue.use(VueAxios, axios)

// axios.defaults.withCredentials = true
axios.defaults.baseURL = "http://localhost:8000"

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresLogin)) {
//     if (!store.getters.isAuthenticated) {
//       next({ name: 'Login'})
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
