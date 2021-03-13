// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/js/rem'
import './assets/style/reset.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import Chat from 'vue-beautiful-chat'
import { DropdownMenu, DropdownItem,Tag,Sku,GoodsAction, GoodsActionIcon, GoodsActionButton,Field, Toast , Form, Cell, NavBar, PullRefresh, List, TreeSelect, Icon, Image as VanImage, Tab, Tabs, Grid, GridItem, Button, Search, Col, Row, Swipe, SwipeItem, Lazyload, Card, Tabbar, TabbarItem } from 'vant'
// import flvjs from 'flv.js'

// Vue.use(flvjs)
Vue.use(Chat)
Vue.use(DropdownMenu).use(DropdownItem).use(Tag).use(Sku).use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton).use(Toast).use(Field).use(Form).use(NavBar).use(Tab).use(Cell).use(List).use(PullRefresh).use(TreeSelect).use(Icon).use(VanImage).use(Tabs).use(Grid).use(GridItem).use(Tabbar).use(TabbarItem).use(Button).use(Search).use(Col).use(Row).use(Swipe).use(SwipeItem).use(Lazyload).use(Card)
Vue.config.productionTip = false

//路由守卫 用于title更换
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
