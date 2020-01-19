<template>
  <div class="order">
    <div class="menu">
      <div class="menu-subnav">
      <ul>
        <template v-if="restaurantMenu.length>0">
            <li  v-for="(item,index) in restaurantMenu" :key="index">
                <span><i>{{item.icon_url}}</i>{{item.name}}</span>
            </li>
        </template>
      </ul>
    </div>
    <div class="menu-list">
        <template v-if="restaurantMenu.length>0">
                <v-menuList v-for="(item,index) in restaurantMenu" :item="item" :key="index"></v-menuList>
        </template>
    </div>
    </div>
    <!-- 购物车组件 -->
    <v-cargo class="cargo"></v-cargo>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cargo from '../../components/cargo/Cargo'
export default {
  computed: {
    ...mapState(["restaurantMenu"]),
  },
  components:{
    'v-cargo':Cargo
  },
  methods: {
    getRestaurantMenuInfo() {
      let shopId = this.$route.query.shopId;
      this.$store.dispatch("getAllRestaurantMenu", { shopId });
    }
  },
  mounted() {
    this.getRestaurantMenuInfo();
  }
};
</script>

<style scoped>
.order{
  position:relative;
  width:100%;
  height:100%;
  overflow:hidden;
}
.menu {
  position: relative;
  font-size: 0.7rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.menu-subnav {
  width: 25%;
  background-color: #f0f0f0;
}
.menu-subnav li {
  height: 3rem;
  line-height: 3rem;
  width: 100%;
  box-sizing: border-box;
}
.menu-subnav li span {
  display: block;
  box-sizing: border-box;
  border-bottom: 1px solid #dadada;
  margin: 0 0.5rem;
  color: #323232;
}
.menu-subnav li:last-child span {
  border-bottom: none;
}
.menu-subnav li.active {
  border-left: 3px solid darkcyan;
  background-color: #ffffff;
}
.menu-list {
  width: 75%;
  position: relative;
}
.cargo{
  position:absolute;
  width:100%;
  left:0;
  bottom:0;
  height:2.5rem;
  background-color:#323232;
}
</style>