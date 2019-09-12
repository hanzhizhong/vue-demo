<template>
  <div class="search-shop">
      <v-header :title="title">
      </v-header>
      <div class="container">
        <van-search class="search-box"
          v-model="showname"
          placeholder="请输入美食或商店名称"
          show-action
          shape="round"
          @search="onSearch"
          @clear="onClear"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>

        <div v-if="isShowSearchResult" class="search-result">
          <!-- <ul v-if="searchShopName.length>0">
            <li v-for="(item,index) in searchShopName" :key="index" @click="changePage(item.geohash,item)">
              <div class="search-address-name">{{item.name}}</div>
              <span>{{item.address}}</span>
            </li>
          </ul> -->
          <v-shop v-if="searchShopName.length>0" :shopName="searchShopName"></v-shop>
          <div class="search-result-none" v-else>没有当前的搜索结果</div>
        </div>
        
        <div class="search-history" v-if="!isShowSearchResult">
          <div class="search-title">搜索历史</div>
          <div class="search-history-result search-result" v-if="searchShopHistory.length>0">
              <ul>
                <li v-for="(item,index) in searchShopHistory" :key="index" @click="searchShopByName(item)">
                  <div class="search-address-name">{{item}}</div>
                </li>
              </ul>
              <div class="clear-btn">
                <van-button color="darkcyan" size="large" @click="clearShopHistory">清空历史</van-button>
              </div>
          </div>
          
          
        </div>
      </div>

  </div>
</template>

<script>
import {Search,Toast,Button} from 'vant'
import {mapState} from 'vuex'
import session from '../utils/search_addr_history'
export default {
  components:{
    [Search.name]:Search,
    [Toast.name]:Toast,
    [Button.name]:Button,
  },
  computed:{
    ...mapState(['searchShopName','searchShopHistory','detailAddr']),
    
  },
  data(){
    return{
      showname:'',
      title:'搜索',
      isShowSearchResult:false
    }
  },
  methods:{
    onSearch(){
      const geohash=this.detailAddr[0].geohash
      const keyword=this.showname
      if(keyword===''){
        Toast({
          message:'美食或商店名不能为空',
          duration:2000
        })
        return false 
      }
      this.isShowSearchResult=true
      this.$store.dispatch('getSearchShopName',{geohash,keyword})
      //保存搜索商店或美食的名称
      this.$store.dispatch('savaSearchShopHistory',this.showname)
    },
    onClear(){
      this.isShowSearchResult=false;
    },
    goback(){
      this.$router.go(-1)
    },
    //历史记录中搜索店铺信息
    searchShopByName(item){
      const geohash=this.detailAddr[0].geohash
      const keyword=item
      this.showname=item
      this.isShowSearchResult=true
      this.$store.dispatch('getSearchShopName',{geohash,keyword})
    },
    clearShopHistory(){
      this.$store.dispatch('clearSearchShopHistory')
    }
  },
}
</script>

<style scoped>
.container{
    padding-bottom:2.45rem;
  }
 .search-box{
    box-sizing: border-box;
    border-top:1px solid #dadada;
    border-bottom:1px solid #dadada;
  }
  .search-history{
    margin-top:0.5rem;
  }
  .search-title{
    font-size:0.6rem;
    padding:0 0.5rem;
  }
  .search-result{
    background-color:#fff;
    font-size:0.7rem;
    color:#323232;
  }
  .search-result-none{
    height:2.2rem;
    box-sizing:border-box;
    border-bottom: 1px solid #dadada;
    line-height:2.2rem;
    padding:0 0.5rem;
  }
  .search-result li{
    box-sizing: border-box;
    border-bottom:1px solid #dadada;
    padding:0.5rem 0.5rem;
    color:#999999;
  }
  .search-address-name{
    font-size:0.8rem;
    color:#323232;
    height:2rem;
    line-height:2rem;
  }
  .search-history-result{
    box-sizing:border-box;
    border-top:1px solid #dadada;
    margin-top:0.5rem;
    background-color: #fff;
    padding-bottom:0.5rem;
  }
  .search-history-result .clear-btn{
    padding:0 0.5rem;
    margin-top:0.5rem;
  }
</style>