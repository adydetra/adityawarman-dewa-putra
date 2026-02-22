<script setup lang="ts">
const route = useRouter();
function goToPrev() {
  window.history.length > 1 ? route.back() : route.push('/');
}
</script>

<template>
  <button class="flex items-center cursor-pointer fixed top-4 left-4" @click="goToPrev()">
    <Icon name="line-md:arrow-left-circle" class="text-black dark:text-white text-base lg:text-2xl transition-colors ease-in-out duration-500" />
  </button>
</template>
