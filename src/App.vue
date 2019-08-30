<template>
  <div id="app">
    <router-view></router-view>
    <v-footer v-if="$route.meta.showPage"></v-footer>
  </div>
</template>

<script>

export default{
  data(){
    return{

    }
  },
  

}
</script>

<style>
  .container{
    position:absolute;
    left:0;
    top:2.2rem;
    right:0;
    bottom:0;
    background-color:#fafafa;
    overflow:auto;
  }
  
</style>