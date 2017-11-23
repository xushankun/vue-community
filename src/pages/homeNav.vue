<template>
  <div class="homeNav">
    <mu-tabs :value="activeTab" class="tab" @change="handleTabChange">
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
  import {  mapGetters, mapActions } from 'vuex'
  export default {
    name: 'homeNav',
    data () {
      return {
        activeTab: 'all',
        page:1,
        limit:10
      }
    },
    methods: {
      ...mapActions(['getListData', 'getUpRefesh']),
      getList(upRef){
        let $that = this;
        let $option = {
          page:$that.page,
          tab: $that.activeTab,
          limit:$that.limit
        };
        this.getListData({$option,upRef});
      },
      handleTabChange(val){
        this.page = 1;
        console.log(val);
      }
    },
    created () {
      if (this.$route.matched.some(record => record.meta.listAuth)) {
        this.activeTab = this.$route.params[0];//初始化路由参数用于同步请求tab
      }
      this.getList();
      this.vStatus.$on('pullUpRefresh',function (upRef) { //接收list组件的下拉刷新事件并回调
        this.getUpRefesh(upRef);
        this.page += 1;
        this.getList(upRef);
      }.bind(this))
    },
    watch: {
      '$route' (to, from) {
        // 对路由变化作出响应...
        if (to.matched.some(record => record.meta.listAuth)) {
          this.activeTab = to.params[0];
          this.getList();
        }
        //进入home时，回到离开时的路由
        if(to.name === 'home'){
          this.$router.push({ path: `${to.path}/${this.activeTab}` })
        }
      }
    }
  }
</script>

<style>
</style>
