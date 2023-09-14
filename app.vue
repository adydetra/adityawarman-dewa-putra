<template>
  <main class="overflow-x-hidden">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </main>
</template>

<style>
body * {
  @apply transition-colors ease-in-out duration-500;
}
</style>

<script lang="ts" setup>
const route = useRoute();

useSeoMeta({
  title: () => (route.meta.title as string) || "",
  titleTemplate: (title) => (title ? `${title} - Dewa` : "Adityawarman Dewa Putra"),
  description: "This is my personal site, build using Nuxt Js",
});
</script>