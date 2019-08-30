<template>
  <ul>
    <li>
      <div class="menu-list-title">
        <b>热销榜</b>没有什么比人气更说明问题了
      </div>
      <ul class="menu-list-content">
        <li>
          <div class="menu-pic">
            <img src="../../assets/images/foods.png" alt="食品简图" />
          </div>
          <div class="menu-list-intro">
            <h3>浓香型鸡翼</h3>
            <p>易特选鸡翼经美味香料腌制烘烤而成，鲜嫩香滑，汁多入味</p>
            <p>月售94份&nbsp;&nbsp;好评率85%</p>
            <div class="menu-price">
              <span>
                <b>&yen;49</b>起
              </span>
              <v-calcResult></v-calcResult>
            </div>
          </div>
        </li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
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
}
.menu-list-intro p:nth-child(2) {
  font-size: 0.6rem;
  text-align: justify;
  color: #999999;
  line-height: 0.75rem;
  height: 1.5rem;
}
.menu-list-intro p:nth-child(3) {
  font-size: 0.6rem;
  text-align: justify;
  color: #323232;
  height: 1.5rem;
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
</style>