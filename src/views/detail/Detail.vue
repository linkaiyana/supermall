<template>
  <div id="detail">
    <detail-nav-bar ref="bar" class="nav" @titleClick="titleClick" />
    <scroll class="scroll" ref="scroll" :probeType="3" @scroll="listenScroll">
      <detail-swiper :banners="banners" @imgLoad="imgLoad" />
      <detail-goods-info :goods-info="goodsInfo" />
      <detail-shop-info :shop-info="shopInfo" />
      <detail-more :detail-info="detailInfo" @imgLoad="imgLoad" />
      <detail-param-info :param-info="paramInfo" ref="param" />
      <detail-commend :detail-commend="detailCommend" ref="commend" />
      <good-list :goods="recommendGoods" ref="recommend" />
    </scroll>
    <back-top v-show="isShowBackTop" @click.native="toTop" />
    <detail-tab-bar class="dtab-bar" @addClick="addClick" />
  </div>
</template>

<script>
import {
  getDetail,
  getRecommend,
  GoodsInfo,
  ShopInfo,
  ParamInfo,
  DCommend,
} from "@/network/detail";

import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/common/backtop/BackTop";

import { debounce } from "common/utils";
import { imageLoadListener, backTopListener } from "common/mixin";

import DetailNavBar from "./childComp/DetailNavBar";
import DetailSwiper from "./childComp/DetailSwiper";
import DetailGoodsInfo from "./childComp/DetailGoodsInfo";
import DetailShopInfo from "./childComp/DetailShopInfo";
import DetailMore from "./childComp/DetailMore";
import DetailParamInfo from "./childComp/DetailParamInfo";
import DetailCommend from "./childComp/DetailCommend";
import DetailTabBar from "./childComp/DetailTabBar";

import GoodList from "components/content/goods/GoodList";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      banners: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      paramInfo: {},
      detailCommend: {},
      recommendGoods: [],
      getImgrefresh: null,
      elOffsetTop: [],
      getElOffsetTop: null,
    };
  },
  mixins: [imageLoadListener, backTopListener],
  components: {
    Scroll,
    BackTop,
    DetailNavBar,
    DetailSwiper,

    DetailGoodsInfo,
    DetailShopInfo,
    DetailMore,
    DetailParamInfo,
    DetailCommend,
    GoodList,
    DetailTabBar,
  },
  methods: {
    getDetail(iid) {
      getDetail(iid).then((res) => {
        const data = res.result;
        // 获取轮播图数据
        this.banners = data.itemInfo.topImages;
        // 获取商品基本信息
        this.goodsInfo = new GoodsInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        // 获取商店基本信息
        this.shopInfo = new ShopInfo(data.shopInfo);

        // 获取图片信息
        this.detailInfo = data.detailInfo;

        // 获取商品参数信息
        this.paramInfo = new ParamInfo(
          data.itemParams.info,
          data.itemParams.rule
        );

        // 获取商品评论信息
        this.detailCommend = new DCommend(data.rate);
      });
    },
    // 获取商品推荐信息
    getRecommend() {
      getRecommend().then((res) => {
        this.recommendGoods = res.data.list;
      });
    },
    // 图片加载监听
    imgLoad() {
      this.getImgrefresh();
      this.getElOffsetTop();
    },
    // 点击标题滚动
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.elOffsetTop[index], 500);
    },
    //监听滚动
    listenScroll(position) {
      this.topListen(position);
      if (-position.y >= this.elOffsetTop[3]) {
        this.$refs.bar.currentIndex = 3;
      } else if (-position.y >= this.elOffsetTop[2]) {
        this.$refs.bar.currentIndex = 2;
      } else if (-position.y >= this.elOffsetTop[1]) {
        this.$refs.bar.currentIndex = 1;
      } else {
        this.$refs.bar.currentIndex = 0;
      }
    },
    // 监听加入购物车按钮点击
    addClick() {
      console.log(111);
    },
  },
  created() {
    // 请求数据
    this.iid = this.$route.query.iid;
    this.getDetail(this.iid);
    // 获取商品推荐信息
    this.getRecommend();
  },
  mounted() {
    // 图片加载防抖
    this.getImgrefresh = debounce(this.$refs.scroll.refresh, 50);
    // offsetTop赋值防抖
    this.getElOffsetTop = debounce(() => {
      this.elOffsetTop = [];
      this.elOffsetTop.push(0);
      this.elOffsetTop.push(this.$refs.param.$el.offsetTop);
      if (this.$refs.commend.$el.offsetTop !== undefined) {
        this.elOffsetTop.push(this.$refs.commend.$el.offsetTop);
      } else {
        this.elOffsetTop.push(this.$refs.recommend.$el.offsetTop);
      }
      this.elOffsetTop.push(this.$refs.recommend.$el.offsetTop);
    }, 50);
  },
  destroyed() {
    this.$bus.$off("imageLoadListener", this.imageLoadListener);
  },
};
</script>

<style scoped>
.nav {
  position: relative;
  z-index: 999;
  background-color: #fff;
}
.scroll {
  position: relative;
  z-index: 11;
  background-color: #fff;
  height: calc(100vh - 44px - 55px);
  overflow: hidden;
}
.dtab-bar {
  position: relative;
  z-index: 999;
}
</style>
