<template>
  <div class="toast" v-show="isShow">{{message}}</div>
</template>

<script>
export default {
  name: "Toast",
  data() {
    return {
      message: "",
      isShow: false,
    };
  },
  methods: {
    show(message = "default message", time = "2000") {
      this.message = message;
      this.isShow = true;

      setTimeout(() => {
        this.message = "";
        this.isShow = false;
      }, time);
    },
  },
};
</script>
<style scoped>
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  color: #fff;
  font-size: 18px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px 10px;
  border-radius: 5px;
}
</style>
