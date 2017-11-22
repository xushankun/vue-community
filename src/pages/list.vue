<template>
  <div class="listV">
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
    <mu-infinite-scroll :scroller="scroller" :loading="isUpRefesh" :loadingText="loadingText" @load="loadMore"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'listV',
    data () {
      return {
        scroller: null,
        loadingText:'正在加载'
      }
    },
    methods: {
      ...mapActions({getUpRefesh: 'getUpRefesh',getDetails: 'getDetails'}),
      loadMore () {
//        this.getUpRefesh(true);
//        setTimeout(() => {
//          console.log('开始刷新！');
//          this.vStatus.$emit('pullUpRefresh',true);//告诉homeNav组件，事件已发生
//        }, 2000);
      },
      details(index){
        let detailCont = {
          itemCont:this.newListData[index],
          open:true
        };
        this.getDetails(detailCont);
      }
    },
    created:function () {
    },
    mounted () {
      this.scroller = this.$el
    },
    computed: {
      newListData () {
        return this.$store.state.list.listData;
      },
      isUpRefesh () {
        return this.$store.state.list.isRefresh;
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
