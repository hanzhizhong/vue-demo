import axios from 'axios'
axios.defaults.baseURL='https://elm.cangdu.org'
// 1、获取城市列表
export const getLocalCity=(type)=>{
    return axios.get('/v1/cities',{params:{type}})
}
// 2、获取热点城市
export const getHotCity=(type)=>{
    return axios.get('/v1/cities',{params:{type}})
}
//3.获取所有城市名
export const getAllCity=(type)=>{
    return axios.get('/v1/cities',{params:{type}})
}

//3、搜索地址
export const getSearchAddress=({city_id,keyword})=>{
    return axios.all([axios.get('/v1/cities/'+city_id),axios.get('/v1/pois',{params:{city_id,keyword}})]).then(axios.spread((res1,res2)=>{
        return {res1,res2}
    }))
}
//4、根据经纬度详细定位
export const getDetailAddress=(geohash)=>{
    return axios.get('/v2/pois/'+geohash)
}
//5、食品分类列表
export const getFoodList=()=>{
    return axios.get('/v2/index_entry')
}
//6、获取商铺列表
export const getShopNameNearest=({latitude,longitude})=>{
    return axios.get('/shopping/restaurants',{params:{latitude,longitude}})
}
//7、搜索餐馆
export const getSearchShop=({geohash,keyword})=>{
    return axios.get('/v4/restaurants',{params:{geohash,keyword}})
}

/*


8、获取所有商铺分类列表
9、获取配送方式
10、商家属性活动列表
11、餐馆详情
12、上传图片
13、添加餐馆
14、添加食品种类
15、添加食品
16、获取食品列表
17、获取评价信息
18、获取评价分数
19、获取评价分类
20、加入购物车
21、获取备注信息
22、获取收货地址列表
23、获取验证码
24、获取用户信息
25、登录
26、退出
27、修改密码
28、增加收货地址
29、删除收货地址
30、下单
31、订单列表
32、订单详情
33、服务中心
34、可用红包
35、过期红包
36、兑换红包
37、管理员登录
38、管理员退出登录
39、管理员信息
40、获取某日API请求量
41、获取所有API请求量
42、获取某天用户注册量
43、获取所有用户注册量
44、获取某天订单数量
45、获取所有订单数量
46、管理员列表
47、获取管理员数量
48、获取店铺食品种类
49、获取餐馆数量
50、更新餐馆
51、删除餐馆
52、获取食品列表
53、获取食品数量
54、获取食品种类详情
55、更新食品
56、删除食品
57、获取用户列表
58、获取订单列表
59、获取地址信息
60、获取用户分布信息
61、获取某天管理员注册量 */