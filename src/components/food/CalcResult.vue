<template>
  <div class="choice-calc">
    <span>
      <i class="iconfont icon-minus"></i>
    </span>
    <div class="choice-calc-result">2</div>
    <span>
      <i class="iconfont icon-plus1"></i>
    </span>
  </div>
</template>

<script>
export default {};
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