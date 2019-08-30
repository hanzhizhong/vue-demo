<template>
  <div class="shop">
      <v-header>
        <span slot="left" class="left"><i class="fa fa-angle-left"></i></span>
      </v-header>
      <div class="shop-head-list">
        <van-dropdown-menu>
          <van-dropdown-item title="分类">
            <van-tree-select
              :items="items"
              
            />
          </van-dropdown-item>
          <van-dropdown-item title="排序" v-model="sortLine" :options="option"></van-dropdown-item>
          <van-dropdown-item title="筛选">
            <div class="shop-choice">
              <form action="#" method="post">
                <div class="shop-deliver">
                  配送方式<br>
                  <button>蜂鸟专送</button>
                </div>
                <div class="shop-property">
                  商家属性（可以多选）<br>

                  <button>蜂鸟专送</button>
                  <button>蜂鸟专送</button>
                  <button>蜂鸟专送</button>
                </div>
                <button>清空</button>
                <button>确定</button>
              </form>
            </div>
          </van-dropdown-item>
        </van-dropdown-menu>
      </div>
      <div class="container">
        <v-shop></v-shop>
      </div>
  </div>
</template>

<script>
import { DropdownMenu, DropdownItem,TreeSelect } from 'vant';
export default {
  components:{
    [DropdownMenu.name]:DropdownMenu,
    [DropdownItem.name]:DropdownItem,
    [TreeSelect.name]:TreeSelect,
  },
  data(){
    return{
      items:[
        {
          // 导航名称
          text: '所有城市',
          // 该导航下所有的可选项
          children: [
            {
              // 名称
              text: '温州',
              // id，作为匹配选中状态的标识
              id: 1,
            },
            {
              text: '杭州',
              id: 2
            }
          ]
        }
      ],

      //默认的排序
      sortLine:0,
      option: [
        { text: '智能排序', value: 0 },
        { text: '距离最近', value: 1 },
        { text: '销售最高', value: 2 }
      ],
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
</style>