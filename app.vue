<template>
  <NuxtLayout>
    <VitePwaManifest />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
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
});
</script>
