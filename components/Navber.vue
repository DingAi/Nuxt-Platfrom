<script setup lang="ts">
const showSubMenu = ref(false)

function toggleSubMenu() {
  showSubMenu.value = !showSubMenu.value
}
</script>

<template>
  <nav class="bg-gray-800 text-white py-4">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
      <div class="flex items-center">
        <a href="/" class="text-xl font-bold">Platfrom</a>
      </div>
      <div class="flex items-center">
        <nuxt-link to="/" class="px-4 py-2 hover:bg-gray-700 rounded-md"
          :class="{ 'bg-gray-700': $route.path === '/' }">Home</nuxt-link>
        <nuxt-link to="/login" class="px-4 py-2 hover:bg-gray-700 rounded-md"
          :class="{ 'bg-gray-700': $route.path === '/login' }">Login</nuxt-link>
        <div class="relative">
          <button @click="toggleSubMenu" :class="{ 'bg-gray-700': $route.path.startsWith('/master') }"
            class="px-4 py-2 hover:bg-gray-700 rounded-md flex items-center">
            Master
          </button>
          <div v-if="showSubMenu" class="absolute z-10 bg-gray-800 rounded-md py-2 w-48 shadow-lg">
            <nuxt-link to="/master01" :class="{ 'bg-gray-700': $route.path === '/master01' }"
              class="block px-4 py-2 hover:bg-gray-700">Index</nuxt-link>
            <nuxt-link to="/master01/slave-data" :class="{ 'bg-gray-700': $route.path === '/master01/slave-data' }"
              class="block px-4 py-2 hover:bg-gray-700">slave-data</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.el-menu--horizontal>.el-menu-item {
  display: flex;
  justify-content: center;
}

.relative:hover .hidden {
  display: block;
}</style>
