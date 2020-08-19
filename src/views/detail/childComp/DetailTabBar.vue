<template>
  <div class="detail-tab-bar">
    <div class="left-icon">
      <div class="item">
        <div class="img"></div>
        <p>客服</p>
      </div>
      <div class="item">
        <div class="img"></div>
        <p>店铺</p>
      </div>
      <div class="item">
        <div class="img"></div>
        <p>收藏</p>
      </div>
    </div>
    <div class="right-btn">
      <div class="add" @click="addClick">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTabBar",
  methods: {
    addClick() {
      this.$emit("addClick");
    },
  },
};
</script>
<style scoped>
.detail-tab-bar {
  display: flex;
  height: 55px;
  background-color: #fff;
  box-shadow: 0 -2px rgba(0, 0, 0, 0.1);
}
.left-icon {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.item .img {
  width: 30px;
  height: 30px;
  background: url("~assets/img/detail/detail_bottom.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.item:nth-child(1) .img {
  background-position: 0 -73px;
}
.item:nth-child(2) .img {
  background-position: 0 -134px;
}
.item p {
  width: 30px;
  font-size: 13px;
  text-align: center;
}
.right-btn {
  width: 50%;
  display: flex;
}
.right-btn div {
  width: 50%;
  text-align: center;
  line-height: 55px;
  font-size: 14px;
  color: #fff;
}
.right-btn .add {
  background-color: #ffa500;
}
.right-btn .buy {
  background-color: #fd46a2;
}
</style>
