<template>
  <div class="home">
      <v-header :title="detailAddr.length>0?detailAddr[0].address:''">
        <router-link :to="{name:'search'}" slot="left" class="left"><i class="fa fa-search"></i></router-link>
        <a href="#" slot="right" class="right">登录|注册</a>
      </v-header>
      
      <div class="container">
          <van-swipe class="menu-fast" indicator-color="darkcyan">
            <van-swipe-item class="swipe-menu" v-for="(item,index) in list" :key="index">
              <div class="menu-list" v-for="(data,index) in item" :key="index">
                <router-link :to="{name:'shop',query:{restaurant_category_id:data.id}}" @click.native="menuListChange(data.title)">
                  <img :src=baseURL+data.image_url :alt="data.description">
                  <br>
                  {{data.title}}
                </router-link>
              </div>
            </van-swipe-item>
          </van-swipe>
          <div class="shop-near">
            <div class="shop-near-top"><i class="fa fa-archive"></i>附近商家</div>
            <v-shop :shopName="nearestShop"></v-shop>
          </div>
      </div>
      
  </div>
</template>

<script>
import {Swipe,SwipeItem } from 'vant'
import {mapState} from 'vuex'
export default {
  components:{
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
  }    ,
  computed:{
    ...mapState(['detailAddr','foodSwipeList','nearestShop']),
  },
  watch:{
    foodSwipeList(value){
      this.$nextTick(()=>{
        this.foodMenuList() 
      })
    },
    /* detailAddr:{
      handle:function(n,o){
        console.log('sss')
      },
      deep:true
    } */
  },
  data(){
    return{
      baseURL:'https://fuss10.elemecdn.com/',
      list:[]
    }
  },
  methods:{
    //获取轮播图的数据
    getFoodSort(){
      this.$store.dispatch('getFoodSortName')
    },
    //设置轮播图的页数和每页的数据
    foodMenuList(){
      const arr=[]
      const {foodSwipeList} = this 
      let minList=[]
      foodSwipeList.forEach((item,index)=>{
        if(minList.length===8){
          minList=[]
        }
        if(minList.length===0){
          arr.push(minList)
        }
        minList.push(item)
      })
      this.list=arr ;
    },
    //获取附近商家的店铺信息
    getNearestShop(){
      try{
        const {latitude,longitude}={latitude:this.detailAddr[0].latitude,longitude:this.detailAddr[0].longitude}
      this.$store.dispatch('getNearestShopName',{latitude,longitude})
      }catch(e){
        this.$router.push({name:'city'})
      }
      
    },
    //页面跳转到分类排序
    menuListChange(args){
      this.$store.dispatch('setMenuListTitle',args)
    },
  },
  mounted(){
    this.getFoodSort();
    this.getNearestShop()
  },
  
}
</script>

<style scoped>
  .container{
    padding-bottom:2.45rem;
  }
  .menu-fast{
    padding-bottom:1rem;
    border-bottom:1px solid #dadada;
    background-color:#fff;
    box-sizing: border-box;
    border-top:1px solid #dadada;
  }
  .swipe-menu{
    width:100%;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .swipe-menu .menu-list{
    width:25%;
    font-size:0.6rem;
    text-align:center;
    padding:0.5rem 0;
  }
  .swipe-menu .menu-list a{
    display:inline-block;
    color:#666666;
  }
  .swipe-menu .menu-list a img{
    width:50%;
    margin-bottom:0.25rem;
  }

  .shop-near{
    margin-top:0.5rem;
    background-color:#fff;
    border-top:1px solid #dadada;
    box-sizing:border-box;
  }
  .shop-near-top{
    height:2.25rem;
    line-height:2.25rem;
    padding:0 0.5rem;
    font-size:0.7rem;
  }
  
</style>