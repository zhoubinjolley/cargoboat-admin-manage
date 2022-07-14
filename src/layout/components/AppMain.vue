<!--
 * @Author: Bin.Zhou
 * @Date: 2022-07-13 13:21:54
 * @LastEditTime: 2022-07-14 15:58:17
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
-->
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: "AppMain",
  computed: {
    key() {
      return this.$route.path;
    },
  },
};
</script>

<style scoped>
.app-main {
  /*50 = navbar  */
  min-height: calc(100vh - 96px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 28px;
}
</style>
