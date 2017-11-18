<template>
    <scroll class="wrapper"
            :data="this.newListData"
            :pullup="pullup"
            @scrollToEnd="loadData">
      <!--<mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>-->
      <mu-list>
        <div v-for="(item,index) in newListData">
          <mu-list-item :title="item.author.loginname" :afterText="item.tab" :describeLine="2" @click="details(index)">
            <mu-avatar :src="item.author.avatar_url" slot="leftAvatar"/>
            <span slot="describe">
          <span style="color: rgba(0, 0, 0, .87)">{{item.title}}</span>
          </span>
            <span style="display:inherit;width: 100%;color: #999;margin-top: 10px">{{item.last_reply_at}}</span>
          </mu-list-item>
          <mu-divider inset/>
        </div>
      </mu-list>
      <div class="loading-wrapper">loading</div>
    </scroll>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'wrapper',
    data () {
      return {
//        refreshing: false,  //下
//        trigger: null,      //拉
        pullup: true
      }
    },
    methods: {
      loadData(){
        console.log('上拉ok！');
//        this.refresh();
      },
      refresh () {
        this.refreshing = true;
        this.vStatus.$emit('pullUpRefresh');//告诉homeNav组件，事件已发生
        setTimeout(() => {
          this.refreshing = false
        }, 1000)
      },
      details($id){
        console.log($id)
      }
    },
    created:function () {

    },
    mounted () {
//      this.trigger = this.$el;

    },
    computed: {
      newListData () {
        return this.$store.state.list.listData;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .wrapper{
    height: calc(100% - 48px);
  }
  .loading-wrapper{
    text-align: center;
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    background: #d7dde4;
    color: red;
    font-weight: 700;
  }
</style>
