/*说明
  1. main.js里这样调用
    import common from './lib/common'
    Vue.use(common);

  2. 组件里直接这样调用this.test();
*/

export default{
  install(Vue,options){
    Vue.prototype.baseUrl= 'http://www.baidu.com' ; //可以自定义变量
    Vue.prototype.test = function () {
      console.log('test函数')
    }
  }
}
