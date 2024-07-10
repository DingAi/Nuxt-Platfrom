<template>
  <h1 class="text-4xl text-green-400">congzhan shuju </h1>
  <h1 class="text-4xl text-green-400">{{ sse_data }}</h1>
  <div class="text-5xl text-blue-700 text-center">
    <p>{{ sse_data }}</p>
  </div>
</template>

<script lang="ts" setup>
  const sse_data = ref("")
  const eventSource = ref<EventSource>()
  eventSource.value = new EventSource('http://192.168.28.33:8000/index')

  eventSource.value.onmessage = (event) => {
    sse_data.value = event.data
    console.log(event.data)
  }

</script>

<style></style>