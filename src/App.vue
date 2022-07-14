<!--
 * @Author: Bin.Zhou
 * @Date: 2022-07-12 10:08:01
 * @LastEditTime: 2022-07-14 15:49:47
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
-->
<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  created() { },
};
</script>

<style>
#app {
  width: 1920px;
  height: 1080px;
  background-color: #191d2f;
}

.app-container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  padding: 0 30px 30px 30px;
}
</style>
