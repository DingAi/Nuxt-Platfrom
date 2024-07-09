<script setup lang="ts">
const showSubMenu = ref(false)

function toggleSubMenu() {
  showSubMenu.value = !showSubMenu.value
}

const isHovering = ref(false)
function handleMouseEnter() {
  isHovering.value = true
  showSubMenu.value = true
}

function handleMouseLeave() {
  isHovering.value = false
  setTimeout(() => {
    if (!isHovering.value) {
      showSubMenu.value = false
    }
  }, 100)
}

const isMobileMenuOpen = ref(false)
function toggleMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

</script>

<template>
  <nav class="top-0 z-50 sticky bg-gray-800 py-4 text-white">
    <div class="flex justify-between items-center mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl border-green-100">
      <div class="flex items-center">
        <nuxt-link to="/" class="font-bold text-xl text-green-500">Platfrom</nuxt-link>
      </div>
      <div class="flex items-center font-black">
        <nuxt-link to="/" class="hover:bg-gray-700 mx-2 px-4 py-2 rounded-md"
          :class="{ 'bg-gray-700 text-green-500': $route.path === '/' }">Home</nuxt-link>
        <nuxt-link to="/history" class="hover:bg-gray-700 mx-2 px-4 py-2 rounded-md"
          :class="{ 'bg-gray-700 text-green-500': $route.path === '/history' }">历史</nuxt-link>
        <nuxt-link to="/analysis" class="hover:bg-gray-700 mx-2 px-4 py-2 rounded-md"
          :class="{ 'bg-gray-700 text-green-500': $route.path === '/analysis' }">数据分析</nuxt-link>
        <div class="relative mx-2" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
          <button :class="{ 'bg-gray-700 text-green-500': $route.path.startsWith('/master') }"
            class="flex items-center hover:bg-gray-700 px-4 py-2 rounded-md">
            站点数据
          </button>
          <div v-if="showSubMenu"
            class="z-10 absolute bg-gray-800 shadow-lg py-2 rounded-md w-48 origin-top-right animate-zoom-in-up">
            <nuxt-link @click="toggleSubMenu" to="/master01/"
              :class="{ 'bg-gray-700 text-green-500': $route.path === '/master01' }"
              class="block hover:bg-gray-700 px-4 py-2">主站数据</nuxt-link>
            <nuxt-link @click="toggleSubMenu" to="/master01/slave-data"
              :class="{ 'bg-gray-700 text-green-500': $route.path === '/master01/slave-data' }"
              class="block hover:bg-gray-700 px-4 py-2">从站数据</nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <UDivider /> -->
  </nav>
</template>

<style scoped>
.el-menu--horizontal>.el-menu-item {
  display: flex;
  justify-content: center;
}

.relative:hover .hidden {
  display: block;
}

.animate-zoom-in-up {
  animation: zoom-in-up 0.3s ease-out;
}

@keyframes zoom-in-up {
  0% {
    transform: scale(0.95) translateY(10px);
    opacity: 0;
  }

  100% {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
}

@media (max-width: 767px) {
  .top-0 {
    position: relative;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  .px-4 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-start {
    align-items: flex-start;
  }

  .space-y-4>*+* {
    margin-top: 1rem;
  }
}
</style>
