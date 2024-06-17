<script setup lang="ts">
const route = useRoute()
</script>

<template>
  <div class="text-5xl text-center text-green-700">
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
</template>

<style lang="less"></style>
