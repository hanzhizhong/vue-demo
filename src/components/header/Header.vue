<template>
  <div class="header">
    <slot name="left"></slot>
    <span>{{title}}</span>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  props:{
    title:String,
  },
  data(){
    return{

    }
  }
};
</script>

<style scoped>
.header {
  height: 2.2rem;
  background-color: darkcyan;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-size: 0.8rem;
  line-height: 2.2rem;
  text-align: center;
  color: #fff;
}
.header span{
  width:50%;
  display:inline-block;
  overflow:hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.right {
  position: absolute;
  right: 0.5rem;
  font-size: 0.6rem;
  color: #ffffff;
}

.left {
  display: inline-block;
  width: 1.1rem;
  height: 1.1rem;
  line-height: 1.1rem;
  font-size: 1.1rem;
  position: absolute;
  left: 0.5rem;
  top: 0.55rem;
  color: #ffffff;
  text-align: left;
}
</style>