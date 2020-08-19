<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in banners" :key="item.index">
      <img :src="item" alt @load="imgLoad" />
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  data() {
    return {
      isEmit: false,
    };
  },
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    imgLoad() {
      if (!this.isEmit) {
        this.isEmit = true;
        this.$emit("imgLoad");
      }
    },
  },
};
</script>

<style scoped>
.detail-swiper {
  height: 300px;
}
</style>
