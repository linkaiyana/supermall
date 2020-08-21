<template>
  <div class="icon">
    <div class="btn" :class="{active : ischecked}">
      <img v-show="ischecked" src="~assets/img/cart/tick.svg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "ShopCheckBtn",
  props: {
    ischecked: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style scoped>
.icon {
  display: flex;
  align-items: center;
}
.icon div {
  width: 18px;
  height: 18px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid gray;
}
.icon .active {
  background-color: orangered;
}
</style>
