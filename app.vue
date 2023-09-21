<template>
  <main class="overflow-x-hidden">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </main>
</template>

<style>
:root {
  scrollbar-width: thin;
  scrollbar-color: #d4d4d4 #ffffff;
}
html.dark {
  scrollbar-width: thin;
  scrollbar-color: #1b1b1b #050505;
}
body * {
  @apply transition-colors ease-in-out duration-500;
}
</style>

<script lang="ts" setup>
const route = useRoute();

useSeoMeta({
  title: () => (route.meta.title as string) || "",
  titleTemplate: (title) => (title ? `${title} - Dewa` : "Adityawarman Dewa Putra"),
  description: "This is my personal site, build using Nuxt",
});
</script>
