<script setup lang="ts">
import Lenis from 'lenis';

const route = useRoute();

useHead(() => ({
  title: () => (route.meta.title as string) || '',
  titleTemplate: title => (title ? `${title} - Dewa` : 'Adityawarman Dewa Putra'),
  link: [
    {
      rel: 'canonical',
      href: `https://www.adydetra.my.id${route.path}`,
    },
  ],
}));

useSeoMeta({
  description: '~ Hello, I am Adityawarman Dewa Putra, big fan open-source, study at Universitas Terbuka. Working at Aptronim, As a member of the Aptrocode team.',
  twitterCard: 'summary_large_image',
});

onMounted(() => {
  const lenis = new Lenis({
    duration: 1.4,
    smoothWheel: true,
    orientation: 'vertical',
    gestureOrientation: 'vertical',
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});
</script>

<template>
  <main class="overflow-x-hidden">
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#FAF6C7 0%,#ECC223 50%,#7E4D15 100%)" />
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
</style>
