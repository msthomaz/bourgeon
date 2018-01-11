<template>
  <div>
    <p>
      Welcome to your Bourgeon app!
    </p>
    <p>
      <router-link to="/hello/bourgeon">Hello</router-link>
    </p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        message: 'hello!'
      }
    },
    created () {
      
    },

    computed: {

    },
    methods: {

    },
    watch: {
      
    }
  }
</script>