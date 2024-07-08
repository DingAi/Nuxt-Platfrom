<script setup lang="ts">
const showSubMenu = ref(false)

function toggleSubMenu() {
  showSubMenu.value = !showSubMenu.value
}
</script>

<template>
  <nav class="bg-gray-800 py-4 text-white sticky top-0 z-50">
    <div class="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex items-center">
        <nuxt-link to="/" class="font-bold text-xl">Platfrom</nuxt-link>
      </div>
      <div class="flex items-center">
        <nuxt-link to="/" class="hover:bg-gray-700 px-4 py-2 rounded-md"
          :class="{ 'bg-gray-700': $route.path === '/' }">Home</nuxt-link>
        <nuxt-link to="/analysis" class="hover:bg-gray-700 px-4 py-2 rounded-md"
          :class="{ 'bg-gray-700': $route.path === '/analysis' }">Analysis</nuxt-link>
        <nuxt-link to="/history" class="hover:bg-gray-700 px-4 py-2 rounded-md"
          :class="{ 'bg-gray-700': $route.path === '/history' }">History</nuxt-link>
        <div class="relative">
          <button @click="toggleSubMenu" :class="{ 'bg-gray-700': $route.path.startsWith('/master') }"
            class="flex items-center hover:bg-gray-700 px-4 py-2 rounded-md">
            Stations
          </button>
          <div v-if="showSubMenu" class="z-10 absolute bg-gray-800 shadow-lg py-2 rounded-md w-48">
            <nuxt-link @click="toggleSubMenu" to="/master01" :class="{ 'bg-gray-700': $route.path === '/master01' }"
              class="block hover:bg-gray-700 px-4 py-2">Index</nuxt-link>
            <nuxt-link @click="toggleSubMenu" to="/master01/slave-data"
              :class="{ 'bg-gray-700': $route.path === '/master01/slave-data' }"
              class="block hover:bg-gray-700 px-4 py-2">slave-data</nuxt-link>
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
  padding: 0.5rem;
}
</style>
