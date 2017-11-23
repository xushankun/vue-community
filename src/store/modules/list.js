import API from '../../lib/API'
import * as types from '../types'

//因为每一个module都拥有vuex的5个属性

//state设置默认的初始状态
const state = {
  // 列表
  listData:[],
  isRefresh: false,
  listDetail:{
    open: false,//详情页默认关闭
    itemCont:{
      title:null,
      content:null
    },
  }
};

const actions = {
  //获取列表
  getListData({ commit,state }, params) {
    API.getList(params.$option).then((res) => {
      let $res = [];
      if(params.upRef){    //if上拉，则拼接数组
        $res = state.listData.concat(res.data.data);
        commit(types.GET_REFRESH_UP,false);   //关闭loading
      }else {
        $res = res.data.data;   //否则init加载
      }
      if($res.length === 0){
        commit(types.GET_REFRESH_UP,false);   //关闭loading
      }
      commit(types.GET_LIST, $res)      //数组拼接最好在提交前操作
    }).catch((err) => {
      console.log(err)
    });
  },
  //上拉加载
  getUpRefesh({commit},upRef){
    commit(types.GET_REFRESH_UP,upRef);  //提交上拉加载状态
  },
  //获取详情
  getDetails({commit}, detailParams){
    commit(types.GET_LIST_DETAIL,detailParams);  //提交上拉加载状态
  }
};


//过滤我们拿到的数据
const getters = {
  listData: state => state.listData,
  isRefresh: state => state.isRefresh,
  listDetail: state => state.listDetail
};


//调用mutations是唯一允许更新应用状态的地方
const mutations = {
  [types.GET_LIST](state, res) {
    state.listData = res
  },
  [types.GET_REFRESH_UP](state, res) {
    state.isRefresh = res
  },
  [types.GET_LIST_DETAIL](state, res) {
    state.listDetail = res
  }
};
export default {
  state,
  actions,
  getters,
  mutations
}
