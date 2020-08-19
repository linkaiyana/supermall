<template>
  <div class="shop-info">
    <div class="title">
      <img :src="shopInfo.shopLogo" alt />
      <span>{{shopInfo.shopName}}</span>
    </div>
    <div class="base-info">
      <div class="message">
        <div>
          <div>{{shopInfo.cSells | toFixNum}}</div>
          <div>总销量</div>
        </div>
        <div>
          <div>{{shopInfo.cGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <div class="more">
        <div class="item" v-for="(item,index) in shopInfo.score" :key="index">
          <span>{{item.name}}</span>
          <span :class="{'better-score' : item.isBetter}">{{item.score}}</span>
          <span :class="{'better-icon' : item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
        </div>
      </div>
    </div>
    <div class="button">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  filters: {
    toFixNum(num) {
      if (num >= 10000) {
        return (num / 10000).toFixed(2) + "万";
      }
    },
  },
};
</script>
<style scoped>
.shop-info {
  padding: 20px 10px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 19px;
  color: #000;
}
.title img {
  width: 50px;
  border-radius: 50%;
  border: 1px solid #bbb8b8;
  vertical-align: middle;
  margin-right: 10px;
}
.base-info {
  display: flex;
}
.message {
  width: 50%;
  display: flex;
  text-align: center;
  font-size: 15px;
  border-right: 1px solid red;
  padding: 0 10px;
  margin: 30px 0;
  justify-content: space-around;
  color: #000;
}
.more {
  width: 49%;
  padding: 10px;
  padding-left: 20px;
  font-size: 13px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.more .item {
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.item span:nth-child(2) {
  color: #008000;
}
.item span:nth-child(3) {
  color: #ffffff;
  background: #008000;
}
.item span.better-score {
  color: #ff0000;
}
.item span.better-icon {
  background-color: #ff0000;
}
.item span:last-child {
  padding: 2px;
  border-radius: 3px;
}
.button {
  width: 100%;
  padding: 20px 0 30px;
  text-align: center;
}
.button span {
  padding: 5px 30px;
  background-color: rgb(241, 236, 236);
  border-radius: 8px;
}
</style>
