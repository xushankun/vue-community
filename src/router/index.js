import Vue from 'vue'
import Router from 'vue-router'

import homeV from '../pages/homeV.vue'
import releaseV from '../pages/releaseV.vue'
import messageV from '../pages/messageV.vue'
import myV from '../pages/myV.vue'
import listV from '../pages/list.vue'

Vue.use(Router);



export default new Router({
  // mode:'history',
  routes: [
    { path:'/home',
      name: 'home',
      component:homeV ,
      meta: { tabAuth: true },
      children:[
        {
          path:'*',//home下的所有都指向listV
          component:listV,
          meta: { listAuth: true }//相当于标记，当我们使用$route对象时，遍历出我们标记过的
        }
      ]
    },
    {
      path:'/release',
      name: 'release',
      component: releaseV,
      meta: { tabAuth: true }
    },
    { path:'/message',
      name: 'message',
      component: messageV,
      meta: { tabAuth: true }
    },
    { path:'/my',
      name: 'my',
      component: myV,
      meta: { tabAuth: true },
    },
    { path:'/',redirect:'/home' },    //重定向
  ]
  // scrollBehavior (to, from, savedPosition) {
  //   if (savedPosition) {
  //     return savedPosition
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
})
