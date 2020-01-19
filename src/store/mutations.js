import session from '../utils/search_addr_history'
export default{
    get_city_name(state,{currentCityName}){
        state.currentCityName=currentCityName
    },
    get_hot_city_name(state,{hotCityName}){
        state.hotCityName=hotCityName
    },
    get_all_city_name(state,{allCityName}){
        state.allCityName=allCityName
    },
    get_search_address_name(state,{searchAddr,searchAddrMsg}){
        state.searchAddr=searchAddr;
        state.searchAddrMsg=searchAddrMsg;
    },
    get_detail_address_by_geohash(state,{detailAddr}){
        state.detailAddr=[detailAddr]
        session.setSession('detail_addr',[detailAddr])
    },
    //添加的新的搜索地址
    save_search_history_address(state,{item}){
        const aHistory=state.searchAddrHistory;
        if(aHistory.length>0){
            if(JSON.stringify(aHistory).includes(JSON.stringify(item))){
                return false;
            }else{
                aHistory.push(item)
            }
        }else{
            aHistory.push(item)
        }
        session.setSession('search_addr_history',aHistory)
    },
    //清空搜索地址
    clear_search_addr(state){
        state.searchAddrHistory=[]
        session.removeSession('search_addr_history')
    },
    //首页轮播图的效果
    get_food_sort_name(state,{foodList}){
        state.foodSwipeList=foodList
    },
    ////获取附近商家的信息
    get_nearest_shop_name(state,{nearestShop}){
        state.nearestShop=nearestShop
    },

    //根据给定的地址信息搜索到的店铺信息
    get_search_shop_name(state,{searchShopName}){
        if(searchShopName.type){
            state.searchShopName=[]
        }else{
            state.searchShopName=searchShopName
        }
    },
    //保存商家或美食的搜索记录
    sava_search_shop_history(state,{showname}){
        //判断showname是否已经存在，存在不保存
        let aShopHistory=state.searchShopHistory;
        if(aShopHistory.includes(showname)){
            return false 
        }
        aShopHistory.push(showname)
        session.setSession('search_shop_history',aShopHistory)
    },
    //清空搜索的商铺和美食历史记录
    clear_search_shop_history(state){
        state.searchShopHistory=[]
        session.removeSession('search_shop_history')
    },
    //设置分类商铺页面的标题
    set_menulist_title(state,{args}){
        const aTitle=state.sortedPageTitle
        if(aTitle.length>0){
            aTitle.splice(0,1,args)
        }else{
            aTitle.push(args)
        }
        session.setSession('shop_title',aTitle)
    },
    //获取食品分类
    get_all_categroy(state,args){
        state.categroy=args;
    },
    //获取配送方式
    get_all_delivery_model(state,args){
        state.deliveryModel=args;
    },
    //商家属性
    get_all_activity_attributes(state,args){
        state.activityAttributes=args;
    },
    //商家信息
    get_restaurant_info_by_shop_id(state,args){
        state.restaurantInfo=args;
    },
    //食品列表
    get_all_restaurant_menu(state,args){
        state.restaurantMenu=args;
    }
    


}