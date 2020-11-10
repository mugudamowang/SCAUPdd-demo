// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/rem'
import './assets/reset.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Grid, GridItem,Button, Search, Col, Row, Swipe, SwipeItem, Lazyload, Card, Tabbar, TabbarItem } from 'vant'

Vue.use(Grid).use(GridItem).use(Tabbar).use(TabbarItem).use(Button).use(Search).use(Col).use(Row).use(Swipe).use(SwipeItem).use(Lazyload).use(Card)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
