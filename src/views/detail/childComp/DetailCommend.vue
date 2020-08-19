<template>
  <div
    class="detail-commend"
    v-if="Object.keys(detailCommend).length !== 0 && detailCommend.list !== undefined"
  >
    <div class="title">
      <span>用户评论</span>
      <span class="more">更多{{'('+detailCommend.cRate+')'}}</span>
    </div>
    <div class="user-info">
      <img :src="getUserImage" alt />
      <span>{{getUserName}}</span>
    </div>
    <p class="content">{{detailCommend.list[0].content}}</p>
    <div class="pro-info">
      <span class="date">{{detailCommend.list[0].created}}</span>
      <span>{{detailCommend.list[0].style}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailCommend",
  computed: {
    getUserImage() {
      return this.detailCommend.list[0].user.avatar;
    },
    getUserName() {
      return this.detailCommend.list[0].user.uname;
    },
  },
  props: {
    detailCommend: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.detail-commend {
  color: #000;
  padding: 0 10px 10px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
}
.title {
  display: flex;
  justify-content: space-between;
  line-height: 35px;
  border-bottom: 1px solid #ebe8e8;
}
.title .more {
  font-size: 14px;
}
.user-info {
  padding: 10px;
}
.user-info img {
  width: 40px;
  border-radius: 50%;
  border: 1px solid #bbb8b8;
  vertical-align: middle;
  margin-right: 10px;
}
.content {
  color: rgb(75, 73, 73);
  font-size: 14px;
  text-indent: 2em;
  padding-bottom: 5px;
}
.pro-info {
  color: #898989;
}
.pro-info .date {
  margin-right: 10px;
}
</style>
