<!--
 * @Author: Bin.Zhou
 * @Date: 2022-07-13 10:24:56
 * @LastEditTime: 2022-07-14 13:01:46
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
-->
<template>
    <div class="about">this is a about page</div>
    <div>{{ name }}</div>
</template>

<script>
export default {
name: "aboutTemplate",
};
</script>

<script setup>
import { ref } from 'vue'

const name = ref("jolley");
</script>




