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


const About = () => import('views/about/Index');
const AboutHome = () => import('views/about/Home');

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
      islogin: true
    },
    children:[
      {
        path:'index',
        name: 'index',
        component:Index,
        meta: {
          islogin: true
        },
      },
      {
        path:'story',
        name: 'story',
        component:Stroy,
        meta: {
          islogin: true
        },
      },
      {
        path:'rember',
        name: 'rember',
        component:Rember,
        meta: {
          islogin: true
        },
      },
    ],
  },
  {
    path: '/about',
    component: AboutHome,
    meta: {
      islogin: false
    },
    children:[
      {
        path:'index',
        name: 'index',
        component:About,
        meta: {
          islogin: true
        },
      }
    ]
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
        console.log(store.state);
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
