<script setup lang="ts">
defineProps<{
  title: string;
  to: string;
}>();
</script>

<template>
  <NuxtLink :to="`https://${to}`" :title="title" :aria-label="title" target="_blank" class="text-gray-600 dark:text-gray-300 pb-0.5 border-b-2 border-gray-200/50 dark:border-gray-700/40 dark:hover:!border-yellow-200/50 hover:!border-yellow-200 transition-colors ease-in-out duration-500">
    {{ title }}
  </NuxtLink>
</template>
