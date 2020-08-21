<template>
  <div class="pro-item" v-if="Object.keys(pro).length !== 0">
    <shop-check-btn @click.native="revCheck" :ischecked="pro.ischeck" />
    <div class="image">
      <img :src="pro.image" alt />
    </div>
    <div class="message">
      <p class="title">{{pro.title}}</p>
      <p class="info">{{pro.desc}}</p>
      <div class="more">
        <span class="price">￥{{pro.price}}</span>
        <span class="num">X{{pro.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ShopCheckBtn from "./ShopCheckBtn";
import { REV_CHECK } from "@/store/mutation-type";
export default {
  name: "ShopProItem",
  components: {
    ShopCheckBtn,
  },
  props: {
    pro: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    revCheck() {
      this.$store.commit(REV_CHECK, this.pro);
    },
  },
};
</script>
<style scoped>
.pro-item {
  display: flex;
  padding: 5px;
  border-bottom: 1px solid #ebe8e8;
}

.image {
  margin: 0 10px;
}
.image img {
  width: 70px;
  border-radius: 10px;
}
.message {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 60%;
}
.message .title,
.message .info {
  overflow: hidden;
  text-overflow: ellipsis;
}
.message .title {
  white-space: nowrap;
  color: #000;
}
.message .info {
  font-size: 13px;
  text-overflow: -o-ellipsis-lastline;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
}
.more {
  display: flex;
  justify-content: space-between;
  line-height: 19px;
}
.price {
  font-size: 19px;
  color: orange;
}
.num {
  font-size: 15px;
}
</style>
