<template>
  <div class="homeV">
    <homeNav></homeNav>
    <listV></listV>
    <!--详情-->
    <listDetail :detailCont="detailCont"></listDetail>
  </div>
</template>

<script>
  import homeNav from './homeNav.vue'
  import listV from './list.vue'
  import listDetail from '../pages/detailV.vue'

  export default {
    name: 'homeV',
    data () {
      return {
      }
    },
    components:{ homeNav , listV ,listDetail},
    computed: {
      detailCont(){
        return this.$store.state.list.listDetail
      }
    }
  }
</script>

<style>
.homeV{
  height: 100%;
}
</style>
