<template>
  <div class="messageV">
    <div v-if="isLogin">
      <!--新消息【未读】-->
      <mu-sub-header>新消息</mu-sub-header>
        <mu-list-item v-for="(item,index) in currMessages.hasnot_read_messages" :key="index" :title="item.topic.title">
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
        <mu-list-item v-for="(item,index) in currMessages.has_read_messages" :key="index" :title="item.topic.title">
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
    <div class="sign-block" v-else>
      <mu-raised-button label="Go Sign In ?" @click="openForm(true)"/>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  export default {
    name: 'messageV',
    data () {
      return {
      }
    },
    methods:{
      ...mapActions({ openLoginForm: 'openLoginForm' , getMessage:'getMessage'}),
      openForm (status) {
        this.openLoginForm(status);
      },
    },
    created:function () {
      if(this.isLogin){
        this.getMessage('1d941586-8a95-4f45-8b8b-44507ab3977b');
      }
    },
    computed: {
      isLogin () {
        return this.$store.state.user.loginStatus
      },
      currMessages(){
        return this.$store.state.user.messages
      }
    }
  }
</script>

<style>
  .sign-block{
    margin: 15px 0 0 15px;
  }
  .messageV .mu-item-text{
    margin-top: 14px;
  }
  .messageV .mu-divider{
    width: auto;
  }
</style>
