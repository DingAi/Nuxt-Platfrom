<script setup lang="ts">
//获取到当前的路由地址对象
const route = useRoute()


</script>

<template>
  <div class="bg-slate-300 text-5xl text-center text-orange-700">
    <p>Current route: {{ route.path }}</p>
    <!-- <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a> -->
  </div>
</template>

<style lang="less"></style>
