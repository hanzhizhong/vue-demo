<template>
  <div class="comment">
    <div class="shop-total-stars">
      <div class="shop-comment">
        <h2>4.7</h2>
        <p>综合评价<br><span>高于周边商家76.9%</span></p>
      </div>
      <div class="shop-service-list">
        <div class="shop-service">
          服务态度
          <van-rate
            v-model="serviceStar"
            allow-half
            void-icon="star"
            void-color="#eee"
            readonly 
          />
        </div>
        <div class="shop-service">
          菜品评价
          <van-rate
            v-model="dinnerStar"
            allow-half
            void-icon="star"
            void-color="#eee"
            readonly 
          />
        </div>
        <div class="shop-service">
          送达时间<span>分钟</span>
        </div>
      </div>
    </div>
    
    <div class="comment-list">
      <div class="comment-sort">
        <ul>
          <li>全部</li>
          <li>满意</li>
          <li>不满意</li>
          <li>只看有内容的评价</li>
        </ul>
      </div>
    </div>
    <div class="comment-content-container">
      <div class="comment-content whole">
        <div class="comment-template">
          <div class="comment-avator">
            <img src="" alt="">
          </div>
        </div>
      </div>
      <div class="comment-content satisfaction"></div>
      <div class="comment-content despair"></div>
      <div class="comment-content has-content"></div>
    </div>
  </div>
</template>

<script>
import {Rate} from 'vant'
export default {
  components:{
    [Rate.name]:Rate 
  },
  data(){
    return{
      serviceStar:4.7,
      dinnerStar:4.8
    }
  }
}
</script>

<style>

</style>