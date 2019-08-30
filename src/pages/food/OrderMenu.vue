<template>
  <div class="menu">
      <div class="menu-subnav">
          <ul>
              <li class="active"><span>热销榜</span></li>
              <li><span>热销榜</span></li>
              <li><span>热销榜</span></li>
              <li><span>热销榜</span></li>
              <li><span>热销榜</span></li>
              <li><span>热销榜</span></li>
              <li><span>热销榜</span></li>
          </ul>
      </div>
      <div class="menu-list">
          <v-menuList></v-menuList>
          <v-menuList></v-menuList>
          <v-menuList></v-menuList>
          <v-menuList></v-menuList>
          <v-menuList></v-menuList>
          <v-menuList></v-menuList>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .menu{
        font-size:0.7rem;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .menu-subnav{
        width:25%;
        background-color:#f0f0f0;
    }
    .menu-subnav li{
        height:3rem;
        line-height:3rem;
        width:100%;
        box-sizing: border-box;
    }
    .menu-subnav li span{
        display:block;
        box-sizing: border-box;
        border-bottom:1px solid #dadada;
        margin:0 0.5rem;
        color:#323232;
    }
    .menu-subnav li:last-child span{
        border-bottom:none;
    }
    .menu-subnav li.active{
        border-left:3px solid darkcyan;
        background-color:#ffffff;
    }
    .menu-list{
        width:75%;
        position:relative;
        
    }
    
</style>