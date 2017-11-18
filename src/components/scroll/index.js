import ScrollV from './scrollV.vue'

const scroll={
  install:function(Vue){
    Vue.component('scroll',ScrollV)
  }  //'Loading'这就是后面可以使用的组件的名字，install是默认的一个方法
};

export default scroll;
