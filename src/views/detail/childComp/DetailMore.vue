<template>
  <div class="detail-more" v-if="Object.keys(detailInfo).length !== 0">
    <div class="message">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="key-info">{{detailInfo.detailImage[0].key}}</div>
    <div class="img-info" v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
      <img :src="item" alt @load="imgLoad" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailMore",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    imgLoad() {
      this.$emit("imgLoad");
    },
  },
};
</script>
<style scoped>
.detail-more {
  padding: 15px 10px;
  color: #000;
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
}
.start,
.end {
  width: 100px;
  height: 1px;
  background-color: #000;
  position: relative;
}
.start {
  float: left;
}
.end {
  float: right;
}
.start::before,
.end::after {
  content: "";
  width: 5px;
  height: 5px;
  background-color: #000;
  position: absolute;
  bottom: 0;
}
.end::after {
  right: 0;
}
.desc {
  padding: 15px;
  font-size: 14px;
}
.key-info {
  padding: 5px 0;
}
.img-info img {
  width: 100%;
}
</style>
