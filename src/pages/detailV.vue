<template>
  <div class="detail-wrap">
    <!--详情-->
    <mu-drawer right :open="detailParams.open">
      <mu-appbar :title="detailParams.title" class="detail-bar">
        <mu-icon-button @click.native="detailParams.open = false" icon="close" slot="left"/>
        <mu-icon-menu icon="more_vert" slot="right">
          <mu-menu-item title="收藏" @click="collect"/>
          <mu-menu-item title="取消收藏" @click="cancelCollect"/>
          <mu-menu-item title="我的收藏"/>
        </mu-icon-menu>
      </mu-appbar>
      <div class="detail-content">
        <mu-list-item v-html="detailCont.content"/>
        <!--返回顶部-->
        <mu-back-top/>
      </div>
    </mu-drawer>
    <!--弹出层-->
    <mu-dialog :open="dialog" @close="close">
      您还未登录，是否去登录？
      <mu-flat-button slot="actions" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="openForm" label="确定"/>
    </mu-dialog>
    <!--toast-->
    <snackbar :msgObj="msgObj"></snackbar>
  </div>
</template>

<script>
  import {  mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        dialog: false,  //init询问框
        msgObj:{
          tipsText: null,
          isShow: false
        },
        detailParams:{},
        detailCont:{}
      }
    },
    methods:{
      ...mapActions(['openLoginForm' ,'setIsCollect']),
      openForm () {
        this.dialog = false;
        this.openLoginForm(true);
      },
      close () {
        this.dialog = false
      },
      collect:function () {
        //检测是否登录
        if(this.loginStatus){
          let params = {
            accesstoken:this.accesstoken,
            topic_id:this.detailParams.id
          };
          this.api.collectTopic(params).then((res) => {
             if(res.data.success){
               this.showSnackbar('收藏成功！');
             }
          }).catch((err) => {
            console.log(err);
          })
        }else {
          this.dialog = true;
        }
      },
      cancelCollect:function () {
        //检测是否登录
        if(this.loginStatus){
          let params = {
            accesstoken:this.accesstoken,
            topic_id:this.detailParams.id
          };
          this.api.cancelCollect(params).then((res) => {
            if(res.data.success){
              this.showSnackbar('已取消收藏！');
            }
          }).catch((err) => {
            console.log(err);
          })
        }else {
          this.dialog = true;
        }
      }
    },
    created () {
      this.vStatus.$on('detailParams',function (params) {
        this.detailParams = params;
        this.api.getListDetails(params.id).then((res) => {
          this.detailCont = res.data.data;
        }).catch((err) => {
          console.log(err)
        });
      }.bind(this))
    },
    computed: {
      ...mapGetters(['loginStatus','accesstoken'])
    },
  }
</script>
<style>
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
