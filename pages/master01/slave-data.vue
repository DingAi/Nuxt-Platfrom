<template>
  <h1 class="text-4xl text-green-400">congzhan shuju </h1>
  <h1 class="text-4xl text-orange-700">{{ route.path }}</h1>
  <h1> {{ ApData }} </h1>
</template>

<script lang="ts" setup>
  const route = useRoute()
  const { data: ApData } = await useFetch('http://192.168.30.119:5000/master01/air_pressure')
</script>

<style></style>