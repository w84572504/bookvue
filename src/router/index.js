import Vue from 'vue'
import VueRouter from 'vue-router'
import store from 'store/index'
import Until from 'common/Until'

Vue.use(VueRouter)

// 首页
const HomeIndex = () => import('views/index/Home');
const Index = () => import('views/index/Index');
const Stroy = () => import('views/index/Story');
const Rember = () => import('views/index/Rember');

const About = () => import('views/index/About');
const SetUser = () => import('views/index/about/SetUser');
const Rechage = () => import('views/index/about/Rechage');
const TuiJian = () => import('views/index/about/TuiJian');
const Us = () => import('views/index/about/Us');

const Weixin = () => import('views/weixin/Index');
const Author = () => import('views/author/Author');

const routes = [
  {
    path: '/',
    redirect: '/index/index'
  },
  {
    path: '/index',
    component: HomeIndex,
    meta: {
      islogin: true,
      title: "左巷"
    },
    children:[
      {
        path:'index',
        name: 'index',
        component:Index,
        meta: {
          islogin: true,
          title: "左巷"

        },
      },
      {
        path:'story',
        name: 'story',
        component:Stroy,
        meta: {
          islogin: true,
          title: "故事"
        },
      },
      {
        path: 'rember',
        name: 'rember',
        component: Rember,
        meta: {
          islogin: true,
          title: "记录"
        },
      },
      {
        path:'about',
        name: 'about',
        component:About,
        meta: {
          islogin: true,
          title: "关于你"
        },
      },
      {
        path:'about/setuser',
        name: 'setuser',
        component:SetUser,
        meta: {
          islogin: true,
          title: "设置"
        },
      },
      {
        path: 'about/rechage',
        name: 'rechage',
        component: Rechage,
        meta: {
          islogin: true,
          title: "左钻充值"
        },
      },
      {
        path:'about/tuijian',
        name: 'tuijian',
        component:TuiJian,
        meta: {
          islogin: true,
          title: "推荐有礼"
        },
      },
      {
        path: 'about/us',
        name: 'us',
        component: Us,
        meta: {
          islogin: true,
          title: "关于左巷"
        },
      }
    ],
  },
  {
    path: '/weixin',
    component: Weixin,
    meta: {
      islogin: false
    }
  },
  {
    path: '/author',
    component: Author,
    meta: {
      islogin: false
    }
  }
];
// 页面刷新时，重新赋值token
if (localStorage.getItem('Authorization')) {
  store.commit('Authorization', localStorage.Authorization)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let is_weixin = Until.isWeiXin();
  let path = to.path;
  if (!is_weixin){
    if (path == '/weixin'){
      next();
    }else{
      next({
        path: '/weixin',
      })
    }
  }else{
    if (to.matched.some(r => r.meta.islogin)) {
      if (store.state.Authorization) {
        if(to.meta.title) {
          document.title = to.meta.title
        }
        next();
      } else {
        next({
          path: '/author',
          query: {redirect: to.fullPath}
        })
      }
    }else {
      next();
    }
  }

})

export default router
