<template>
  <div class="homeNav">
    <mu-tabs :value="activeTab" class="tab">
      <mu-tab value="all" to="/home/all" title="全部"/>
      <mu-tab value="good" to="/home/good" title="精华"/>
      <mu-tab value="weex" to="/home/weex" title="weex"/>
      <mu-tab value="share" to="/home/share" title="分享"/>
      <mu-tab value="ask" to="/home/ask" title="问答"/>
      <mu-tab value="job" to="/home/job" title="招聘"/>
    </mu-tabs>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'homeNav',
    data () {
      return {
        activeTab: 'all',
        tagRoute:'/home/all'
      }
    },
    methods: {
      ...mapActions({ getListData: 'getListData'}),
      getList(){
        let $that = this;
        let params = {
          page:1,
          tab: $that.activeTab,
          limit:10
        };
        this.getListData(params);
      }
    },
    created:function () {
      if (this.$route.matched.some(record => record.meta.listAuth)) {
        this.activeTab = this.$route.params[0];//初始化路由参数用于同步请求tab
        this.$router.push({ path: `${this.tagRoute}` })
      }
      this.getList();
      this.vStatus.$on('startRefresh',function () { //接收list组件的下拉刷新事件并回调
        this.getList();
      }.bind(this))
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        if (to.matched.some(record => record.meta.listAuth)) {
          this.activeTab = to.params[0];
          this.getList();
          this.tagRoute = to.path;//存储离开的路由
        }
        //进入home时，回到离开时的路由
        if(to.name === 'home'){
          this.$router.push({ path: `${this.tagRoute}` })
        }
      }
    }
  }
</script>

<style>
</style>
