<template>
  <div class="goods-item">
    <img :src="showImage" alt />
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    showImage() {
      return this.goodsItem.show.img;
    },
  },
};
</script>

<style scoped>
.goods-item {
  width: 48%;
  text-align: center;
  font-size: 12px;
  position: relative;
  padding-bottom: 40px;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-item p {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.goods-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 5px;
}
.goods-info .price {
  font-size: 14px;
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
  font-size: 14px;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
