// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './common/rem'
import './assets/reset.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Search, Col, Row, Swipe, SwipeItem, Lazyload, Card, Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar).use(TabbarItem).use(Button).use(Search).use(Col).use(Row).use(Swipe).use(SwipeItem).use(Lazyload).use(Card)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
