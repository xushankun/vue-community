<template>
  <div class="messageV">
    <div>{{msg}}</div>
    <div>{{isLogin}}</div>
  </div>
</template>

<script>
  export default {
    name: 'messageV',
    data () {
      return {
        msg:'我是消息'
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
