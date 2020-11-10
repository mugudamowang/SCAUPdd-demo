import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home-index'
import live from '@/views/live/live-index'
import catalog from '@/views/catalog/catalog-index'
import talk from '@/views/talk/talk-index'
import my from '@/views/my/my-index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home-index',
      component: home
    },
    {
      path: '/live',
      name: 'live-index',
      component: live
    },
    {
      path: '/catalog',
      name: 'catalog-index',
      component: catalog
    },
    {
      path: '/talk',
      name: 'talk-index',
      component: talk
    },
    {
      path: '/my',
      name: 'my-index',
      component: my
    }
  ]
})
