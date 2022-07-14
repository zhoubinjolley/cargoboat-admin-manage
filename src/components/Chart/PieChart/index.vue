<template>
    <h3 v-if="dataEmpty">暂无数据</h3>
    <div v-else class="chart">
    </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import { option } from "./defaultOption.js"
import { } from "echarts"

export default defineComponent({
    setup() {

    },
})
</script>



import ResizeListener from "element-resize-detector";
import { merge, isEmpty } from "lodash";
import {pieChartColor} from "./../color.js"
