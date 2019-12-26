export default{
  Authorization: (state, data) => {
    localStorage.setItem('Authorization', data);
    state.Authorization = data;
  },
  uinfo: (state, data) => {
    localStorage.setItem('data', JSON.stringify(data));
    state.user = JSON.stringify(data);
  },
  logout: (state) => {
    localStorage.removeItem('Authorization');
    localStorage.removeItem('data');
    state.Authorization = null
    state.user = {}
  },
  showLoading(state){
    state.LOADING = true
  },
  hideLoading (state) {
    state.LOADING = false
  }
}