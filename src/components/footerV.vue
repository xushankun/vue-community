<template>
  <div class="footerV">
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
        <mu-bottom-nav-item to="/home" value="home" title="首页" icon="home"/>
        <mu-bottom-nav-item to="/release" value="release" title="发布" icon="edit"/>
        <mu-bottom-nav-item to="/message" value="message" title="消息" icon="message"/>
        <mu-bottom-nav-item to="/my" value="my" title="我的" icon="person"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'footerV',
    data () {
      return {
        bottomNav: '',//默认active栏
        bottomNavColor: ''
      }
    },
    created:function () {
      this.handleChange(this.cTab);//初始化tab,this.cTab来自vuex footer初始化的状态
    },
    methods: {
      ...mapActions({ currTab: 'currTab' }),

      //footer-Nav
      handleChange (val) {
        localStorage.setItem('currentTab',val);
        this.currTab(val);//将当前tab存储到vuex
        this.bottomNav = val;//并切换tab
      }
    },
    computed: {
      cTab () {
        return this.$store.state.layout.currentTab
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
