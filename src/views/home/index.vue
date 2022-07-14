<!--
 * @Author: Bin.Zhou
 * @Date: 2022-07-13 10:24:56
 * @LastEditTime: 2022-07-14 16:12:15
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
-->
<template>
    <div class="home">this is home page</div>
    <div class="home-div"></div>
</template>

<script>
export default {
    name: "homeTemplate",
    setup() {

    },
    data() {
        return {
            msg: this.$route.meta.title
        }
    }
}
</script>
<style lang="scss" scoped>
.home-div {
    width: vw(300);
    height: vh(200);
    background-color:red;
}
</style>



