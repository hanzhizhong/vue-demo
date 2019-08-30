<template>
  <div class="food">
    <div class="food-head">
        <span><i class="fa fa-angle-left"></i></span>
    </div>
    <div class="shop-current-info">
      <div class="shop-bg">
          <img class="shop-bg-big" src="../assets/images/shop.jpg" alt="背景图">
          <span class="shop-cover"></span>
      </div>
      <div class="shop-logo">
            <img src="../assets/images/shop.jpg" alt="logo图">
        </div>
      <div class="shop-info-title">
        <h2>
          <span>品牌</span>嘉禾一品
          <i class="fa fa-caret-right"></i>
        </h2>
        <p>
          <span>4.2</span>
          <span>月售90单</span>
          <span>蜂鸟专送&nbsp;约28分钟</span>
          <span>距离1000m</span>
        </p>
        <div class="shop-activity" @click="isShowAction=!isShowAction">
          <label><span class="green">首单</span>新用户下单立减17元</label>
          <span class="shop-activity-count">
            8个优惠
            <i class="fa fa-angle-down"></i>
          </span>
        </div>
      </div>
      <div class="shop-subnav">
        <p :class="$route.name=='menu'?'active':''"><router-link :to="{name:'menu'}">点餐</router-link></p>
        <p :class="$route.name=='comment'?'active':''"><router-link :to="{name:'comment'}">评价</router-link></p>
        <p :class="$route.name=='shopinfo'?'active':''"><router-link :to="{name:'shopinfo'}">商家</router-link></p>
      </div>
    </div>
    <div class="shop-subpages">
        <router-view></router-view>
    </div>
    <van-action-sheet v-model="isShowAction">
      <p>内容</p>
    </van-action-sheet>
  </div>
</template>

<script>
import {ActionSheet} from 'vant'
export default {
    components:{
        [ActionSheet.name]:ActionSheet,
    },
    data(){
        return{
            isShowAction:false,
        }
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
    }
    .shop-subnav p{
        width:33.3%;
        text-align:center;
    }
    .shop-subnav p a{
        color:#666666;
        line-height:2rem;
        display:inline-block;
        padding:0 0.5rem;
    }
    .shop-subnav .active a{
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