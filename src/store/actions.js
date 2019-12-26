export default{
  alogin: ({commit }, data) => {
    commit('Authorization',data)
  },
  uinfo:({commit }, data) => {
    commit('uinfo',data)
  },
  alogout: ({commit }) => {
    commit('logout')
  },
}