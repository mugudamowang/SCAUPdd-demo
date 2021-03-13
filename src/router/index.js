import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home-index'
import live from '@/views/live/live-index'
import catalog from '@/views/catalog/catalog-index'
import talk from '@/views/talk/talk-index'
import search from '@/views/search/search-index'
import my from '@/views/my/my-index'
import login from '@/views/login/login-index'
import product_detail from '@/components/product-detailPage'
import live_detail from '@/components/live-detailPage'
import talk_detail from '@/components/talk-detailPage'



Vue.use(Router)

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  mode: 'history',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home-index',
      component: home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/product-detail',
      name: 'product-detail',
      component: product_detail,
      meta: {
        title: '商品详情'
      }
    },
    {
      path: '/live-detail',
      name: 'live-detail',
      component: live_detail,
      meta: {
        title: '直播页面'
      }
    },{
      path: '/talk-detail',
      name: 'talk-detail',
      component: talk_detail,
      meta: {
        title: '聊天'
      }
    },
    {
      path: '/search',
      name: 'search-index',
      component: search,
      meta: {
        title: '搜索'
      }
    },
    {
      path: '/live',
      name: 'live-index',
      component: live,
      meta: {
        title: '直播'
      }
    },
    {
      path: '/catalog',
      name: 'catalog-index',
      component: catalog,
      meta: {
        title: '分类'
      }
    },
    {
      path: '/talk',
      name: 'talk-index',
      component: talk,
      meta: {
        title: '聊天'
      }
    },
    {
      path: '/my',
      name: 'my-index',
      component: my,
      meta: {
        title: '我的'
      }
    },
    {
      path: '/login',
      name: 'login-index',
      component: login,
      meta: {
        title: '登录'
      }
    }
  ]
})
