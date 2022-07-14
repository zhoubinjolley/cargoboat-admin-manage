<!--
 * @Author: Bin.Zhou
 * @Date: 2022-07-12 10:52:46
 * @LastEditTime: 2022-07-13 16:07:16
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
-->
<template>
  <div class="layout">
    <navbar-item></navbar-item>
    <app-main></app-main>
  </div>
</template>

<script>
import AppMain from "./components/AppMain";
import NavbarItem from "./components/Navbar";
export default {
  name: "layoutTemplate",
  setup() {},
  components: {
    AppMain,
    NavbarItem,
  },
};
</script>