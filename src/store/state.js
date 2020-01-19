import session from '../utils/search_addr_history'
const state={
    currentCityName:{},
    hotCityName:[],
    allCityName:[],
    searchAddr:{},
    searchAddrMsg:[],
    detailAddr:session.getSession('detail_addr'),
    searchAddrHistory:session.getSession('search_addr_history'),
    foodSwipeList:[],
    nearestShop:[],
    searchShopName:[],
    searchShopHistory:session.getSession('search_shop_history'),
    //分类页面的标题
    sortedPageTitle:session.getSession('shop_title'),
    categroy:[],//食品分类
    deliveryModel:[],//获取配送方式
    activityAttributes:[],//商家属性
    restaurantInfo:{},//商家详细信息
    restaurantMenu:[],//食品列表
    count:parseFloat(0.00),//购物车的数量
}

export default state  