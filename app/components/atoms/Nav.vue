<script setup lang="ts">
interface Link { to: string; title: string; icon: string }
const links = ref<Link[]>([
  { to: '/', title: 'Home', icon: 'icon-park-outline:home-two' },
  { to: '/uses', title: 'Uses', icon: 'majesticons:heart-line' },
  { to: '/work', title: 'Work', icon: 'majesticons:cpu-line' },
  { to: '/photos', title: 'Photos', icon: 'majesticons:camera-line' },
  { to: '/secreto', title: 'Secreto', icon: 'majesticons:message-line' },
  { to: '/demo', title: 'Demo', icon: 'tdesign:play-demo' },
  { to: '/feed', title: 'Feed', icon: 'majesticons:user-box-line' },
]);

const route = useRoute();
function isActive(to: string) {
  return route.path.replace(/\/$/, '') === to.replace(/\/$/, '');
}
</script>

<template>
  <div class="flex items-center absolute top-4 left-7 text-gray-400 dark:text-gray-500 text-xs gap-2 font-semibold pl-0 p-2 transition-colors ease-in-out duration-500">
    <ul class="flex items-center space-x-7 md:space-x-12">
      <li v-for="link in links" :key="link.to">
        <NuxtLink
          :to="link.to"
          :title="link.title"
          :class="{ 'border-b border-gray-400 dark:border-gray-100/50 pb-1 transition-colors ease-in-out duration-500': isActive(link.to) }"
        >
          <Icon :name="link.icon" class="size-4 md:size-6" />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
