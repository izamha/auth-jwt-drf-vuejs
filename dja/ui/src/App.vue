<template>
  <div id="app">
    <div id="nav">
      <navbar />
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

import axios from 'axios'
import Navbar from './components/Navbar.vue'

  export default {
    name: 'App',

    beforeCreate() {
      this.$store.commit('initStore')
      const access_token = this.$store.state.access

      if (access_token) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + access_token        
      } else {
        axios.defaults.headers.common['Authorization'] = ''
      }
    },

    components: {
      Navbar,
    },
  
    data() {
      return {}
    }
    
  }
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
