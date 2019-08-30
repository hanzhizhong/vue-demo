<template>
  <ul>
    <li v-for="n in 10" :key="n" @click="showShopPage(n)">
      <div class="shop-list">
        <div class="shop-pic">
          <img src="../../assets/images/shop.jpg" alt="商家的展示图片" />
        </div>
        <div class="shop-title">
          <h3>
            <span>品牌</span>效果演示
          </h3>
          <div class="shop-stars">
            <van-rate
              class="star-ico"
              v-model="stars"
              allow-half
              void-icon="star"
              void-color="#eee"
              gutter="0"
              readonly
            />
            <span>4.7</span> 月售106单
          </div>
          <div class="shop-deliver">&yen;20起送 / 配送费用约&yen;5</div>
        </div>
        <div class="shop-sign">
          <p>保 准 票</p>
          <div class="shop-tag">
            <span class="tag-deliver">蜂鸟专送</span>
            <span class="tag-arrive">准时达</span>
          </div>
          <div class="shop-deliver-load">
            10公里 /
            <span class="deliver-time">40分钟</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import {Rate} from 'vant'
export default {
  components:{
    [Rate.name]:Rate
  },
  data(){
    return{
      stars:4.7,
    }
  },
  methods:{
    showShopPage(n){
      this.$router.push('/food/menu')
    }
  }
};
</script>

<style scoped>
.shop-list {
  padding: 0.8rem 0.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #dadada;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.shop-list .shop-pic {
  width: 3.2rem;
  height: 3.2rem;
  display: inline-block;
  overflow: hidden;
}
.shop-pic img {
  width: 100%;
}
.shop-title {
  flex-grow: 2;
  width: 50%;
  padding-left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.shop-title h3 {
  width: 100%;
  font-size: 0.8rem;
  color: #323232;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.shop-title h3 span {
  display: inline-block;
  background-color: gold;
  border-radius: 0.1rem;
  font-size: 0.6rem;
  margin-right: 0.4rem;
}
.shop-title .shop-stars {
  height: 1.2rem;
  line-height: 1.2rem;
}
.shop-title .shop-stars,
.shop-title .shop-deliver {
  font-size: 0.3rem;
}
.shop-title .shop-stars .van-rate__icon {
  font-size: 0.6rem;
}
.shop-title .star-ico {
  float: left;
}
.shop-sign {
  font-size: 0.3rem;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.shop-sign p {
  font-size: 0.3rem;
  text-align: right;
}
.shop-sign .shop-tag {
  font-size: 0.3rem;
  text-align: right;
  transform: scale(0.8);
  transform-origin: right center;
}
.shop-sign .tag-deliver {
  background-color: cadetblue;
  display: inline-block;
  border-radius: 0.1rem;
  margin-right: 0.1rem;
  padding: 0 0.2rem;
  color: #ffffff;
}
.shop-sign .tag-arrive {
  background-color: #fff;
  border: 1px solid cadetblue;
  color: cadetblue;
  box-sizing: border-box;
  display: inline-block;
  border-radius: 0.1rem;
}
.shop-deliver-load {
  color: #999999;
}
.shop-deliver-load span {
  color: cadetblue;
}
</style>