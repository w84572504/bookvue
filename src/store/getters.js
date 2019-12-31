export default{
  getLoding:(state) => {
    return state.LOADING
  },
  getUserInfo:(state)=>{
    return state.user
  },
  getToken:(state)=>{
    return state.Authorization
  }
}