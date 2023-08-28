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

useHead({
  meta: [{ name: "google-site-verification", content: "9uLk0H3TnVSocEc4qGRjdd7T6oN-S0ALQHvOPU5Xn1A" }],
});

useSeoMeta({
  title: () => (route.meta.title as string) || "",
  titleTemplate: (title) => (title ? `${title} - Dewa` : "Adityawarman Dewa Putra"),
});
</script>
