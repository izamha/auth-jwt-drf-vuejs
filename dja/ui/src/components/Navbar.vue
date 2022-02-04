<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <span v-if="access != ''">
      <router-link :to="{ name: 'Logout' }">Logout</router-link>
    </span>
    <span v-else>
      <router-link to="/register">Register</router-link> |
      <router-link to="/login">Login</router-link>
    </span>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Navbar",

  computed: mapState(["access"]),
  
};
</script>
<style>
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
a:hover {
  cursor: pointer;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
