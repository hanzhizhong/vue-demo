<template>
  <div class="news">
      <v-header :title=searchAddr.name>
        <a href="#" slot="left" class="left" @click="goback"><i class="fa fa-angle-left"></i></a>
      </v-header>
      <div class="container">
        <van-search class="search-box"
          v-model="addr"
          placeholder="请输入学校或商务楼地址"
          show-action
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
        <div v-if="isShowSearchResult" class="search-result">
          <ul v-if="searchAddrMsg.length>0">
            <li v-for="(item,index) in searchAddrMsg" :key="index" @click="changePage(item.geohash,item)">
              <div class="search-address-name">{{item.name}}</div>
              <span>{{item.address}}</span>
            </li>
          </ul>
          <div class="search-result-none" v-else>没有当前的搜索结果</div>
        </div>

        <div class="search-history" v-if="!isShowSearchResult">
          <div class="search-title">搜索历史</div>
          <div class="search-history-result search-result" v-if="searchAddrHistory.length>0">
              <ul>
                <li v-for="(item,index) in searchAddrHistory" :key="index" @click="changePage(item.geohash,item)">
                  <div class="search-address-name">{{item.name}}</div>
                  <span>{{item.address}}</span>
                </li>
              </ul>
              <div class="clear-btn">
                <van-button color="darkcyan" size="large" @click="clearAddrHistory">清空历史</van-button>
              </div>
          </div>
          
          
        </div>
      </div>
  </div>
</template>

<script>
import {Search,Button} from 'vant'
import {mapState} from 'vuex'
import session from '../../utils/search_addr_history'
export default {
  components:{
    [Search.name]:Search,
    [Button.name]:Button,
  },
  computed:{
    ...mapState(['searchAddr','searchAddrMsg','detailAddr','searchAddrHistory'])
  },
  data(){
    return{
      addr:'',
      isShowSearchResult:false,
    }
  },

  methods:{
    onSearch(){
      const aid=this.$route.params.aid 
      this.isShowSearchResult=true;
      this.$store.dispatch('getSearchAddressName',{city_id:aid,keyword:this.addr})
    },
    changePage(geohash,item){
      this.$store.dispatch('getDetailAddressByGeohash',geohash)
      this.$store.dispatch('saveSearchHistoryAddress',item)
      this.$router.push({name:'home',query:{latitude:item.latitude,longitude:item.longitude}})
    },
    goback(){
      this.$router.go(-1)
    },
    clearAddrHistory(){
      this.$store.dispatch('clearSearchAddr')
    }
  },
  mounted(){
    this.$store.dispatch('getSearchAddressName',{city_id:this.$route.params.aid})
  }
}
</script>

<style scoped>
  
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