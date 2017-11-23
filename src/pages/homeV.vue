<template>
  <div class="homeV">
    <homeNav></homeNav>
    <listV></listV>
  </div>
</template>

<script>
  import homeNav from './homeNav.vue'
  import listV from './list.vue'
  export default {
    name: 'homeV',
    data () {
      return {
      }
    },
    components:{ homeNav , listV }
  }
</script>

<style>
.homeV{
  height: 100%;
}
</style>
