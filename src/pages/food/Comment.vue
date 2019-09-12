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
        <ul @click="commentTabShow($event)" ref="comm">
          <li class="active" data="all">全部</li>
          <li data="satisfaction">满意</li>
          <li data="despair">不满意</li>
          <li data="hasContent">只看有内容的评价</li>
        </ul>
      </div>
      <div ref="commentContentContainer">
        <div class="comment-content" v-if="whole">
          <v-comment></v-comment>
          <v-comment></v-comment>
          <v-comment></v-comment>
          <v-comment></v-comment>
        </div>
        <div class="comment-content" v-if="satisfaction">
          <v-comment></v-comment>
          <v-comment></v-comment>
          <v-comment></v-comment>
        </div>
        <div class="comment-content" v-if="despair">
          <v-comment></v-comment>
          <v-comment></v-comment>
        </div>
        <div class="comment-content" v-if="hasContent">
          <v-comment></v-comment>
        </div>
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
      dinnerStar: 4.8,
      whole:true,
      satisfaction:false,
      despair:false,
      hasContent:false,
    };
  },
  methods:{
    commentTabShow(event){
      if(event.toElement.nodeName==='UL'){
        return false 
      }else{
        console.log(event)
        const aLi=this.$refs.comm.children;
        for(let item of aLi){
          item.removeAttribute('class')
        }
        this.whole=false;
        this.satisfaction=false;
        this.despair=false;
        this.hasContent=false;
        event.target.setAttribute('class','active')
        const sVal=event.target.getAttribute('data')
        switch(sVal){
          case 'all':
            this.whole=true;
            break;
          case 'satisfaction':
            this.satisfaction=true;
            break;
          case 'despair':
            this.despair=true;
            break;
          case 'hasContent':
            this.hasContent=true;
            break;
        }
      }
      
    }
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
  margin-top: 0.5rem;
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
  padding:0 0.5rem;
}

</style>