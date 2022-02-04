import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// import { createStore } from "vuex";
// import cookie from "vue-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    access: '',
    refresh: '',
    isAuthenticated: false
  },
  mutations: {
    initStore(state) {
      if (localStorage.getItem('access')) {
        state.access = localStorage.getItem('access')
        state.isAuthenticated = true
      } else {
        state.access = ''
        state.isAuthenticated = false

      }
    },
    updateCookie(state, { access, refresh }) {
      state.access = access;
      state.refresh = refresh;
    },

    deleteCookie(state) {
      state.access = '';
      state.isAuthenticated = false
      localStorage.setItem('access', '')
    },
  },
  getters: {
    isAuthenticated(state) {
      return state.access != '';
    },
  },

  actions: {
    userLogout(context) {
     if (context.getters.isAuthenticated) {
       context.commit("deleteCookie");
     }
    },
    userLogin(context, formData) {
      return new Promise((resolve, reject) => {
        axios
          .post("/api/token/", {
            username: formData.username,
            email: formData.email,
            password: formData.password,
          })
          .then((response) => {
            context.commit("updateCookie", {
              access: response.data.access,
              refresh: response.data.refresh,
            });
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access
            localStorage.setItem('access', response.data.access)
            resolve();
          })
          .catch((err) => {
            reject(err);
          });
      });
    },
  },

  modules: {},
});
