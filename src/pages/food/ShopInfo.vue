<template>
  <div class="shopinfo">
    <div class="shop shop-activity">
      <h3>活动与属性</h3>
      <ul>
        <li>
          <span>保</span>
          已加入“外卖保”计划，食品安全有保障(APP专享)
        </li>
        <li>
          <span>保</span>
          已加入“外卖保”计划，食品安全有保障(APP专享)
        </li>
        <li>
          <span>保</span>
          已加入“外卖保”计划，食品安全有保障(APP专享)食品安全有保障(APP专享)
        </li>
      </ul>
    </div>
    <div class="shop shop-secure">
      <h3>食品监督安全公示</h3>
      <div class="shop-secure-result">
        <div class="shop-secure-icon"><i class="fa fa-smile-o"></i></div>
        <div>
          <p>监督检查结果：<span>良好</span></p>
          <p>检查日期：</p>
        </div>
      </div>
    </div>
    <div class="shop shop-infomation">
      <h3>商家信息</h3>
      <ul>
        <li>效果演示</li>
        <li>地址：<span>广东省广州市越秀区中山五路219号华联购物中心F1</span></li>
        <li>营业时间：<span>[8:30/20:30]</span></li>
        <li>
          <a href="#">营业执照<i class="fa fa-angle-right"></i></a>
        </li>
        <li>
          <a href="#">餐饮服务许可证<i class="fa fa-angle-right"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.shopinfo{
  font-size:0.7rem;
  background-color:#fafafa;
  
}
.shop{
  padding:0 0.5rem;
  background-color:#fff;
  box-sizing:border-box;
}
.shop h3{
  height:2.2rem;
  line-height:2.2rem;
  box-sizing:border-box;
  border-bottom: 1px solid #dadada;
  font-size:0.8rem;
  color:#323232;
}
.shop-activity{
  border-bottom:1px solid #dadada;
}
.shop-activity ul{
  padding:0.5rem 0;
}
.shop-activity li{
  line-height:1.5rem;
}
.shop-activity li span{
  display:inline-block;
  line-height:1rem;
  padding:0 0.1rem;
  border-radius:0.1rem;
  background-color:#999;
  color:#fff;
  margin-right:0.5rem;
}
.shop-secure{
  margin:0.5rem 0;
  border-bottom: 1px solid #dadada;
  border-top: 1px solid #dadada;
}
.shop-secure-result{
  display:flex;
  flex-direction: row;
  justify-content: center;
  height:3rem;
}
.shop-secure-result .shop-secure-icon{
  font-size:2rem;
  line-height:3rem;
  padding:0 0.5rem;
}
.shop-secure-result p{
  height:1.5rem;
  line-height:1.5rem;
}
.shop-secure-result p span{
  color:green;
}
.shop-infomation{
  border-top:1px solid #dadada;
}
.shop-infomation li{
  line-height: 2.2rem;
  border-bottom:1px solid #dadada;
}
.shop-infomation li:nth-child(2){
  line-height:1.2rem;
  padding:0.5rem 0;
}
.shop-infomation li:last-child{
  border-bottom:none;
}
</style>