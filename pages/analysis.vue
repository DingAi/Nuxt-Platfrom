<template>
  <div class="space-y-2 text-center size-full">
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
    <div class="flex md:flex-row flex-col justify-between -mx-2 p-2 h-96">
      <div class="bg-slate-500 md:w-2/3">
        <h1 class="p-2 text-7xl text-conter text-green-100">ANALYSIS DATA PAGES</h1>
      </div>
      <div class="bg-lime-500 md:w-1/3">
        <h1 class="p-2 text-7xl text-conter text-green-100">ANALYSIS DATA PAGES</h1>
      </div>
    </div>
    <div class="bg-slate-400 p-2 w-full h-96">
      <h1 class="text-9xl text-conter text-green-300">ANALYSIS DATA PAGES</h1>
    </div>
    <div class="bg-slate-300 p-2 w-full h-96">
      <h1 class="text-9xl text-conter text-green-500">ANALYSIS DATA PAGES</h1>
    </div>
    <div class="bg-slate-200 p-2 w-full h-96">
      <h1 class="text-9xl text-conter text-green-700">ANALYSIS DATA PAGES</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>

<style lang="less" scoped></style>