<template>
  <div class="choice-calc">
    <template v-if="num!=0">
      <span @click="minus2CargoMenu">
      <i class="iconfont icon-minus"></i>
    </span>
    <div class="choice-calc-result">{{num}}</div>
    </template>
    
    <span @click="add2CargoMenu">
      <i class="iconfont icon-puls"></i>
    </span>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props:['currentItem'],
  computed:{
    ...mapState(['count','detailAddr']),
  },
  data(){
    return {
      num:0.00
    }
  },
  methods:{
    add2CargoMenu(){
      this.num+=1;
     let geohash=this.detailAddr[0].geohash
     //必传的参数
     let restaurant_id=this.currentItem.restaurant_id;
     
     let [{attrs,extra,id,name,packing_fee,price,quantity,sku_id,specs,stock}]=[{attrs:this.currentItem.attrs,extra:{},id:this.currentItem.specfoods[0].food_id,name:this.currentItem.specfoods[0].name,packing_fee:this.currentItem.specfoods[0].packing_fee,price:this.currentItem.specfoods[0].price,quantity:this.num,sku_id:this.currentItem.specfoods[0].sku_id,specs:this.currentItem.specfoods[0].specs,stock:this.currentItem.specfoods[0].stock}];
      let entities=[{attrs,extra,id,name,packing_fee,price,quantity,sku_id,specs,stock}]
      console.log('mmm',{restaurant_id,geohash,entities})
      this.$store.dispatch('add2CargoMenu',{restaurant_id,geohash,entities})
    },
    //移除
    minus2CargoMenu(){
      if(this.num>0){
        this.num-=1
      }else{
        this.num=0
      }
    }
  }
};
</script>

<style scoped>
.choice-calc {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  height: 1.2rem;
  line-height: 1.2rem;
}
.choice-calc span i {
  font-size: 1rem;
}
.choice-calc span,
.choice-calc-result {
  width: 1.2rem;
  text-align: center;
}
.choice-calc span {
  color: darkcyan;
}
</style>