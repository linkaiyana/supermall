<template>
  <div class="tab-control">
    <div
      class="tab-item"
      v-for="(item,index) in titles"
      :key="item.index"
      :class="{active : currentIndex === index}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style scoped>
.tab-control {
  display: flex;
  line-height: 40px;
  background-color: #fff;
  text-align: center;
  font-size: 13px;
}
.tab-item {
  flex: 1;
}
.active span {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>
