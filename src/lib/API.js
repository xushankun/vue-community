/**
 * Created by shankun on 2017/9/3.
 */
import axios from 'axios'
import config from './config'

export default {
  // 登录
  signInReq :function (param) {
    config.data = param;
    return axios.post('/accesstoken',{},config);
  },
  // 获取用户详情
  getUserData:function (param) {
    // config.params = param;
    return axios.get('/user/'+param.userName,config);
  },
  //获取消息
  getMessage:function (param) {
    config.params = param;
    return axios.get('/messages',config);
  },


  // 获取列表
  getList:function (param) {
    config.params = param;
    return axios.get('/topics',config);
  },
}
