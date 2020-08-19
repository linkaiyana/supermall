<template>
  <div class="good-list">
    <good-list-item v-for="item in goods" :key="item.acm" :goods-item="item"></good-list-item>
  </div>
</template>

<script>
import GoodListItem from "./GoodListItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    GoodListItem,
  },
};
</script>

<style scoped>
.good-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
</style>
