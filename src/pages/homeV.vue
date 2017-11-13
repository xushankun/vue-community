<template>
  <div class="homeV">
    <homeNav></homeNav>
    <div>{{msg}}</div>
    <div>{{isLogin}}</div>
    <listV></listV>
  </div>
</template>

<script>
  import homeNav from './homeNav.vue'
  import listV from './list.vue'

  export default {
    name: 'homeV',
    data () {
      return {
        msg:'我是首页'
      }
    },
    components:{ homeNav , listV},
    methods:{

    },
    created:function () {

    },
    computed: {
      isLogin () {
        return this.$store.state.user.loginStatus
      }
    }
  }
</script>

<style>

</style>
