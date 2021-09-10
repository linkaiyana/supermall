<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style>
#tab-bar {
  height: 49px;
  background-color: gray;
  position: fixed;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
}
</style>
