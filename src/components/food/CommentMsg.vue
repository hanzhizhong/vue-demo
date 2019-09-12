<template>
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
        <li>
          <img src="../../assets/images/pisa.jpeg" alt="食品简略图" />
          <br />超级至尊比萨-铁盘
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Rate } from "vant";
export default {
    components:{
        [Rate.name]:Rate,
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
.comment-template {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  box-sizing:border-box;
  border-bottom:1px solid #dadada;
  padding:0.8rem 0;
}
.comment-avator {
  width: 12.8%;
}
.comment-avator img {
  width: 2.4rem;
  border-radius: 50% 50%;
}
.comment-customer {
  width: 87.2%;
  padding-left: 0.5rem;
}
.comment-customer .comment-time {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.comment-star {
  display: flex;
  flex-direction: row;
  line-height: 1.4rem;
}
.comment-food {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
.comment-food li {
  width: 3.75rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.5rem;
  color: #666666;
  margin-right: 0.5rem;
}
.comment-food li img {
  width: 100%;
}
</style>