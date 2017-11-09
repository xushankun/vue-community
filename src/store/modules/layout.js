import * as types from '../types'

const state = {
  leftPopup: false,// 是否打开登录表单
  currentTab: localStorage.getItem('currentTab') || 'my',   // 当前tab页
};
const actions = {
  openLoginForm({commit}, status){
    commit(types.SET_LAYOUT_FORM, status)
  },
  currTab({commit}, curr){    //提交当前页
    commit(types.SET_LOGIN_TAB, curr)
  }
};

const getters = {
  leftPopup: state => state.leftPopup,
  currentTab: state => state.currentTab
};

//调用mutations是唯一允许更新应用状态的地方
const mutations = {
  [types.SET_LAYOUT_FORM](state, status) { state.leftPopup = status },
  [types.SET_LOGIN_TAB](state, curr) { state.currentTab = curr }
};
export default {
  state,
  actions,
  getters,
  mutations
}
