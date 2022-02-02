<template>
  <div class="home">
    <h2>Home Page</h2>
    <hr>
    <h1>User Details</h1>
    <div class="user-details">
      <h3>Username: {{ me }}</h3>
      <h3>Email: {{ email }}</h3>
    </div>
    <hr>
    <div class="logout">
      <button @click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
// import Login from '../components/Login.vue'

export default {
  name: 'Home',
  components: {
   // Login,
  },
  data () {
    return {
      email: null,
      me: null,
    }
  },

  mounted(){
    this.getUser()
  },

  methods: {
    getUser() {
      const access_token = this.$cookie.get('access')
      axios.get('api/user/', {
        headers: {'Authorization': 'Bearer ' + access_token}
      })
      .then(response => {
        this.me = response.data.username
        this.email = response.data.email

      }).catch(err => {
        this.$router.push('/login')
        console.log('Access Token: ', access_token)
        console.log(err)
      })
    },

    logout() {
      axios.defaults.headers.common['Authorization'] = ''
                
      // Make sure the current access token is deleted
      this.$cookie.delete('access')
      this.$cookie.delete('refresh')
      console.log('Logging out...');
      this.$router.push('/login')
    },
  },
}
</script>
