<script setup>
const contentQuery = await queryContent("/feed").sort({ publishDate: -1 }).find();
</script>

<template>
  <div v-for="{ _path: slug, publishDate, cover, description } in contentQuery" :key="slug" class="flex space-x-4 bg-gray-300/30 first-letter:dark:bg-slate-800 p-4 text-gray-600 dark:text-gray-300">
    <div>
      <div class="flex justify-center items-center w-8 md:w-12 rotate-3 rounded-full">
        <NuxtImg src="/images/hero-mobile.webp" alt="Photo" placeholder loading="lazy" class="w-full h-full rounded-full shadow-md shadow-gray-500/40" />
      </div>
    </div>
    <div class="w-full overflow-hidden space-y-4">
      <div class="flex justify-between items tracking-wide">
        <h2 class="text-xs flex items-center gap-1"><Icon name="line-md:iconify1" class="mr-0.5" />Dewa <span class="text-[7px]">🇮🇩</span></h2>
        <p class="text-xs"><Icon name="line-md:calendar" class="mr-1" />{{ publishDate }}</p>
      </div>
      <p class="text-xs mt-4 lg:max-w-[65%] leading-loose">{{ description }}</p>
      <NuxtImg :src="`/images/feed/${cover}`" alt="Photo" placeholder loading="lazy" class="object-contain w-full" />
    </div>
  </div>
</template>
