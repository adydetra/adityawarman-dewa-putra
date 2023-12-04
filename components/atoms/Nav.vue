<script lang="ts" setup>
const links = ref([
  { to: '/', title: 'Home', icon: 'icon-park-outline:home-two' },
  { to: '/uses', title: 'Uses', icon: 'majesticons:heart-line' },
  { to: '/work', title: 'Work', icon: 'majesticons:cpu-line' },
  { to: '/demo', title: 'Demo', icon: 'tdesign:play-demo' },
  { to: '/feed', title: 'Feed', icon: 'majesticons:user-box-line' },
]);
</script>

<template>
  <div class="flex items-center absolute top-4 left-7 text-gray-400 dark:text-gray-500 text-xs gap-2 font-semibold pl-0 p-2">
    <ul class="flex items-center space-x-7">
      <li v-for="link in links" :key="link.to">
        <NuxtLink :to="link.to" :title="link.title" :class="{ 'border-b border-gray-400 dark:border-gray-100/50 pb-1': $route.path === link.to }">
          <Icon :name="link.icon" class="w-4 h-4" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
