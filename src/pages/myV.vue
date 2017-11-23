<template>
  <div class="myV">
    <div v-if="isLogin">
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
    <div class="sign-block" v-else>
      <mu-raised-button label="Go Sign In ?" @click="openForm(true)"/>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
export default {
  name: 'myV',
  data () {
    return {
    }
  },
  methods:{
    ...mapActions(['openLoginForm' ,'getUserData']),
    openForm (status) {
      this.openLoginForm(status);
    },
    loadUserData () {
      if(this.isLogin){
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
    isLogin () {
      return this.$store.state.user.loginStatus
    },
    userInfo () {
      return this.$store.state.user.userInfo
    },
    userData () {
      return this.$store.state.user.userData
    }
  },
}
</script>

<style>
  .myV{
    position: relative;
  }
  .sign-block{
    margin: 15px 0 0 15px;
  }
</style>
