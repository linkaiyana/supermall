<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      // 点击事件
      click: true,
      // 监听滚动，1表示不监听，2表示监听，3代表实时监听
      probeType: this.probeType,
      // 上拉加载更多
      pullUpLoad: this.pullUpLoad,
    });

    // 监听滚动
    if (this.probeType != 1) {
      this.scroll.on("scroll", (position) => {
        this.$emit("scroll", position);
      });
    }
    // 监听上拉事件
    if (this.pullUpLoad) {
      this.scroll.on("pullUpLoad", () => {
        this.$emit("pullUpLoad");
      });
    }
  },
};
</script>

<style scoped>
</style>
