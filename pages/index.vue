<script setup lang="ts">
//获取到当前的路由地址对象
const route = useRoute()

const { data, error, refresh } = useFetch('http://192.168.30.119:6001/real_time_data')


</script>

<template>
  <div class="flex justify-center items-center h-96 text-8xl text-green-600">
    <p>
      春眠不觉晓
    </p>
    <p v-if="error">{{ error.message }}</p>
    <pre v-else class="text-2xl text-red-100">{{ data }}</pre>
  </div>
</template>

<style lang="less"></style>
