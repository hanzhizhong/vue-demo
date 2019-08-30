<template>
  <div class="comment">
    <div class="shop-total-stars">
      <div class="shop-comment">
        <h2>4.7</h2>
        <p>
          综合评价
          <br />
          <span>高于周边商家76.9%</span>
        </p>
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
            size="0.6rem"
            gutter="0"
            color="orange"
          />
          <span class="shop-service-star">4.7</span>
        </div>
        <div class="shop-service">
          菜品评价
          <van-rate
            v-model="dinnerStar"
            allow-half
            void-icon="star"
            void-color="#eee"
            readonly
            size="0.6rem"
            gutter="0"
            color="orange"
          />
          <span class="shop-service-star">4.7</span>
        </div>
        <div class="shop-service">
          送达时间
          <span class="shop-service-arrive">分钟</span>
        </div>
      </div>
    </div>

    <div class="comment-list">
      <div class="comment-sort">
        <ul>
          <li class="active">全部</li>
          <li>满意</li>
          <li>不满意</li>
          <li>只看有内容的评价</li>
        </ul>
      </div>
      <div class="comment-content-container">
        <div class="comment-content whole">
          <div class="comment-template">
            <div class="comment-avator">
              <img src="../../assets/images/default.jpg" alt="用户头像" />
            </div>
            <div class="comment-customer">
              <div class="comment-time">
                <span>username</span>
                <span>209-6-09</span>
              </div>
              <div class="comment-star">
                <van-rate
                v-model="serviceStar"
                allow-half
                void-icon="star"
                void-color="#eee"
                readonly
                size="0.6rem"
                gutter="0"
                color="orange"
              />按时送达
              </div>
              <ul class="comment-food">
                <li>
                  <img src="../../assets/images/pisa.jpeg" alt="食品简略图" />
                  <br />超级至尊比萨-铁盘
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="comment-content satisfaction"></div>
        <div class="comment-content despair"></div>
        <div class="comment-content has-content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { Rate } from "vant";
export default {
  components: {
    [Rate.name]: Rate
  },
  data() {
    return {
      serviceStar: 4.7,
      dinnerStar: 4.8
    };
  }
};
</script>

<style scoped>
.comment {
  font-size: 0.7rem;
  background-color: #fafafa;
}
.shop-total-stars {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0.8rem 0;
  text-align: center;
  border-bottom: 1px solid #dadada;
  box-sizing: border-box;
}
.shop-comment h2 {
  text-align: center;
  font-size: 1.5rem;
  color: orange;
  line-height: 2.2rem;
}
.shop-comment p {
  font-size: 0.8rem;
  color: #323232;
}
.shop-comment p span {
  color: #999999;
  font-size: 0.6rem;
}
.shop-service-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
}
.shop-service {
  display: flex;
  flex-direction: row;
  line-height: 1.2rem;
}
.shop-service .van-rate,
.shop-service-arrive {
  margin: 0 0.5rem;
}
.shop-service-star {
  color: orange;
}
.comment-list {
  margin: 0.5rem 0;
  background-color: #fff;
  border-top: 1px solid #dadada;
  box-sizing: border-box;
}
.comment-sort ul {
  display: flex;
  flex-direction: row;
  height: 2.5rem;
  margin: 0 0.5rem;
  border-bottom: 1px solid #eeeeee;
  justify-content: flex-start;
  align-content: center;
}
.comment-sort li {
  padding: 0 0.2rem;
  background-color: #ccc;
  height: 1.5rem;
  line-height: 1.5rem;
  border-radius: 0.2rem;
  margin: 0.5rem 0.2rem 0 0;
}
.comment-sort .active {
  background-color: darkcyan;
  color: #fff;
}
.comment-content{
  padding:0.5rem 0.5rem;
}
.comment-template{
  width:100%;
  display:flex;
  flex-direction: row;
  justify-content: flex-start;
}
.comment-avator{
  width:12.8%;
}
.comment-avator img{
  width:2.4rem;
  border-radius: 50% 50%;
}
.comment-customer{
  width:87.2%;
  padding-left:0.5rem;
}
.comment-customer .comment-time{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
}
.comment-star {
  display:flex;
  flex-direction: row;
  line-height:1.4rem;
}
.comment-food{
  width:100%;
  display:flex;
  flex-direction: row;
}
.comment-food li{
  width:3.75rem;
  white-space: nowrap;
  overflow:hidden;
  text-overflow: ellipsis;
}
.comment-food li img{
  width:100%;
  
}
</style>