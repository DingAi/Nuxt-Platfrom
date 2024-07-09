<template>
  <div class="space-y-2 text-center size-full">
    <div class="flex md:flex-row flex-col justify-between items-center bg-slate-500 p-2">
      <div class="bg-slate-500 p-2 md:w-1/6">
        <el-cascader :options="options" :props="props" collapse-tags collapse-tags-tooltip :max-collapse-tags="3"
          clearable placeholder="主站、从站选择" />
      </div>
      <div class="justify-center bg-slate-500 p-2 md:w-1/6">
        <el-cascader :options="options" :props="props" collapse-tags collapse-tags-tooltip :max-collapse-tags="3"
          clearable placeholder="传感器选择" />
      </div>
      <div class="justify-center bg-slate-500 p-2 md:w-1/3">
        <el-date-picker v-model="historyTimeRange" type="datetimerange" size="large"
          value-format="YYYY-MM-DD HH:mm:ss" start-placeholder="开始时间" end-placeholder="结束时间" :shortcuts="shortcuts" />
      </div>
      <div class="bg-lime-500 md:w-1/3">
        <UButton color="primary" variant="soft">Button</UButton>
      </div>
    </div>
    <div class="bg-slate-400 p-2 w-full h-96 history-chart">
      <h1 class="text-9xl text-conter text-green-300">HISTORY CHART DATA</h1>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const props = { multiple: true }
  const historyTimeRange = ref(null)
  const options = [
    {
      value: 1,
      label: 'Asia',
      children: [
        {
          value: 2,
          label: 'China',
          children: [
            { value: 3, label: 'Beijing' },
            { value: 4, label: 'Shanghai' },
            { value: 5, label: 'Hangzhou' },
          ],
        },
        {
          value: 6,
          label: 'Japan',
          children: [
            { value: 7, label: 'Tokyo' },
            { value: 8, label: 'Osaka' },
            { value: 9, label: 'Kyoto' },
          ],
        },
        {
          value: 10,
          label: 'Korea',
          children: [
            { value: 11, label: 'Seoul' },
            { value: 12, label: 'Busan' },
            { value: 13, label: 'Taegu' },
          ],
        },
      ],
    },
    {
      value: 14,
      label: 'Europe',
      children: [
        {
          value: 15,
          label: 'France',
          children: [
            { value: 16, label: 'Paris' },
            { value: 17, label: 'Marseille' },
            { value: 18, label: 'Lyon' },
          ],
        },
        {
          value: 19,
          label: 'UK',
          children: [
            { value: 20, label: 'London' },
            { value: 21, label: 'Birmingham' },
            { value: 22, label: 'Manchester' },
          ],
        },
      ],
    },
    {
      value: 23,
      label: 'North America',
      children: [
        {
          value: 24,
          label: 'US',
          children: [
            { value: 25, label: 'New York' },
            { value: 26, label: 'Los Angeles' },
            { value: 27, label: 'Washington' },
          ],
        },
        {
          value: 28,
          label: 'Canada',
          children: [
            { value: 29, label: 'Toronto' },
            { value: 30, label: 'Montreal' },
            { value: 31, label: 'Ottawa' },
          ],
        },
      ],
    },
  ]
</script>

<style>
.history-chart {
  height: 55rem
}
</style>