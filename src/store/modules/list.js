import API from '../../lib/API'
import * as types from '../types'

//因为每一个module都拥有vuex的5个属性

//state设置默认的初始状态
const state = {
  // 列表
  listData:{}
};

const actions = {
  //获取列表
  getListData({ commit }, params) {
    API.getList(params).then((res) => {
      console.log(params);
      console.log(res.data.data);
      commit(types.GET_LIST, res.data.data)
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
    console.log(res);
    state.userData = res
  }
};
export default {
  state,
  actions,
  getters,
  mutations
}
