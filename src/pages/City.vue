<template>
  <div class="cities">
      <v-header>
          <a href="#" slot="right" class="right">登录|注册</a>
      </v-header>
      <div class="container">
            <ul class="local-city">
                <li>
                <span>当前定位城市:</span><b>定位不准时，请在城市列表中选择</b>
                </li>
                <li @click="getShopName(1)">
                    <!-- <router-link :to="{name:'searchCity',params:{aid:'1'}}" class="current-addr">上海</router-link> -->
                    <span class="current-addr">上海</span>
                    <span><i class="fa fa-chevron-right"></i></span>
                </li>
            </ul>
            <div class="city">
                <div class="city-title">热门城市</div>
                <ul class="city-list hot">
                    <li>
                        <a href="#">上海</a>
                        <a href="#">上海</a>
                        <a href="#">上海</a>
                        <a href="#">上海</a>
                        <a href="#">上海</a>
                        <a href="#">上海</a>
                        <a href="#">上海</a>
                        <a href="#">上海</a>
                    </li>
                </ul>
            </div>
            <div class="all-city">
                <div class="city">
                    <div class="city-title">A <span>(按字母表排序)</span></div>
                    <ul class="city-list">
                        <li>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                        
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                        </li>
                        
                    </ul>
                </div>
                <div class="city">
                    <div class="city-title">A <span>(按字母表排序)</span></div>
                    <ul class="city-list">
                        <li>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                        
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                        </li>
                        
                    </ul>
                </div>
                <div class="city">
                    <div class="city-title">A <span>(按字母表排序)</span></div>
                    <ul class="city-list">
                        <li>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                        
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                        </li>
                        
                    </ul>
                </div>
                <div class="city">
                    <div class="city-title">A <span>(按字母表排序)</span></div>
                    <ul class="city-list">
                        <li>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                        
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                        </li>
                        
                    </ul>
                </div>
                <div class="city">
                    <div class="city-title">A <span>(按字母表排序)</span></div>
                    <ul class="city-list">
                        <li>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                        
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                        </li>
                        
                    </ul>
                </div>
                <div class="city">
                    <div class="city-title">A <span>(按字母表排序)</span></div>
                    <ul class="city-list">
                        <li>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                        
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                            <a href="#">上海</a>
                        </li>
                        
                    </ul>
                </div>
                
            </div>
      </div>
  </div>
</template>

<script>
export default {
    methods:{
        getShopName(aid){
            this.$router.push({name:'searchCity',params:{aid:aid}})
        }
    }
}
</script>

<style scoped>
    .local-city{
        font-size:0.6rem;
        border-top:1px solid #dadada;
        box-sizing: border-box;
        background-color:#fff;
    }
    .local-city li{
        height:2.25rem;
        line-height:2.25rem;
        display:flex;
        flex-direction: row;
        border-bottom:1px solid #dadada;
        box-sizing: border-box;
        justify-content: space-between;
        padding:0 0.4rem;
    }
    .local-city span{
        font-size:0.7rem;
    }
    .local-city b{
        font-size:0.5rem;
        color:#ccc;
    }
    .local-city .current-addr{
        font-size:0.8rem;
        color:cornflowerblue;
    }

    .city{
        margin-top:0.5rem;
        background-color:#fff;
        font-size:0.7rem;
        box-sizing: border-box;
        border-top:1px solid #dadada;
    }
    .city-title span{
        font-size:0.5rem;
    }
    .city-title{
        height:2rem;
        line-height:2rem;
        padding:0 0.5rem;
        border-bottom:1px solid #dadada
    }
    .city-list li{
        width:100%;
    }
    .city-list li a{
        width:25%;
        height:2.25rem;
        line-height:2.25rem;
        display:inline-block;
        text-align:center;
        border-right:1px solid #dadada;
        border-bottom:1px solid #dadada;
        color:#666666;
        box-sizing: border-box;
    }
    .city-list li a:nth-child(4n){
        border-right:none;
    }
    .hot li a{
        color:cornflowerblue;
    }
</style>