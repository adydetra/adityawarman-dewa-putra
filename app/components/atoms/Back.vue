<script setup lang="ts">
const route = useRouter();
function goToPrev() {
  window.history.length > 1 ? route.back() : route.push('/');
}
</script>

<template>
  <button class="flex items-center fixed top-4 left-4" @click="goToPrev()">
    <Icon name="line-md:arrow-left-circle" class="text-black dark:text-white size-4 lg:size-6 transition-colors ease-in-out duration-500" />
  </button>
</template>
