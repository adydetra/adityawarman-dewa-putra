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

  definePageMeta({  
    colorMode: 'dark',
  })
</script>