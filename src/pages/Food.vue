<template>
  <div class="food">
    <div class="food-head">
        <span @click="$router.go(-1)"><i class="fa fa-angle-left"></i></span>
    </div>
    <template v-if="Object.keys(restaurantInfo).length>0">
        <div class="shop-current-info">
      <div class="shop-bg">
          <img class="shop-bg-big" :src="baseUrl+restaurantInfo.image_path" alt="背景图">
          <span class="shop-cover"></span>
      </div>
      <div class="shop-logo">
            <img :src="baseUrl+restaurantInfo.image_path" alt="logo图">
        </div>
      <div class="shop-info-title">
        <h2>
          <span>品牌</span>{{restaurantInfo.name}}
          <i class="fa fa-caret-right"></i>
        </h2>
        <p>
          <span>{{restaurantInfo.rating}}</span>
          <span>月售{{restaurantInfo.recent_order_num}}单</span>
          <span>{{restaurantInfo.delivery_mode.text||'-'}}&nbsp;约{{restaurantInfo.order_lead_time||'-'}}分钟</span>
          <span>距离{{restaurantInfo.distance||'-'}}m</span>
        </p>
        <template v-if="restaurantInfo.activities.length>0">
            <div class="shop-activity" @click="isShowAction=!isShowAction">
          <label><span :style="{backgroundColor:'#'+restaurantInfo.activities[0].icon_color}">restaurantInfo.activities[0].name</span>restaurantInfo.activities[0].description</label>
          <span class="shop-activity-count">
            {{restaurantInfo.activities.length}}个优惠
            <i class="fa fa-angle-down"></i>
          </span>
        </div>
        </template>
      </div>
      <div class="shop-subnav">
        <p @click="orderFood" :class="$route.name=='menu'?'active':''">点餐</p>
        <p @click="commentFood" :class="$route.name=='comment'?'active':''">评价</p>
        <p @click="shopinfoMsg" :class="$route.name=='shopinfo'?'active':''">商家</p>
      </div>
    </div>
    <div class="shop-subpages">
        <router-view></router-view>
    </div>
    <van-action-sheet v-model="isShowAction">
      <p>内容</p>
    </van-action-sheet>
    </template>
  </div>
</template>

<script>
import {ActionSheet} from 'vant'
import { mapState } from 'vuex';
export default {
    components:{
        [ActionSheet.name]:ActionSheet,
    },
    data(){
        return{
            isShowAction:false,
            baseUrl:'http://elm.cangdu.org/img/',
        }
    },
    computed:{
        ...mapState(['restaurantInfo']),
    },
    methods:{
        orderFood(){
            this.$router.replace({path:'menu'}).catch(err=>{})
        },
        commentFood(){
            this.$router.replace({path:'comment'}).catch(err=>{})
        },
        shopinfoMsg(){
            this.$router.replace({path:'shopinfo'}).catch(err=>{})
        },
        //获取商家信息
        getRestaurantInfo(){
            let shopId=this.$route.query.shopId;
            this.$store.dispatch('getRestaurantInfoByShopId',{shopId})
            this.$store.dispatch('getAllRestaurantMenu',{shopId})
        }
    },
    mounted(){
        this.getRestaurantInfo()
    }
};
</script>

<style scoped>
    .food-head{
        position:absolute;
        left:0;
        top:0;
        height:2.2rem;
        line-height:2.2rem;
        font-size:0.7rem;
        padding:0 0.5rem;
        z-index:100;
    }
    .food-head span{
        width:1.1rem;
        height:1.1rem;
        display:inline-block;
        font-size:1.1rem;
        color:#fff;
    }
    .shop-current-info{
        font-size:0.7rem;
        box-sizing: border-box;
        border-bottom:1px solid #dadada;
        height:10.5rem;
        position:absolute;
        width:100%;
    }
    .shop-bg{
        width:100%;
        height:3rem;
        position:relative;
        overflow:hidden;
    }
    .shop-bg .shop-bg-big{
        width:100%;
        position:absolute;
        top:-50%;
    }
    .shop-bg .shop-cover{
        position:absolute;
        left:0;
        top:0;
        bottom:0;
        right:0;
        background-color:rgba(0,0,0,0.3);
    }
    .shop-logo{
        width:3.2rem;
        height:3.2rem;
        position:absolute;
        left:50%;
        margin-left:-1.6rem;
        top:1.5rem;
        overflow:hidden;
    }
    .shop-logo img{
        width:3.2rem;
    }
    .shop-info-title{
        margin-top:1.7rem;
    }
    .shop-info-title h2{
        font-size:0.9rem;
        text-align:center;
        color:#323232;
    }
    .shop-info-title h2 span{
        background-color: gold;
        font-size:0.7rem;
        display: inline-block;
        margin-right:0.5rem;
        padding:0 0.2rem;
        border-radius:0.1rem;
        color:indigo;
    }
    .shop-info-title p{
        text-align:center;
        font-size:0.6rem;
        color:#323232;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding:0 2.5rem;
        line-height:1rem;
    }
    .shop-activity{
        width:90%;
        margin:0 auto;
        box-sizing: border-box;
        border:1px solid #eeeeee;
        height:1.4rem;
        line-height:1.4rem;
        padding:0 0.5rem;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .shop-activity label span{
        display:inline-block;
        font-size:0.5rem;
        padding:0 0.2rem;
        line-height:0.8rem;
        color:#fff;
        margin-right:0.3rem;
    }
    .green{
        background-color:greenyellow;
    }
    .shop-subnav{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width:100%;
        height:2.2rem;
        line-height:2.2rem;
        position:absolute;
        bottom:0;
    }
    .shop-subnav p{
        width:33.3%;
        text-align:center;
    }
    
    .shop-subnav p.active {
        color:darkcyan;
        border-bottom:2px solid darkcyan;
    }
    .shop-subpages{
        position:absolute;
        top:10.5rem;
        left:0;
        right:0;
        bottom:0;
        overflow:auto;
    }
</style>