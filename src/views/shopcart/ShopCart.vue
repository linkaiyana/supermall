<template>
  <div>
    <shop-cart-nav class="nav"></shop-cart-nav>
    <scroll class="scroll">
      <shop-pro-item v-for="(item,index) in $store.state.products" :key="index" :pro="item" />
    </scroll>
    <shop-cart-bottom-nav></shop-cart-bottom-nav>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import ShopCartNav from "./childComp/ShopCartNav";
import ShopProItem from "./childComp/ShopProItem";
import ShopCartBottomNav from "./childComp/ShopCartBottomNav";
export default {
  name: "ShopCart",
  components: {
    Scroll,
    ShopCartNav,
    ShopProItem,
    ShopCartBottomNav,
  },
};
</script>

<style scoped>
.nav {
  color: #fff;
  background-color: var(--color-tint);
}
.scroll {
  height: calc(100vh - 44px - 49px - 40px);
  overflow: hidden;
}
</style>
