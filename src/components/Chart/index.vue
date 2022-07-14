<!--
 * @Author: Bin.Zhou
 * @Date: 2022-07-14 17:01:38
 * @LastEditTime: 2022-07-14 17:18:46
 * @LastEditors: Bin.Zhou
 * @Description: 
 * @Copyright: Copyright (c) Reserved 
-->
<template>
    <div class="chart">
        <div ref="chart" :style="{ height: height, width: width }" />
    </div>
</template>

<script setup>
import * as echarts from 'echarts/core';
import { BarChart, LineChart, PieChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent
} from 'echarts/components';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
// 注册必须的组件
echarts.use([
    TitleComponent,
    TooltipComponent,
    GridComponent,
    DatasetComponent,
    TransformComponent,
    LabelLayout,
    UniversalTransition,
    CanvasRenderer,
    BarChart,
    LineChart,
    PieChart
]);
defineProps({
    
})


</script>
<script>
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
    name: "ChartView",
    
})
</script>



