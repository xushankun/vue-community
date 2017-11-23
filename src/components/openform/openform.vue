<template>
  <mu-raised-button class="sign-block" label="Go Sign In ?" @click="openForm(true)"/>
</template>
<script>
  import { mapActions } from 'vuex'
  export default {
    data(){
      return{
      }
    },
    methods: {
      ...mapActions(['openLoginForm']),
      openForm (status) {
        this.openLoginForm(status);
      },
    }
  }
</script>

<style scoped>
  .sign-block{
    margin: 15px 0 0 15px;
  }
</style>
