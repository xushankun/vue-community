<template>
  <div class="detail-wrap">
    <!--详情-->
    <mu-drawer right :open="detailParams.open">
      <mu-appbar :title="detailParams.title" class="detail-bar">
        <mu-icon-button @click.native="detailParams.open = false" icon="close" slot="left"/>
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="收藏" @click="collect"/>
          <mu-menu-item title="我的收藏"/>
        </mu-icon-menu>
      </mu-appbar>
      <div class="detail-content">
        <mu-list-item v-html="detailCont.content"/>
        <!--返回顶部-->
        <mu-back-top/>
      </div>
    </mu-drawer>
  </div>
</template>

<script>
  import API from "../lib/API";

  export default {
    data () {
      return {
        detailParams:{},
        detailCont:{}
      }
    },
    methods:{
      collect:function () {
        //检测是否登录
        if(this.isLogin){
          console.log('OK!收藏成功');
//          let params = {
//            accesstoken:this.accessToken,
//            topic_id:this.detailParams.id
//          }
        }else {
          console.log('您还没有登录！，请先登录')
        }
      }
    },
    created:function () {
      this.vStatus.$on('detailParams',function (params) {
        this.detailParams = params;
        API.getListDetails(params.id).then((res) => {
          this.detailCont = res.data.data;
        }).catch((err) => {
          console.log(err)
        });
      }.bind(this))
    },
    computed: {
      isLogin () {
        return this.$store.state.user.loginStatus
      },
      accessToken(){
        return this.$store.state.user.accesstoken
      },
    },
  }
</script>
<style>
  /*详情*/
  .detail-wrap .mu-paper{
    width: 100%;
    overflow: hidden;
    z-index: 9999;
  }
  .detail-bar{
    position: absolute;
    top: 0;
  }
  .detail-content{
    margin-top: 56px;
    padding: 15px;
    height: calc(100% - 56px);
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .markdown-text img{
    max-width: 100%;
  }
</style>
