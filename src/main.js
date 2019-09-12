import Vue from 'vue'
import App from './App.vue'

import './assets/css/reset.css'
import './assets/js/fontset'

import './assets/css/font-awesome.min.css'
import './assets/css/iconfont.css'

import './ajax/index'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ShopName from './components/shop/ShopName'
import MenuList from './components/food/MenuList'
import CalcResult from './components/food/CalcResult'
import CommentMsg from './components/food/CommentMsg'
Vue.component('v-header',Header)
Vue.component('v-footer',Footer)
Vue.component('v-shop',ShopName)
Vue.component('v-menuList',MenuList)
Vue.component('v-calcResult',CalcResult)
Vue.component('v-comment',CommentMsg)

import router from './router/index'

//引入vuex的状态保持模块
import store from './store/index'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
