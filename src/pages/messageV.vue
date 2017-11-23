<template>
  <div class="messageV">
    <div v-if="loginStatus">
      <!--新消息【未读】-->
      <mu-sub-header>新消息</mu-sub-header>
        <mu-list-item v-for="(item,index) in messages.hasnot_read_messages" :key="index" :title="item.topic.title">
          <mu-avatar :src="item.author.avatar_url" slot="leftAvatar"/>
          <span slot="describe">
        <span style="margin-top: 20px;color: rgba(0, 0, 0, .87)">{{item.author.loginname}} -</span> {{item.reply.content}}
      </span>
          <span>
        {{item.reply.create_at}}
      </span>
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="回复" />
            <mu-menu-item title="标记" />
            <mu-menu-item title="删除" />
          </mu-icon-menu>
        </mu-list-item>
      <mu-divider inset/>
        <!--已读消息-->
      <mu-sub-header>已读消息</mu-sub-header>
        <mu-list-item v-for="(item,index) in messages.has_read_messages" :key="index" :title="item.topic.title">
          <mu-avatar :src="item.author.avatar_url" slot="leftAvatar"/>
          <span slot="describe">
        <span style="margin-top: 20px;color: rgba(0, 0, 0, .87)">{{item.author.loginname}} -</span> {{item.reply.content}}
      </span>
          <span>
        {{item.reply.create_at}}
      </span>
          <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
            <mu-menu-item title="回复" />
            <mu-menu-item title="标记" />
            <mu-menu-item title="删除" />
          </mu-icon-menu>
        </mu-list-item>
      <mu-divider inset/>
    </div>
    <openform v-else></openform>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  export default {
    name: 'messageV',
    data () {
      return {
      }
    },
    methods:{
      ...mapActions(['getMessage'])
    },
    created () {
      if(this.loginStatus){
        this.getMessage('1d941586-8a95-4f45-8b8b-44507ab3977b');
      }
    },
    computed: {
      ...mapGetters(['loginStatus','messages'])
    }
  }
</script>

<style>
  .messageV .mu-item-text{
    margin-top: 14px;
  }
  .messageV .mu-divider{
    width: auto;
  }
</style>
