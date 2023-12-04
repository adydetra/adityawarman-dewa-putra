<script lang="ts" setup>
const route = useRouter();
function goToPrev() {
  window.history.length > 1 ? route.back() : route.push('/');
}
</script>

<template>
  <button class="fixed top-4 left-4" @click="goToPrev()">
    <Icon name="line-md:arrow-left-circle" class="text-black dark:text-white w-4 h-4 lg:w-6 lg:h-6" />
  </button>
</template>
