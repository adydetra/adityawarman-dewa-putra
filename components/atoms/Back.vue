<template>
  <button @click="goToPrev()" class="fixed top-4 left-4">
    <Icon name="line-md:arrow-left-circle" class="text-black dark:text-white w-4 h-4 lg:w-6 lg:h-6" />
  </button>
</template>

<script lang="ts" setup>
const route = useRouter();
const goToPrev = () => {
  window.history.length > 1 ? route.back() : route.push("/");
};
</script>
