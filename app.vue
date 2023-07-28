<template>
  <VitePwaManifest />
  <NuxtLoadingIndicator />
  <NuxtPage />
</template>

<script setup lang="ts">
  import AOS from 'aos';
  onMounted(() => AOS.init());

  useSeoMeta({
    title: 'Adityawarman Dewa Putra',
    ogTitle: 'Adityawarman Dewa Putra',
    description: 'This is my personal portfolio, build using nuxt js and tailwind css.',
    ogDescription: 'This is my personal portfolio, build using nuxt js and tailwind css.',
  })
</script>