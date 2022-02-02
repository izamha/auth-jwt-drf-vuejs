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

axios.defaults.baseURL = "http://localhost:8000"

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
