<template>
  <div class="footerV">
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" shift>
        <mu-bottom-nav-item to="/" value="home" title="首页" icon="home"/>
        <mu-bottom-nav-item to="/release" value="release" title="发布" icon="edit"/>
        <mu-bottom-nav-item to="/message" value="message" title="消息" icon="message"/>
        <mu-bottom-nav-item to="/my" value="my" title="我的" icon="person"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>
<script>
  export default {
    name: 'footerV',
    data () {
      return {
        bottomNav: '',//默认active栏
        bottomNavColor: ''
      }
    },
    created () {
      if (this.$route.matched.some(record => record.meta.tabAuth)) {
        this.bottomNav = this.$route.matched[0].name;
      }
    },
    watch:{
      '$route' (to, from) {
        if (to.matched.some(record => record.meta.tabAuth)) {
          this.bottomNav = to.matched[0].name;//用路由来监听tab【推荐】,matched[0]为一级路由字段
        }
      }
    }
  }
</script>
<style>
</style>
