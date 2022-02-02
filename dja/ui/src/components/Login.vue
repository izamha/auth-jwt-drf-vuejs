<template>
    <div class="login">
        <form @submit.prevent="onSubmit">
            <input type="text" name="username" v-model="username" required placeholder="Username"><br><br>
            <input type="email" name="email" v-model="email" required placeholder="Email"><br><br>
            <input type="password" name="password" v-model="password" required placeholder="Password"><br><br>
            <input type="submit" value="Submit">
        </form>
    </div>
</template>
<script>

import axios from 'axios'

    export default {
        name: 'Login',
        components: {

        },

        data() {
            return {
                username: '',
                email: '',
                password: '',
                access_token: null,
                refresh_token: null,
            }
        },

        methods: {
            onSubmit() {
                
                axios.defaults.headers.common['Authorization'] = ''
                
                // Make sure the current access token is deleted
                this.$cookie.delete('access')
                this.$cookie.delete('refresh')
        

                const formData = {
                    email: this.email,
                    username: this.username,
                    password: this.password
                }

                axios.post('api/token/', formData).then(response => {

                    this.access_token = response.data.access
                    this.refresh_token = response.data.refresh

                    console.log('LOGGED IN', response.data)

                    this.$store.commit('setAccess', this.access_token)
                    this.$store.commit('setRefresh', this.refresh_token)

                    axios.defaults.headers.common['Authorization'] = "Bearer " + this.access_token

                    this.$cookie.set("access", this.access_token)
                    this.$cookie.set("refresh", this.refresh_token)

                    this.$router.push("/")
                    

                }).catch(err => {
                    console.log('Something went terribly wrong..:)', err);
                })
            }
        },
    }
</script>