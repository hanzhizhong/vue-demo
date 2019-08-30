<template>
  <div class="home">
      <v-header>
        <a href="#" slot="left" class="left"><i class="fa fa-search"></i></a>
        <a href="#" slot="right" class="right">登录|注册</a>
      </v-header>
      <div class="container">
          <!-- <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
          </van-swipe> -->
          <div class="menu-fast">
            <ul class="swipe-menu">
              <li>
                <router-link :to="{name:'shop',query:{restaurant_category_id:1}}">
                  <img src="../assets/images/01.jpeg" alt="food">
                  <br>
                  甜品饮品
                </router-link>
              </li>
              <li>
                <a href="#">
                  <img src="../assets/images/01.jpeg" alt="food">
                  <br>
                  甜品饮品
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../assets/images/01.jpeg" alt="food">
                  <br>
                  甜品饮品
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../assets/images/01.jpeg" alt="food">
                  <br>
                  甜品饮品
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../assets/images/01.jpeg" alt="food">
                  <br>
                  甜品饮品
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../assets/images/01.jpeg" alt="food">
                  <br>
                  甜品饮品
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../assets/images/01.jpeg" alt="food">
                  <br>
                  甜品饮品
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../assets/images/01.jpeg" alt="food">
                  <br>
                  甜品饮品
                </a>
              </li>
            </ul>
          </div>

          <div class="shop-near">
            <div class="shop-near-top"><i class="fa fa-archive"></i> 附近商家</div>
            <v-shop></v-shop>
          </div>
      </div>
  </div>
</template>

<script>
import {Swipe,SwipeItem } from 'vant'
export default {
  components:{
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
  }    ,
  data(){
    return{
      
    }
  }

}
</script>

<style scoped>
  .container{
    padding-bottom:2.45rem;
  }
  .menu-fast{
    padding-bottom:1rem;
    border-bottom:1px solid #dadada;
    background-color:#fff;
    box-sizing: border-box;
    border-top:1px solid #dadada;
  }
  .swipe-menu{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .swipe-menu li{
    width:25%;
    font-size:0.6rem;
    text-align:center;
    padding:0.5rem 0;
  }
  .swipe-menu li a{
    display:inline-block;
    color:#666666;
  }
  .swipe-menu li a img{
    width:50%;
    margin-bottom:0.25rem;
  }

  .shop-near{
    margin-top:0.5rem;
    background-color:#fff;
    border-top:1px solid #dadada;
    box-sizing:border-box;
  }
  .shop-near-top{
    height:2.25rem;
    line-height:2.25rem;
    padding:0 0.5rem;
    font-size:0.7rem;
  }
  
</style>