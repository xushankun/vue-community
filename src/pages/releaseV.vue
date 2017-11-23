<template>
    <div class="release-V">
      <div v-if="loginStatus">
        <div>{{msg}}</div>
        <div>{{loginStatus}}</div>
      </div>
      <openform v-else></openform>
    </div>
</template>

<script>
  import {  mapGetters, mapActions } from 'vuex'
  export default {
    name: 'release-V',
    data () {
      return {
        msg:'我是发布'
      }
    },
    methods:{

    },
    computed: {
      ...mapGetters(['loginStatus'])
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
