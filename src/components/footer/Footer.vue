<template>
    <div class="footer">
      <ul class="footer-nav">
        <li><router-link :to="{name:'home'}" :class="this.$route.name=='home'?'active':''"><i class="iconfont icon-changyonglogo40"></i><br/>外卖</router-link></li>
        <li><router-link :to="{name:'search'}" :class="this.$route.name=='search'?'active':''"><i class="iconfont icon-sousuo"></i><br/>搜索</router-link></li>
        <li><router-link :to="{name:'order'}" :class="this.$route.name=='order'?'active':''"><i class="iconfont icon-74wodedingdan"></i><br/>订单</router-link></li>
        <li><router-link :to="{name:'profile'}" :class="this.$route.name=='profile'?'active':''"><i class="iconfont icon-wode"></i><br/>我的</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer{
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    height:2.45rem;
    background-color:#fff;
    
  }
  .footer-nav{
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items:center;
    height:2.45rem;
    box-sizing: border-box;
    border-top:1px solid #dadada;
  }
  .footer-nav li{
    width:25%;
  }
  .footer-nav li a{
    width:100%;
    display:inline-block;
    text-align:center;
    font-size:0.4rem;
    color:#666666;
  }
  .footer-nav li a.active{
    color:darkcyan;
  }
  .footer-nav li .iconfont{
    font-size:1.1rem;
  }
</style>