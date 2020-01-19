<template>
  <div class="shop">
      <v-header :title="sortedPageTitle[0]">
        <span slot="left" class="left" @click="goback"><i class="fa fa-angle-left"></i></span>
      </v-header>
      <div class="shop-head-list">
        <van-dropdown-menu>
          <van-dropdown-item title="分类" ref="catetroies">
            <div class="categroy" :style="{height:categroy.length*2+'rem'}">
              <div class="categroy-name" >
                <template v-if="categroy.length>0">
                  <ul>
                    <li @click="checkoutCurrentCategroy(item.name)" v-for="(item,index) in categroy" :key="index" :class="sortedPageTitle[0]==item.name?'active':''">
                      <img :src="item.image_url|imageHandler(baseUrl)">
                      <span class="categroy-current-name">{{item.name}}</span>
                      <span class="categroy-count">{{item.count}}</span>
                      <span><i class="fa fa-angle-right"></i></span>
                    </li>
                  </ul>
                </template>
              </div>
              <div class="categroy-item" >
                <template v-if="categroy.length>0">
                  <div v-for="(item,index) in categroy" :key="index">
                    <ul v-if="sortedPageTitle[0]==item.name">
                      <li @click="chooseCurrentCatetroyItem(obj.id)" v-for="(obj,ind) in item.sub_categories" :key="ind">
                        <img :src="obj.image_url|imageHandler(baseUrl)"><span>{{obj.name}}</span>
                        <span>{{obj.count}}</span>
                      </li>
                    </ul>
                  </div>
                </template>
              </div>
            </div>
          </van-dropdown-item>
          <van-dropdown-item title="排序" v-model="orderBy" :options="orderIds"></van-dropdown-item>
          <van-dropdown-item title="筛选" ref="choose">
            <div class="shop-choice">
                <div class="shop-condition">
                  <p>配送方式</p>
                  <template v-if="deliveryModel.length>0">
                    <span @click.stop="chooseDeliveryModel($event,item)" v-for="(item,index) in deliveryModel" :key="'deliver'+index">
                      <i style="margin-right:0.25rem;line-height:0.5rem;padding:0.125rem;display:inline-block;" class="iconfont icon-fengniao" :style="{color:'#'+item.color}"></i>
                      {{item.text}}
                      </span>
                  </template>
                  <p>商家属性（可以多选）</p>
                  <template v-if="activityAttributes.length>0">
                    <span @click.stop="chooseSupportsId($event,item)" v-for="(item,index) in activityAttributes" :key="'support'+index"><i :style="{color:'#'+item.icon_color,border:`1px solid #${item.icon_color}`}" style="font-style:normal;padding:0.125rem;border-radius:0.1rem;display:inline-block;margin-right:0.25rem;line-height:0.5rem;">{{item.icon_name}}</i>{{item.name}}</span>
                  </template>
                </div>
                <div class="shop-btn">
                  <button>清空</button>
                  <button class="btn-sure" @click="chooseConfirmAndSubmit">确定<i v-if="count>0">{{count}}</i></button>
                </div>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>
      <div class="container">
        <v-shop :shopName="showShopName"></v-shop>
      </div>
  </div>
</template>
 
