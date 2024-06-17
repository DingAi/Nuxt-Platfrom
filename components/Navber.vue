<script setup lang="ts">
  const current = ref('')
</script>

<template>
  <div class="size-full">
    <el-menu :default-active="current" mode="horizontal" justify-content="center">
      <el-menu-item index="login">
        User
      </el-menu-item>
      <el-sub-menu index="0">
        <template #title>Workspace</template>
        <el-menu-item index="1">Item 01</el-menu-item>
        <el-menu-item index="2">Item 02</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style scoped>
.el-menu--horizontal>.el-menu-item {
  display: flex;
  justify-content: center;
}
</style>
