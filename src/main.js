// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css' // 使用 light, dark, carbon, teal四种主题
import common from './lib/common'
import API from './lib/API'
import loading from './components/loading'
import snackbar from './components/snackbar'
import openform from './components/openform'

Vue.use(MuseUI);
Vue.use(common);
Vue.use(loading);
Vue.use(snackbar);
Vue.use(openform);
//定义全局变量
Vue.prototype.api = API;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,  //全局使用store
  template: '<App/>',
  components: { App }
});
