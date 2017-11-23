<template>
  <div id="app" class="appView">
    <headerV></headerV>
    <contentV></contentV>
    <footerV></footerV>
    <loginForm></loginForm>
    <!--详情-->
    <listDetail :detailCont="detailCont"></listDetail>
  </div>
</template>

<script>
  import headerV from './components/headerV.vue'
  import contentV from './components/contentV.vue'
  import footerV from './components/footerV.vue'
  import loginForm from './pages/loginForm.vue'
  import listDetail from './pages/detailV.vue'

export default {
  name: 'app',
  data:function () {
    return {

    }
  },
  components:{ headerV,contentV,footerV,loginForm,listDetail },
  computed: {
    detailCont(){
      return this.$store.state.list.listDetail
    }
  }
}
</script>

<style>
.appView{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
}
/*详情*/
.detail-wrap , .detail-wrap .mu-drawer{
  width: 100%;
  overflow: hidden;
  z-index: 9999;
}
.contentV{
  width: 100%;
  height: calc(100% - 112px);
  overflow-y: scroll;
  position: relative;
  -webkit-overflow-scrolling: touch;
  user-select: none;
}
@media (min-width: 480px){
  .mu-appbar {
    height: 56px;
    line-height: 56px;
  }
}
</style>
