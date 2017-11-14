import * as types from '../types'

const state = {
  leftPopup: false// 是否打开登录表单
};
const actions = {
  openLoginForm({commit}, status){
    commit(types.SET_LAYOUT_FORM, status)
  }
};

const getters = {
  leftPopup: state => state.leftPopup
};

//调用mutations是唯一允许更新应用状态的地方
const mutations = {
  [types.SET_LAYOUT_FORM](state, status) { state.leftPopup = status }
};
export default {
  state,
  actions,
  getters,
  mutations
}
