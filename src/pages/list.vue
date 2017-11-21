<template>
  <div class="listV">
    <mu-refresh-control :refreshing="refreshing" :trigger="trigger" @refresh="refresh"/>
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
    <mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>
  </div>
</template>

<script>
  export default {
    name: 'listV',
    data () {
      return {
        refreshing: false,  //下
        trigger: null,      //拉

        loading: false,
        scroller: null
      }
    },
    methods: {
      refresh () {
        this.refreshing = true;
        this.vStatus.$emit('pullUpRefresh');//告诉homeNav组件，事件已发生
        setTimeout(() => {
          this.refreshing = false
        }, 1000)
      },
      loadMore () {
        this.loading = true;
        setTimeout(() => {
          console.log('刷新成功！');
          this.loading = false
        }, 2000)
      },
      details($id){
        console.log($id)
      }
    },
    created:function () {

    },
    mounted () {
      this.trigger = this.$el;
      this.scroller = this.$el

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
  .listV{
    height: calc(100% - 48px);
    overflow: scroll;
  }
</style>
