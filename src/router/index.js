import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home-index'
import live from '@/views/live/live-index'
import catalog from '@/views/catalog/catalog-index'
import talk from '@/views/talk/talk-index'
import search from '@/views/search/search-index'
import my from '@/views/my/my-index'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    }
  ]
})
