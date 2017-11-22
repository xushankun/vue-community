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
  // 获取主题详情【item-details】
  getListDetails:function (param) {
    config.params = param;
    return axios.get('/topic/'+param,config);
  },
  //收藏主题
  collectTopic:function (param) {
    config.data = param;
    return axios.post('/topic/collect',{},config);
  },
  //取消收藏
  cancelCollect:function (param) {
    config.data = param;
    return axios.post('/topic/de_collect ',{},config);
  }
}
