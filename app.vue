<template>
  <VitePwaManifest />
  <NuxtLoadingIndicator />
  <NuxtPage />
</template>

<style>
  body * {
    @apply transition-colors ease-in-out duration-500;
  }
</style>

<script setup lang="ts">
  type Theme = 'light' | 'dark';

  // useSeoMeta({
  //   title: 'Adityawarman Dewa Putra',
  //   ogTitle: 'Adityawarman Dewa Putra',
  //   description: 'This is my personal portfolio, build using nuxt js and tailwind css.',
  //   ogDescription: 'This is my personal portfolio, build using nuxt js and tailwind css.',
  // }),

  definePageMeta({  
    colorMode: 'dark',
  })
</script>