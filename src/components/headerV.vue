<template>
  <div class="headerV">
    <mu-appbar :title="barTit">
      <mu-icon-button icon="menu" slot="left" @click="openForm(true)"/>
      <mu-icon-menu icon="more_vert" slot="right">
        <mu-menu-item title="设置"/>
        <mu-menu-item title="帮助"/>
        <mu-menu-item v-if="loginStatus" @click="signOutF" title="退出"/>
      </mu-icon-menu>
    </mu-appbar>
  </div>
</template>
<script>
  import {  mapGetters, mapActions } from 'vuex'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        barTit:'Vue.js中文社区'
      }
    },
    methods: {
      ...mapActions(['signOut' , 'openLoginForm']),
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
      ...mapGetters(['loginStatus'])
    }
  }
</script>
<style>

</style>
