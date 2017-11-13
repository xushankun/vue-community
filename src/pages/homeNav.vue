<template>
  <div class="homeNav">
    <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
      <mu-tab value="all" title="全部"/>
      <mu-tab value="good" title="精华"/>
      <mu-tab value="weex" title="weex"/>
      <mu-tab value="share" title="分享"/>
      <mu-tab value="ask" title="问答"/>
      <mu-tab value="job" title="招聘"/>
    </mu-tabs>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'homeNav',
    data () {
      return {
        activeTab: 'all'
      }
    },
    methods: {
      ...mapActions({ getListData: 'getListData'}),
      handleTabChange (val) {
        this.activeTab = val;
        this.getList();
      },
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
      this.getList();
      this.vStatus.$on('pRefresh',function () {
        this.getList();
      }.bind(this))
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
