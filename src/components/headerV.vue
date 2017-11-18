<template>
  <div class="headerV">
    <mu-appbar :title="barTit">
      <mu-icon-button icon="menu" slot="left" @click="openForm(true)"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="设置"/>
        <mu-menu-item title="帮助"/>
        <mu-menu-item v-if="isLogin" @click="signOutF" title="退出"/>
      </mu-icon-menu>
    </mu-appbar>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        barTit:'Vue.js中文社区'
      }
    },
    methods: {
      ...mapActions({ signOut: 'signOut' ,openLoginForm: 'openLoginForm'}),
      //退出
      signOutF:function () {
        this.signOut();
        this.vStatus.$emit('signOut','已退出');
      },
      //打开loginForm
      openForm (status) {
        this.openLoginForm(status);
      }
    },
    computed: {
      isLogin () {
        return this.$store.state.user.loginStatus
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
