<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="white">
        <img slot="imgA" src="~assets/img/tabbar/home.svg" />
        <img slot="imgB" src="~assets/img/tabbar/home_active.svg" />
        主页
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="white">
        <img slot="imgA" src="~assets/img/tabbar/category.svg" />
        <img slot="imgB" src="~assets/img/tabbar/category_active.svg" />
        分类
      </tab-bar-item>
      <tab-bar-item path="/shopcart" activeColor="white">
        <img slot="imgA" src="~assets/img/tabbar/shopcart.svg" />
        <img slot="imgB" src="~assets/img/tabbar/shopcart_active.svg" />
        购物车
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="white">
        <img slot="imgA" src="~assets/img/tabbar/profile.svg" />
        <img slot="imgB" src="~assets/img/tabbar/profile_active.svg" />
        我的
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "maintabbar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>
