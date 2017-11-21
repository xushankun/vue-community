import API from '../../lib/API'
import * as types from '../types'

//因为每一个module都拥有vuex的5个属性

//state设置默认的初始状态
const state = {
  // 列表
  listData:[]
};

const actions = {
  //获取列表
  getListData({ commit,state }, params) {
    API.getList(params.$option).then((res) => {
      let $res = [];
      if(params.upRef){    //if上拉，则拼接数组
        $res = state.listData.concat(res.data.data)
      }else {
        $res = res.data.data;   //否则init加载
      }
      commit(types.GET_LIST, $res)      //数组拼接最好在提交前操作
    }).catch((err) => {
      console.log(err)
    });
  }
};


//过滤我们拿到的数据
const getters = {
  listData: state => state.listData
};


//调用mutations是唯一允许更新应用状态的地方
const mutations = {
  [types.GET_LIST](state, res) {
    state.listData = res
  }
};
export default {
  state,
  actions,
  getters,
  mutations
}
