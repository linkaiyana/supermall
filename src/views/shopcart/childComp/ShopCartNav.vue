<template>
  <nav-bar>
    <div slot="center">购物车({{$store.state.products.length}})</div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "ShopCartNav",
  components: {
    NavBar,
  },
  computed: {
    getGoodsLength() {
      return this.$store.state.products.length;
    },
  },
};
</script>
<style scoped>
</style>
