<template>
    <div class="login">
        <form @submit.prevent="login">
            <input type="text" name="username" v-model="username" required placeholder="Username"><br><br>
            <input type="email" name="email" v-model="email" required placeholder="Email"><br><br>
            <input type="password" name="password" v-model="password" required placeholder="Password"><br><br>
            <input type="submit" value="Submit"> | <router-link to="/register">Register</router-link>
        </form>
    </div>
</template>
<script>

// import axios from 'axios'

    export default {
        name: 'Login',
        components: {

        },

        data() {
            return {
                username: '',
                email: '',
                password: '',
            }
        },

        methods: {
           login() {
               this.$store.dispatch('userLogin', {
                   username: this.username,
                   email: this.email,
                   password: this.password
               }).then(() => {
                   this.$router.push("/")
               }).catch(err => {
                   console.log(err);
               })
           }
        },
    }
</script>