import Vue from 'vue'
import Router from 'vue-router'

import homeV from '../pages/homeV.vue'
import releaseV from '../pages/releaseV.vue'
import messageV from '../pages/messageV.vue'
import myV from '../pages/myV.vue'

Vue.use(Router);

export default new Router({
  routes: [
    { path:'/home', name: 'home', component:homeV },
    { path:'/release', name: 'release', component: releaseV },
    { path:'/message', name: 'message', component: messageV },
    { path:'/my', name: 'my', component: myV },
    { path:'/',redirect:'/my' },    //重定向路由到"./my"
  ]
})
