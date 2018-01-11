<template>
  <div>
    <p>Login</p>
    <router-link to="/hello/bourgeon">Hello</router-link>

    <form action="javascript:;">
      <input type="text" v-model="user.email" placeholder="email">
      <input type="password" v-model="user.password" placeholder="password">
      <button @click="login">Login</button>
    </form>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user: {
          email: '',
          password: ''
        },
      }
    },
    created () {

    },

    computed: {

    },
    methods: {
      login: function() {
        this.$auth.login({
          body: {email: 'test@example.com', password: 'secret'},
          rememberMe: true 
        });
      }
    },
    watch: {
      
    }
  }
</script>