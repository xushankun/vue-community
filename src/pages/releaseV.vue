<template>
    <div class="release-V">
      <div>{{msg}}</div>
      <div>{{isLogin}}</div>
    </div>
</template>

<script>
  export default {
    name: 'release-V',
    data () {
      return {
        msg:'我是发布'
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
<style scoped>

</style>
