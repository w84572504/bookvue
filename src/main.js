import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.less';
import wxshare from './common/wechat'

Vue.use(Vant);
Vue.config.productionTip = false
Vue.prototype.$wxShare = wxshare
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
