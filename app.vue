<script lang="ts" setup>
const route = useRoute();

useSeoMeta({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => (title ? `${title} - Dewa` : 'Adityawarman Dewa Putra'),
  description: '~ Hello, I am Adityawarman Dewa Putra, big fan open source, study at Terbuka University. This is my personal site, build using Nuxt.',
});

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `https://www.adydetra.my.id${route.path}`,
    },
  ],
}));
</script>

<template>
  <main class="overflow-x-hidden">
    <NuxtLoadingIndicator />
    <NuxtPage />
  </main>
</template>

<style lang="postcss">
:root {
  scrollbar-width: thin;
  scrollbar-color: #d4d4d4 #ffffff;
}
html.dark {
  scrollbar-color: #1b1b1b #050505;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background-color: #d4d4d4;
}
::-webkit-scrollbar-thumb:active {
  background-color: #ffffff;
}
html.dark ::-webkit-scrollbar-thumb {
  background-color: #1b1b1b;
}
html.dark ::-webkit-scrollbar-thumb:active {
  background-color: rgb(41, 41, 41);
}
html.dark ::-webkit-scrollbar {
  background-color: #050505;
}
body * {
  @apply transition-colors ease-in-out duration-500;
}
</style>
