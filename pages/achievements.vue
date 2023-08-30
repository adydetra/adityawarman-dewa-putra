<template>
  <main class="bg-white dark:bg-gray-950 tracking-wide select-none relative">
    <div class="fixed top-0 left-0" :class="layout">
      <number>4</number>
      <NuxtLink
        to="/projects"
        title="Swap to Projects"
        class="w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200"
      >
        <Icon name="line-md:chevron-small-double-left" class="w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <LinkBlog />
    </div>
    <LazyBaseAchievements />
    <div class="fixed top-0 right-0" :class="layout">
      <line-l-s />
      <ButtonColorMode class="w-full" />
      <line-l-c />
      <div to="" class="w-full flex justify-center cursor-not-allowed py-8 ease-in-out duration-300 text-slate-400 hover:text-red-400">
        <Icon name="line-md:grid-3" class="w-4 h-4 lg:w-6 lg:h-6" />
      </div>
      <LinkFeed />
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ title: "Achievements" });
const layout = "flex flex-wrap justify-center items-center xl:w-40 2xl:w-52 py-6 mx-auto h-screen bg-white dark:bg-gray-950 fixed top-0";
</script>
