<template>
  <scroll class="releaseV wrapper"
          :data="this.newListData"
          :pullup="pullup"
          @scrollToEnd="loadData">
      <div class="release-cont">
        <div>{{msg}}</div>
        <div>{{isLogin}}</div>
      </div>
      <div class="loading-wrapper">loading</div>
  </scroll>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'wrapper',
    data () {
      return {
        newListData:[],
        msg:'我是发布',
        pullup: true
      }
    },
    methods:{
      loadData(x){
        console.log(x);
        console.log('上拉ok！');
      },
    },
    computed: {
      isLogin () {
        return this.$store.state.user.loginStatus
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .releaseV{
    height: 100%;
  }
  .release-cont{
    height: 100%;
  }
</style>
