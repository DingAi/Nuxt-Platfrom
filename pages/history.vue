<template>
  <div class="space-y-4 text-center size-full">
    <div class="flex md:flex-row flex-col justify-between items-center bg-slate-800 p-2 rounded-lg h-40">
      <div class="p-2 md:w-1/6">
        <el-cascader :options="options" :props="props" collapse-tags collapse-tags-tooltip :max-collapse-tags="3"
          clearable placeholder="主站、从站选择" />
      </div>
      <div class="justify-center p-2 md:w-1/6">
        <el-cascader :options="options" :props="props" collapse-tags collapse-tags-tooltip :max-collapse-tags="3"
          clearable placeholder="传感器选择" />
      </div>
      <div class="justify-center p-2 md:w-1/4">
        <el-date-picker v-model="historyTimeRange" type="datetimerange" value-format="YYYY-MM-DD HH:mm:ss"
          start-placeholder="开始时间" end-placeholder="结束时间" />
      </div>
      <div class="md:w-1/3">
        <UButton color="primary" variant="soft">图表加载</UButton>
      </div>
    </div>
    <div class="bg-slate-800 p-2 rounded-lg w-full h-96 history-chart" ref="hc">
      <h1 class="text-9xl text-conter text-green-600">HISTORY CHART DATA</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'
import type { ECharts } from 'echarts'
import {selectOption} from "@/assets/js/offset-data.ts"

const props = { multiple: true }
const historyTimeRange = ref(null)

const hc = ref<HTMLDivElement | null>(null)
let myChart: ECharts | null = null

onMounted(() => {
  myChart = echarts.init(hc.value);
  myChart.setOption({
    color: ['#22c55e',],
    title: {
      text: 'ECharts Example',
    },
    tooltip: {},
    xAxis: {
      data: ['A', 'B', 'C', 'D', 'E', 'F']
    },
    yAxis: {},
    series: [{
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }]
  })
})

onBeforeUnmount(() => {
  if (myChart) {
    myChart.dispose()
  }
})

const options = selectOption;
</script>

<style>
.history-chart {
  height: 55rem
}
</style>