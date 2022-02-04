<template>
  <div class="register">
    <form @submit.prevent="register">
      <input
        type="text"
        name="username"
        v-model="username"
        placeholder="Username"
        required
      /><br /><br />
      <input
        type="email"
        name="email"
        v-model="email"
        placeholder="Email"
        required
      /><br /><br />
      <input
        type="password"
        name="password"
        v-model="password"
        placeholder="Password"
        required
      /><br /><br />
      <input type="submit" value="Register" /> | <router-link to="/login">Login</router-link>
    </form>
  </div>
</template>
<script>

import axios from 'axios'

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      const formData = {
        username: this.username,
        email: this.email,
        password: this.password,
      };
      axios
        .post("api/register/", formData)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
