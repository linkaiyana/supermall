<template>
  <div class="tab-bar-item">
    <div class="img-wrap" @click="itemClick">
      <div v-if="!isActive">
        <slot name="imgA"></slot>
      </div>
      <div v-else>
        <slot name="imgB"></slot>
      </div>
    </div>
    <div :style="isActive ? { color: activeColor } : {}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "deeppink",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
  },
  methods: {
    itemClick() {
      if (this.$route.path.indexOf(this.path) != -1) {
        return;
      }
      this.$router.replace(this.path);
    },
  },
};
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.tab-bar-item > .img-wrap img {
  width: 28px;
  height: 28px;
  vertical-align: middle;
  margin-top: 3px;
}
</style>
