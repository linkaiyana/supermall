<template>
  <div class="detail-param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table v-for="(table,index) in paramInfo.rule.tables" :key="index">
      <tr v-for="(tr,indexx) in table" :key="indexx">
        <td v-for="(td, i) in tr" :key="i">{{td}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(item, index) in paramInfo.info" :key="index">
        <td class="key">{{item.key}}</td>
        <td class="value">{{item.value}}</td>
      </tr>
      <tr>
        <td>{{paramInfo.rule.key}}</td>
        <td>{{paramInfo.rule.disclaimer}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
<style scoped>
.detail-param-info {
  padding: 20px 20px;
  font-size: 14px;
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
}
.detail-param-info table {
  width: 100%;
  /* text-align: center; */
  border-collapse: collapse;
}
.detail-param-info tr {
  border-bottom: 1px solid #ebe8e8;
}
.detail-param-info td {
  padding: 10px 0;
}
.key {
  width: 80px;
}
.value {
  color: #ff0000;
}
</style>
