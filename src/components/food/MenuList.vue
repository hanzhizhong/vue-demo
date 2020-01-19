<template>
  <ul>
    <li>
      {{sss}}
      <div class="menu-list-title">
        <b>{{item.name}}</b>{{item.description}}
      </div>
      <ul class="menu-list-content">
        <template v-if="item.foods.length>0">
          <li v-for="(obj,ind) in item.foods" :key="ind">
          <div class="menu-pic">
            
              <template v-if="obj.attributes.length>0 && obj.attributes[0]!=null">
                <span class="menu-icon" v-for="(it,inu) in obj.attributes" :key="inu" :style="{backgroundColor:'#'+it.icon_color,color:'#fff'}">
                {{it.icon_name}}
                </span>
              </template>
            
            <img :src="baseUrl+obj.image_path||''" alt="食品简图" />
          </div>
          <div class="menu-list-intro">
            <h3>
              <span class="menu-name">{{obj.name}}</span>
            
              <template v-if="obj.activity">
                <span class="menu-activity" :style="{color:'#'+obj.activity.image_text_color,borderColor:'#'+obj.activity.icon_color}">
                {{obj.activity.image_text}}
                </span>
              </template>
            
            </h3>
            <p>{{obj.description}}</p>
            <p>月售{{obj.month_sales}}份&nbsp;&nbsp;好评率{{obj.satisfy_rate}}%</p>
            <div class="menu-price">
              <span>
                <b>&yen;{{obj.specfoods[0].price}}</b>起
              </span>
              <v-calcResult :currentItem="obj"></v-calcResult>
            </div>
          </div>
        </li>
        </template>
        
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  props:['item'],
  data(){
    return {
      baseUrl:'http://elm.cangdu.org/img/'
    }
  },
  computed:{
    sss(){
      console.log(this.item)
      return ''
    }
  }
};
</script>

<style scoped>
li{list-style:none;}
.menu-list-title {
  height: 2rem;
  line-height: 2rem;
  background-color: #f0f0f0;
  padding: 0 0.5rem;
  box-sizing: border-box;
  border-left: 2px solid #dadada;
  color: #999999;
  font-size: 0.5rem;
}
.menu-list-title b {
  font-size: 0.8rem;
  color: #666666;
  padding-right: 0.5rem;
}

.menu-list-content li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  border-bottom: 1px solid #eeeeee;
  box-sizing: border-box;
}
.menu-pic {
  width: 25%;
  overflow: hidden;
  position:relative;
}
.menu-pic .menu-icon{
  position:absolute;
  left:-0.9rem;
  top:0.2rem;
  display:inline-block;
  width:3rem;
  height:1rem;
  font-size:0.4rem;
  text-align:center;
  line-height:1rem;
  background-color:aqua;
  overflow:hidden;
  transform-origin:center center;
  transform:rotate(-45deg);
  
}
.menu-pic img {
  width: 100%;
  height: auto;
}
.menu-list-intro {
  width: 75%;
  padding-left: 0.5rem;
}
.menu-list-intro h3 {
  font-size: 0.8rem;
  color: #323232;
  line-height: 1.5rem;
  height: 1.5rem;
  text-align:left;
  display:flex;
  align-items:center;
  justify-content: space-between;
}
.menu-list-intro p:nth-child(2) {
  font-size: 0.6rem;
  text-align: justify;
  color: #999999;
  line-height: 0.75rem;
}
.menu-list-intro p:nth-child(3) {
  font-size: 0.6rem;
  text-align: justify;
  color: #323232;
  line-height: 1.5rem;
}
.menu-price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 1.2rem;
  line-height: 1.2rem;
}
.menu-price b {
  font-size: 1rem;
  color: orange;
  padding-right: 0.8rem;
}
.menu-activity{
  font-size:0.4rem;
  font-weight:normal;
  border-width:1px;
  border-style:solid;
  line-height:0.6rem;
  padding:0.1rem 0.2rem;
  border-radius:0.1rem;
  max-width:2rem;
  text-overflow:ellipsis;
  white-space: nowrap;
  overflow:hidden;
}
.menu-name{
  max-width:4rem;
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap;
  
}
</style>