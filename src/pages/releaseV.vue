<template>
  <div class="releaseV">
    <div>{{msg}}</div>
    <div>{{status}}</div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'releaseV',
    data () {
      return {
        msg:'我是发布'
      }
    },
    methods:{

    },
    //监听vuex登录状态,computed监听数据变化  类似watch  又与之不同
    computed: {
      status () {
        return this.$store.state.user.loginStatus
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