<script>
import { DropdownMenu, DropdownItem,TreeSelect} from 'vant';
import {mapState} from 'vuex'
export default {
  components:{
    [DropdownMenu.name]:DropdownMenu,
    [DropdownItem.name]:DropdownItem,
    [TreeSelect.name]:TreeSelect,
  },
  filters:{
    imageHandler(val,baseUrl){
      if(val){
        let sImg=val.slice(3);
        let start=val.slice(0,3)
        let sFirst=start.slice(0,1)
        let sSecond=start.slice(1,3);
        if(val.endsWith('png')){
          return baseUrl+'/'+sFirst+'/'+sSecond+'/'+sImg+'.png'
        }
        if(val.endsWith('jpg')){
          return baseUrl+'/'+sFirst+'/'+sSecond+'/'+sImg+'.jpg'
        }
        if(val.endsWith('jpeg')){
          return baseUrl+'/'+sFirst+'/'+sSecond+'/'+sImg+'.jpeg'
        }
        if(val.endsWith('gif')){
          return baseUrl+'/'+sFirst+'/'+sSecond+'/'+sImg+'.gif'
        }
      }else{
        return ''
      }
      
    }
  },
  data(){
    return{
      title:'',
      baseUrl:'https://fuss10.elemecdn.com',

      //默认的排序
      orderBy:4,
      orderIds: [
        { text: '起送价', value: 1 },
        { text: '配送速度', value: 2 },
        { text: '评分', value: 3 },
        { text: '智能排序', value: 4 },
        { text: '距离最近', value: 5 },
        { text: '销售最高', value: 6 }
      ],
      deliveryMode:[],
      supportIds:[],
      restaurantCategoryIds:[],
      isByDeliver:false,
      isBySupport:false,
      choosedClassName:'',
      
    }
  },
  computed:{
    ...mapState(['sortedPageTitle','nearestShop','categroy','deliveryModel','detailAddr','activityAttributes']),

    showShopName(){
      if(this.nearestShop.length==0){
        let restaurant_category_id =this.$route.restaurant_category_id;
        let {latitude,longitude}=this.detailAddr[0]
        this.searchByCondition({restaurant_category_id,latitude,longitude})
      }
      return this.nearestShop
    },
    count(){
      return this.supportIds.length+this.deliveryMode.length;
    }
  },
  watch:{
    orderBy(val){
      let {latitude,longitude}=this.detailAddr[0]
      let order_by=val;
      this.searchByCondition({latitude,longitude,order_by})
    }
  },
  mounted(){
    this.$store.dispatch('getAllCategroy');
    this.$store.dispatch('getAllDeliveryModel');
    this.$store.dispatch('getAllActivityAttributes')
  },
  methods:{
    goback(){
      this.$router.go(-1)
    },
    checkoutCurrentCategroy(val){
      this.$store.dispatch('setMenuListTitle',val)
    },
    //根据筛选条件查询
    searchByCondition(args){
      this.$store.dispatch('getNearestShopName',args)
    },
    //选择的商家属性
    chooseSupportsId(e,item){
      if(this.supportIds.includes(item.id)){
        let num= this.supportIds.indexOf(item.id)
        e.target.firstChild.innerHTML=item.icon_name
        e.target.firstChild.className=""
        this.supportIds.splice(num,1)
      }else{
        e.target.firstChild.innerHTML='';
        e.target.firstChild.className="fa fa-check"
        this.supportIds.push(item.id)
      }
      
    },
    //选择的配送模式
    chooseDeliveryModel(e,item){
      if(this.deliveryMode.includes(item.id)){
        let num= this.supportIds.indexOf(item.id)
        e.target.firstChild.className='iconfont icon-fengniao'
        this.deliveryMode.splice(num,1)
      }else{
        e.target.firstChild.className="fa fa-check"
        this.deliveryMode.push(item.id)
      }
    },
    //选择当前的分类
    chooseCurrentCatetroyItem(ids){
      this.restaurantCategoryIds=[];
      this.restaurantCategoryIds.push(ids)
      let {latitude,longitude}=this.detailAddr[0]
      this.searchByCondition({latitude,longitude,restaurant_category_ids:this.restaurantCategoryIds})
      this.$refs.catetroies.toggle()
    },
    //确定提交
    chooseConfirmAndSubmit(){
      let {delivery_mode,support_ids}={delivery_mode:this.deliveryMode,support_ids:this.supportIds}
      let {latitude,longitude}=this.detailAddr[0]
      this.searchByCondition({latitude,longitude,delivery_mode,support_ids})
      this.$refs.choose.toggle()
    }
    
  }
}
</script>

<style scoped>
  .container{
    position:absolute;
    left:0;
    top:4.2rem;
    right:0;
    bottom:0;
    background-color:#fafafa;
    overflow:auto;
  }
  .shop-head-list{
    position:absolute;
    top:2.2rem;
    left:0;
    right:0;
    height:2rem;
    
  }
  .shop-head-list .van-dropdown-menu{
    height:2rem;
    font-size:0.7rem;
    box-sizing: border-box;
    border-top:1px solid #dadada;
    border-bottom:1px solid #dadada;
  }
  .shop-head-list .van-tree-select .van-ellipsis{
    font-weight: normal;
  }
  .categroy{
    display:flex;
    overflow:hidden;
  }
  .categroy img{
    width:0.9rem;
    height:auto;
    max-height: 0.9rem;
  }
  .categroy li{
    height:2rem;
    padding:0 0.5rem;
    display:flex;
    justify-content: space-between;
    align-items:center;
  }
  .categroy-name{
    flex:1;
    background-color:#f5f5f5;
  }

  .categroy-item{
    flex:1;
    padding:0 0.5rem;
    overflow-y:scroll;
  }
  .categroy-item li{
    border-bottom:1px solid #dedede;
  }
  .active{
    background-color:#fff;
  }
  .categroy-count{
    height:1rem;
    padding:0 0.5rem;
    background-color:#dadada;
    border-radius:0.5rem;
    font-size:0.5rem;
    line-height:1rem;
    margin-right:0.5rem;
  }
  .categroy-current-name{
    flex:2;
    padding-left:0.5rem;
  }
  .shop-condition{
    padding:0 0.5rem;
  }
  .shop-choice p{
    padding:0.5rem 0;
  }
  .shop-choice span{
    padding:0.25rem 0.8rem;
    border:1px solid #dedede;
    background-color:#fff;
    border-radius:0.1rem;
    font-size:0.4rem;
    display:inline-block;
    min-width:3.5rem;
    margin-right:0.5rem;
    margin-bottom:0.5rem;
  }
  .shop-btn{
    display:flex;
    justify-content:space-between;
    padding:0.5rem 0.25rem;
  }
  .shop-btn button{
    border:none;
    background-color:#dedede;
    flex:1;
    height:2rem;
    margin:0 0.25rem;
    border-radius:0.25rem;
  }
  .shop-btn .btn-sure{
    background-color:darkcyan;
    color:#fff;
  }
</style>