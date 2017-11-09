<template>
  <div class="messageV">
    <!--<div>{{msg}}</div>-->
    <!--<div>{{isLogin}}</div>-->
    <Loading></Loading>
    <div v-if="isLogin">
      <mu-list>
        <mu-sub-header>主页</mu-sub-header>
        <mu-list-item title="" describeText="无消息"></mu-list-item>
      </mu-list>
      <mu-divider/>
      <mu-list>
        <mu-sub-header>过往消息</mu-sub-header>
        <mu-list-item title="" describeText="无消息"></mu-list-item>
      </mu-list>
    </div>
    <div class="sign-block" v-else>
      <!--<mu-raised-button label="Go Sign In ?" @click="openForm(true)"/>-->
    </div>
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
  .sign-block{
    margin: 15px 0 0 15px;
  }
</style>
