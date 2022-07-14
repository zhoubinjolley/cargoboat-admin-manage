<!--
 * @Author: Bin.Zhou
 * @Date: 2022-07-13 13:36:40
 * @LastEditTime: 2022-07-13 17:13:28
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
-->
<template>
  <div class="navbar">
    <span class="navbar-title">{{title}}</span>
    <div class="right-menu">
      <el-dropdown class="menu-container" trigger="click">
        <div class="menu-wrapper">
          <icon-svg-menu />
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>船队主页</el-dropdown-item>
            <el-dropdown-item>远程监测</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <icon-svg-logout />
    </div>
  </div>
</template>

<script>
const defaultSettings = require("@/settings.js");
import { ref } from 'vue'
export default {
  name: "NavbarItem",
  components: {},
  setup() {
    const title = ref(defaultSettings.title);
    return {
      title
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/title.scss";
</style>
