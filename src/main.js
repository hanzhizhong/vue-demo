import Vue from 'vue'
import App from './App.vue'

import './assets/css/reset.css'
import './assets/js/fontset'

import './assets/css/font-awesome.min.css'
import './assets/css/iconfont.css'

import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ShopName from './components/shop/ShopName'
import MenuList from './components/food/MenuList'
import CalcResult from './components/food/CalcResult'
Vue.component('v-header',Header)
Vue.component('v-footer',Footer)
Vue.component('v-shop',ShopName)
Vue.component('v-menuList',MenuList)
Vue.component('v-calcResult',CalcResult)

import router from './router/index'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
