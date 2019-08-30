<template>
  <div class="search-shop">
      <v-header>
      </v-header>
      <div class="container">
        <van-search class="search-box"
          v-model="showname"
          placeholder="请输入美食或商店名称"
          show-action
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>

        <div class="search-history">
          <div class="search-title">搜索历史</div>

        </div>
      </div>
  </div>
</template>

<script>
import {Search} from 'vant'
export default {
  components:{
    [Search.name]:Search
  },
  data(){
    return{
      showname:''
    }
  },
  methods:{
    onSearch(){
      console.log('sss')
    },
    goback(){
      this.$router.go(-1)
    }
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
</style>