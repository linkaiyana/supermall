<template>
  <div class="detail-goods-info" v-if="Object.keys(goodsInfo).length !== 0">
    <h2 class="title">{{goodsInfo.title}}</h2>
    <div class="price">
      <span class="new-price">{{goodsInfo.price}}</span>
      <span v-if="goodsInfo.oldPrice" class="old-price">{{goodsInfo.oldPrice}}</span>
      <span v-if="goodsInfo.desc" class="desc">{{goodsInfo.desc}}</span>
    </div>
    <div class="message">
      <span>{{this.goodsInfo.columns[0]}}</span>
      <span>{{this.goodsInfo.columns[1]}}</span>
      <span>{{this.goodsInfo.services[this.goodsInfo.services.length - 1].name}}</span>
    </div>
    <div class="services" v-if="goodsInfo.services !== undefined">
      <span class="service-item" v-for="index in goodsInfo.services.length - 1" :key="index">
        <img :src="goodsInfo.services[index].icon" alt />
        <span>{{goodsInfo.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style scoped>
.detail-goods-info {
  padding: 0 10px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
}
.title {
  font-size: 16px;
  font-weight: normal;
  margin-top: 15px;
  color: #000;
}
.price {
  margin-top: 10px;
}
.new-price {
  font-size: 24px;
  color: var(--color-high-text);
}
.old-price {
  font-size: 14px;
  text-decoration: line-through;
  color: #b3b1b1;
  margin-left: 5px;
}
.desc {
  font-size: 12px;
  padding: 2px 5px;
  margin-left: 5px;
  border-radius: 8px;
  background-color: var(--color-high-text);
  color: #fff;
  vertical-align: top;
}
.message {
  display: flex;

  justify-content: space-between;
  font-size: 13px;
  color: #b3b1b1;
  padding: 15px 0 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.services {
  display: flex;
  font-size: 12px;
  color: #000;
  justify-content: space-between;
  padding: 15px 0;
}
.service-item img {
  width: 12px;
  vertical-align: middle;
  margin-right: 2px;
}
</style>
