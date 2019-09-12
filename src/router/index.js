import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

//一级页面
import Home from '../pages/Home'
import SearchShop from '../pages/SearchShop'
import City from '../pages/City'
import Order from '../pages/Order'
import Profile from '../pages/Profile'
import Login from '../pages/Login'
import Shop from '../pages/Shop'
import Food from '../pages/Food'
import OrderMenu from '../pages/food/OrderMenu'
import Comment from '../pages/food/Comment'
import ShopInfo from '../pages/food/ShopInfo'

//组件的页面
import SearchCity from '../components/city/SearchCity'

const routes=[
    {path:'/home',name:'home',component:Home,meta:{
        showPage:true
    }},
    {path:'/search',name:'search',component:SearchShop,meta:{
        showPage:true
    }},
    {path:'/order',name:'order',component:Order,meta:{
        showPage:true
    }},
    {path:'/profile',name:'profile',component:Profile,meta:{
        showPage:true
    }},
    {path:'/login',name:'login',component:Login},
    {path:'/shop',name:'shop',component:Shop},
    {path:'/food',name:'food',component:Food,children:[
        {path:'menu',name:'menu',component:OrderMenu},
        {path:'comment',name:'comment',component:Comment},
        {path:'shopinfo',name:'shopinfo',component:ShopInfo},
    ]},
    

    {path:'/city',name:'city',component:City},
    {path:'/city/:aid',name:'searchCity',component:SearchCity},
    {path:'/',redirect:{name:'city'}}
]

const router =new VueRouter({
    mode:'hash',
    routes,
})

export default router