<template>
  <div>
    <mu-popup position="left" popupClass="demo-popup-left" :open="leftPopup" @close="openForm(!leftPopup)">
      <div class="show-form" v-if="loginStatus">
        <mu-card>
          <mu-card-header :title="userInfo.loginname" subTitle="sub title">
            <mu-avatar :src="userInfo.avatar_url" slot="avatar"/>
          </mu-card-header>
          <mu-card-title title="Content Title" subTitle="Content Title"/>
          <mu-card-text>
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
            调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
            似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
          </mu-card-text>
        </mu-card>
      </div>
      <div class="login-form" v-else>
        <mu-list>
          <mu-text-field label="Access Token" v-model="accessT" :value="accessT" labelFloat/>
          <mu-raised-button label="Sign In" @click="loginF" primary/>
          <mu-raised-button label="Close" @click="openForm(!leftPopup)"/>
        </mu-list>
      </div>
    </mu-popup>
    <!--toast-->
    <snackbar :msgObj="msgObj"></snackbar>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        msgObj:{
          tipsText: null,
          isShow: false
        },
        accessT: '' //登录需要的Access Token
      }
    },
    methods: {
      ...mapActions([
        'openLoginForm',
        'signIn' ,
        'getUserData',
        'getMessage',
        'accesstokenF'
      ]),
      openForm (status) {
        this.openLoginForm(status);
      },
      loginF () {
        //登录请求
        this.accesstokenF(this.accessT);
        let $that = this;
        if($that.accessT){
          let params = {
            accesstoken: $that.accessT
          };
          this.api.signInReq(params).then((res) => {
            $that.openForm(false);    //登录成功后关闭表单
            $that.signIn(res.data);   //存储到vuex
            $that.getUserData(res.data.loginname);  //用户详情
            $that.getMessage($that.accessT);    //消息
            this.showSnackbar('登录成功！');
          }).catch((err) => {
            console.log(err);
            this.showSnackbar('参数错误，请重新输入');
          });
        }else {
          this.showSnackbar('不能为空！');
        }
      }
    },
    created () {
      this.accessT = this.accesstoken;
      this.vStatus.$on('signOut',function ($val) {
        this.showSnackbar($val);
      }.bind(this))
    },
    computed: {
      ...mapGetters(['accesstoken','leftPopup','loginStatus','userInfo'])
    },
  }
</script>

<style lang="css">
  .show-form .mu-card{
    padding-top: 20px;
  }
  .login-form{
    width: 100%;
    margin-top: 50px;
    padding: 0 15px;
  }
  .demo-popup-top {
    width: 100%;
    opacity: .8;
    height: 48px;
    line-height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 375px;
  }
  .demo-popup-left {
    display: flex;
    width: 85%;
    max-width: 375px;
    height: 100%;
  }
</style>
