import {
    getLocalCity,
    getHotCity,
    getAllCity,
    getSearchAddress,
    getDetailAddress,
    getFoodList,
    getShopNameNearest,
    getSearchShop,
} from '../ajax/index'

export default {
    //获取当前的城市名
    async getCityName({
        commit,
        state
    }, type) {
        const ret = await getLocalCity(type)
        const currentCityName = ret.data
        commit('get_city_name', {
            currentCityName
        })
    },
    //获取热点城市名
    async getHotCityName({
        commit,
        state
    }, type) {
        const ret = await getHotCity(type)
        const hotCityName = ret.data
        commit('get_hot_city_name', {
            hotCityName
        })
    },
    //获取所有的城市
    async getAllCityName({
        commit,
        state
    }, type) {
        const ret = await getAllCity(type)
        const cityName = ret.data
        const cityEn = Object.keys(cityName).sort()
        const allCityName = {}
        cityEn.forEach((item, index) => {
            allCityName[item] = cityName[item]
        })
        commit('get_all_city_name', {
            allCityName
        })
    },
    //搜索地址
    async getSearchAddressName({
        commit,
        state
    }, cid, keyword) {
        const {
            res1,
            res2
        } = await getSearchAddress(cid, keyword)
        const searchAddr = res1.data;
        const searchAddrMsg = res2.data
        commit('get_search_address_name', {
            searchAddr,
            searchAddrMsg
        })
    },
    //详细地址用来保存搜索记录
    async getDetailAddressByGeohash({
        commit
    }, geohash) {
        const ret = await getDetailAddress(geohash)
        const detailAddr = ret.data
        commit('get_detail_address_by_geohash', {
            detailAddr
        })
    },
    //同步保存搜索地址历史记录
    saveSearchHistoryAddress({
        commit
    }, item) {
        commit('save_search_history_address', {
            item
        })
    },
    //清空搜索地址历史记录
    clearSearchAddr({
        commit
    }) {
        commit('clear_search_addr')
    },
    //获取轮播图的数据列表
    async getFoodSortName({
        commit
    }) {
        const ret = await getFoodList()
        const foodList = ret.data
        commit('get_food_sort_name', {
            foodList
        })
    },
    //获取附近商家的信息
    async getNearestShopName({
        commit
    }, {latitude,longitude}) {
        const ret = await getShopNameNearest({latitude,longitude})
        const nearestShop=ret.data;
        commit('get_nearest_shop_name',{nearestShop})
    },
    //获取搜索的店家信息和历史记录
    async getSearchShopName({commit},{geohash,keyword}){
        const ret=await getSearchShop({geohash,keyword})
        const searchShopName=ret.data
        commit('get_search_shop_name',{searchShopName})
    },
    //同步保存搜索的名称
    savaSearchShopHistory({commit},showname){
        commit('sava_search_shop_history',{showname})
    },
    //清除搜索商铺或美食的历史记录
    clearSearchShopHistory({commit}){
        commit('clear_search_shop_history')
    },
    //设置菜单列表项页面的标题
    setMenuListTitle({commit},args){
        commit('set_menulist_title',{args})
    }

}