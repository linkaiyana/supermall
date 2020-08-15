<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="control" ref="tbc" :titles="titles" @tabClick="tabClick" v-show="isFixed" />
    <scroll
      class="scroll"
      ref="scroll"
      :probeType="3"
      @scroll="listenScroll"
      :pullUpLoad="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banner="banner" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control ref="tabControl" :titles="titles" @tabClick="tabClick" />
      <good-list :goods="showGoods"></good-list>
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="toTop"></back-top>
  </div>
</template>

<script>
import { debounce } from "common/utils";

import NavBar from "components/common/navbar/NavBar";
import { Swiper, SwiperItem } from "components/common/swiper";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backtop/BackTop";
import TabControl from "components/content/tabControl/TabControl";
import GoodList from "components/content/goods/GoodList";

import { getHomeMultiData, getHomeGoods } from "@/network/home";

import HomeSwiper from "./childComp/HomeSwiper";
import RecommendView from "./childComp/RecommendView";
import FeatureView from "./childComp/FeatureView";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      titles: ["流行", "精品", "新款"],
      isFixed: false,
      isShowBackTop: false,
      goods: {
        pop: { page: 0, list: [] },
        sell: { page: 0, list: [] },
        new: { page: 0, list: [] },
      },
      currentType: "pop",
      tabControlTop: 0,
      positionY: 0,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  components: {
    NavBar,
    Swiper,
    SwiperItem,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
  methods: {
    // 获取轮播图、推荐数据
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },

    // 获取商品数据
    getHomeGoods(currentType) {
      const page = this.goods[currentType].page + 1;
      getHomeGoods(currentType, page).then((res) => {
        this.goods[currentType].list.push(...res.data.list);
        this.goods[currentType].page = page;
        this.$refs.scroll.finishPullUp();
      });
    },

    // 监听轮播图图片加载完成
    swiperImageLoad() {
      this.tabControlTop = this.$refs.tabControl.$el.offsetTop;
    },

    // 事件
    // 切换tabcontrol
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "sell";
          break;
        case 2:
          this.currentType = "new";
          break;
      }
      this.$refs.tbc.currentIndex = index;
      this.$refs.tabControl.currentIndex = index;
    },
    // 监听滚动
    listenScroll(position) {
      // 控制tabControl是否显示
      this.isFixed = position.y <= -this.tabControlTop;
      // 控制回到顶部按钮是否显示
      this.isShowBackTop = position.y <= -1000;
    },

    // 回到顶部
    toTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },

    // 上拉加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
  },
  created() {
    // 请求多个数据
    this.getHomeMultiData();
    // 请求主页商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("sell");
    this.getHomeGoods("new");
  },
  mounted() {
    // 监听商品图片加载完成
    // 由于商品图片可能有多张，导致这个事件会被频繁调用，所以有时候为了性能，会使用防抖函数进行处理

    // 使用防抖函数
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("goodsImageLoad", () => {
      refresh();
    });
  },
  // 保持页面状态
  activated() {
    this.$refs.scroll.scrollTo(0, this.positionY, 0);
  },
  deactivated() {
    this.positionY = this.$refs.scroll.getScrollY();
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.nav-bar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background-color: var(--color-tint);
  color: #fff;
  z-index: 9;
}
.scroll {
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.control {
  position: relative;
  top: 44px;
  background-color: #fff;
  z-index: 8;
}
</style>


