<template>
  <nav-bar class="nav-bar">
    <div slot="left" class="icon" @click="backClick">
      <img src="~assets/img/common/back.svg" alt />
    </div>
    <div slot="center" class="content">
      <div
        v-for="(item,index) in titles"
        :key="item.index"
        :class="{active:currentIndex === index}"
        @click="titleClick(index)"
      >{{item}}</div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  data() {
    return {
      titles: ["商品", "参数", "评价", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  font-size: 13px;
  font-weight: 700;
}
.content div {
  flex: 1;
}
.icon img {
  font-size: 0;
  vertical-align: middle;
}
.active {
  color: var(--color-high-text);
}
</style>
