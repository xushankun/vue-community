<template>
  <div v-if="msgObj.isShow">
    <mu-snackbar v-if="msgObj.isShow" :message="msgObj.tipsText" action="关闭" @actionClick="hideSnackbar" @close="hideSnackbar"/>
  </div>
</template>

<script>
  export default {
    props:['msgObj'],
    data(){
      return{
      }
    },
    methods: {
      hideSnackbar () {
        this.msgObj.isShow = false;
        if (this.snackTimer) clearTimeout(this.snackTimer)
      }
    }
  }
</script>

<style scoped>

</style>
