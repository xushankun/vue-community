<template>
  <div class="list-V">
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
  </div>
</template>

<script>
  export default {
    name: 'list-V',
    data () {
      return {
        refreshing: false,
        trigger: null
      }
    },
    methods: {
      refresh () {
        let $that = this;
        this.refreshing = true;
        this.vStatus.$emit('pRefresh');
//        this.getUserData($that.userInfo.loginname);//下拉请求
        setTimeout(() => {
          this.refreshing = false
        }, 2000)
      },
    },
    mounted () {
      this.trigger = this.$el
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
</style>
