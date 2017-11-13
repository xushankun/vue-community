import snackbarComponent from './snackbar.vue'

const snackbar = {
  install:function(Vue){
    Vue.component('snackbar',snackbarComponent);
  }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
}

export default snackbar;
