<template>
  <div class="bottom-nav">
    <div class="btn">
      <shop-check-btn @click.native="revAllCheck" :ischecked="getIschecked" />
      <span>全选</span>
    </div>
    <div class="price">{{getTotalPrice}}</div>
    <div class="toCalc">去计算({{getToClacNum}})</div>
  </div>
</template>

<script>
import ShopCheckBtn from "./ShopCheckBtn";
import { ALL_CHECKED, ALL_NOT_CHECKED } from "@/store/mutation-type";
export default {
  name: "ShopCartBottomNav",
  components: {
    ShopCheckBtn,
  },
  computed: {
    getTotalPrice() {
      return (
        "￥" +
        this.$store.state.products
          .filter((item) => item.ischeck)
          .reduce((value, item) => {
            return value + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    getToClacNum() {
      return this.$store.state.products
        .filter((item) => item.ischeck)
        .reduce((value, item) => value + item.count, 0);
    },
    getIschecked() {
      return this.$store.state.products.length == 0
        ? false
        : this.$store.state.products.filter((item) => !item.ischeck).length ==
            0;
    },
  },
  methods: {
    revAllCheck() {
      if (this.getIschecked) {
        this.$store.commit(ALL_NOT_CHECKED);
      } else {
        this.$store.commit(ALL_CHECKED);
      }
    },
  },
};
</script>
<style scoped>
.bottom-nav {
  height: 40px;
  background-color: rgb(230, 225, 225);
  display: flex;
  justify-content: space-between;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.2);
}
.btn {
  display: flex;
  margin-left: 15px;
}
.btn span {
  margin-left: 5px;
  font-size: 14px;
  line-height: 40px;
}
.price {
  line-height: 40px;
}
.toCalc {
  width: 100px;
  background-color: orangered;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 14px;
}
</style>
