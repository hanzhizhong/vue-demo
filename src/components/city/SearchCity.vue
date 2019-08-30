<template>
  <div class="news">
      <v-header>
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
      addr:''
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