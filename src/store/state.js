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
}

export default state  