<script setup lang="ts">
defineProps({
  number: Number,
});
</script>

<template>
  <div class="text-md text-gray-400 text-center w-full">
    <span class="bg-gray-700 py-2 px-4 text-yellow-300 dark:text-yellow-300 rounded-sm transition-colors ease-in-out duration-500">{{ number }}</span>
  </div>
</template>
