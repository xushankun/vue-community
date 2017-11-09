<template>
  <div class="myV">
    <div v-if="status">
      <div>登录成功</div>

      <mu-list>
        <mu-sub-header>主页</mu-sub-header>
        <mu-list-item :title="userData.loginname" :describeText="userData.score+'积分'">
          <mu-avatar :src="userData.avatar_url" slot="leftAvatar"/>
        </mu-list-item>
        <span>注册时间：{{userData.create_at}}</span>
      </mu-list>
      <mu-divider/>
      <mu-list>
      <mu-sub-header>最近创建的话题</mu-sub-header>
      <mu-list-item title="userData.loginname">
        <mu-avatar src="userData.avatar_url" slot="leftAvatar"/>
        <mu-icon value="chat_bubble" slot="right"/>
      </mu-list-item>
    </mu-list>
      <mu-list>
        <mu-sub-header>最近参与的话题</mu-sub-header>
        <mu-list-item title="userData.loginname">
          <mu-avatar src="userData.avatar_url" slot="leftAvatar"/>
          <mu-icon value="chat_bubble" slot="right"/>
        </mu-list-item>
      </mu-list>
    </div>
    <div class="sign-block" v-else>
      <div>您还未登录</div>
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
      isLogin:null
    }
  },
  methods:{
    ...mapActions({ openLoginForm: 'openLoginForm' }),
    openForm (status) {
      this.openLoginForm(status);
    }
//    getUserData:function () {
//      let $that = this;
//      let params = {
//        userName:$that.userInfo.loginname
//      };
//      this.api.getUserData(params).then((res) => {
//        console.log(res);
//      }).catch((err) => {
//        console.log(err)
//      });
//    }
  },
  created:function () {
//    if(this.status){//判断是否已登录
//      this.getUserData();
//    }else {
//      console.log('您还未登录');
//    }
  },
  computed: {
    status () {
      return this.$store.state.user.loginStatus
    },
    userData () {
      return this.$store.state.user.userData
    }
  },
}
</script>

<style>
  .sign-block{
    margin: 15px 0 0 15px;
  }
</style>
