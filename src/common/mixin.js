import { debounce } from "common/utils"

export const imageLoadListener = {
  data() {
    return {
      imageLoadListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.imageLoadListener = () => {
      refresh();
    };
    this.$bus.$on("goodsImageLoad", this.imageLoadListener);
  }
}

export const backTopListener = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  methods: {
    toTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    topListen(position) {
      this.isShowBackTop = position.y <= -1000;
    }
  }
}
