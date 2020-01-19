<template>
  <div class="cargo">
      <div class="cargo-icon">
        <span><i class="iconfont icon-qicheqianlian-"></i></span>
      </div>
      <div class="cargo-calc">
        <span>&yen;<strong>{{parseFloat(count)}}</strong></span>
        <span class="cargo-calc-deliver">配送费用&yen;5</span>
      </div>
      <div class="cargo-result">
        去结算
      </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['count'])
  }
}
</script >

<style scoped>
.cargo{
  display:flex;
  justify-content:space-around;
  align-items:stretch;
}
.cargo-icon{
  flex:1;
  position:relative;

}
.cargo-icon span{
  position:absolute;
  width:2.2rem;
  height:2.2rem;
  background-color:#323232;
  border:0.25rem solid #404040;
  border-radius:50%;
  left:1rem;
  top:-0.6rem;
  text-align:center;
  line-height:2.2rem;
  color:#fff; 
}
.cargo-icon span i{
  font-size:1.5rem;
}
.cargo-calc{
  flex:2;
  display:flex;
  align-items:center;
  justify-content: space-between;
  color:#dedede;
}
.cargo-calc .cargo-calc-deliver{
  font-size:0.3rem;
  margin-right:0.5rem;
}
.cargo-result{
  flex:1;
  background-color:darkcyan;
  text-align:center;
  line-height:2.5rem;
  color:#fff;
  font-size:0.7rem;
}
</style>