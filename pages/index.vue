<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="text-center text-green-700 text-5xl">
    <h1>可算是TM配置好了</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>

<style lang="less"></style>
