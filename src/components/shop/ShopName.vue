<template>
  <ul v-if="shopName.length>0">
    <li v-for="(item,index) in shopName" :key="index" @click="showShopPage">
      <div class="shop-list">
        <div class="shop-pic">
          <img :src=baseURL+item.image_path alt="商家的展示图片" />
        </div>
        <div class="shop-title">
          <h3>
            <span>品牌</span>{{item.name}}
          </h3>
          <div class="shop-stars">
            <van-rate
              class="star-ico"
              v-model="item.rating"
              allow-half
              void-icon="star"
              void-color="#eee"
              gutter="0"
              readonly
            />
            <span>{{item.rating}}</span> 月售{{item.recent_order_num}}单
          </div>
          <div class="shop-deliver">&yen;{{item.float_minimum_order_amount}}起送 / 配送费用约&yen;{{item.float_delivery_fee}}</div>
        </div>
        <div class="shop-sign">
          <p><span v-for="(data,index) in item.supports" :key="index">&nbsp;{{data.icon_name}}</span></p>
          <div class="shop-tag">
            <span class="tag-deliver" >{{getText(item.delivery_mode)}}</span>
            <span class="tag-arrive" v-for="(data,index) in item.supports" :key="index" v-if="data.id===9">{{data.name}}</span>
          </div>
          <div class="shop-deliver-load">
            {{item.distance}}/<span class="deliver-time">{{item.order_lead_time}}</span>
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
  props:{
    shopName:Array,
  },
  data(){
    return{
      //stars:4.7,
      baseURL:'https://elm.cangdu.org/img/',
    }
  },
  methods:{
    showShopPage(){
      this.$router.push('/food/menu')
    },
    getText(args){
      try{
        let ret=JSON.stringify(args)
        ret=JSON.parse(ret)
        return ret.text
      }catch(e){
        return ''
      }
    }
  },
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
  width: 17.6%;
  display: inline-block;
  overflow: hidden;
  font-size:0.6rem;
}
.shop-list .shop-pic img {
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
  text-align:right;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.shop-deliver-load span {
  color: cadetblue;
}
</style>