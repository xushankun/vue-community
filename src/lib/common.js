/*说明
  1. main.js里这样调用
    import common from './lib/common'
    Vue.use(common);

  2. 组件里直接这样调用this.test();
*/

export default{
  install(Vue,options){
    //可以自定义变量
    Vue.prototype.vStatus = new Vue();//用于非父子组件通信
    Vue.prototype.showSnackbar = function ($val) {
      this.msgObj.tipsText = $val;
      this.msgObj.isShow = true;
      if (this.snackTimer) clearTimeout(this.snackTimer);
      this.snackTimer = setTimeout(() => { this.msgObj.isShow = false }, 1000)
    }
  }
}
