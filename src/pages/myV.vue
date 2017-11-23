<template>
  <div class="myV">
    <div v-if="loginStatus">
      <mu-list>
        <mu-sub-header>主页</mu-sub-header>
        <mu-list-item :title="userData.loginname" :describeText="userData.score+'积分'">
          <mu-avatar :src="userData.avatar_url" slot="leftAvatar"/>
        </mu-list-item>
      </mu-list>
      <mu-divider/>
      <mu-list>
      <mu-sub-header>最近创建的话题</mu-sub-header>
      <mu-list-item v-for="(item,index) in userData.recent_topics" :key="index" :title="item.title">
        <mu-avatar :src="item.author.avatar_url" slot="leftAvatar"/>
        <div>{{item.last_reply_at}}</div>
      </mu-list-item>
    </mu-list>
      <mu-list>
        <mu-sub-header>最近参与的话题</mu-sub-header>
        <mu-list-item v-for="(item,index) in userData.recent_replies" :key="index" :title="item.title">
          <mu-avatar :src="item.author.avatar_url" slot="leftAvatar"/>
          <div>{{item.last_reply_at}}</div>
        </mu-list-item>
      </mu-list>
    </div>
    <openform v-else></openform>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'myV',
  data () {
    return {
    }
  },
  methods:{
    ...mapActions([ ,'getUserData']),
    loadUserData () {
      if(this.loginStatus){
        this.getUserData(this.userInfo.loginname);
      }else {
        console.log('您还未登录');
      }
    }
  },
  //keep-alive下created只能被执行一次
  created () {
    this.loadUserData();
  },
  computed: {
    ...mapGetters(['loginStatus','userInfo','userData'])
  },
}
</script>

<style>
  .myV{
    position: relative;
  }
</style>
