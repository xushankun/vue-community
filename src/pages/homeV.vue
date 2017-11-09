<template>
  <div class="homeV">
    <div>{{msg}}</div>
    <div>{{isLogin}}</div>
  </div>
</template>

<script>
  export default {
    name: 'homeV',
    data () {
      return {
        msg:'我是首页'
      }
    },
    methods:{

    },
    computed: {
      isLogin () {
        return this.$store.state.user.loginStatus
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
