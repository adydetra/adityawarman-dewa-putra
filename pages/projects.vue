<template>
  <main class="bg-white dark:bg-gray-950 tracking-wide select-none relative">
    <div class="left-0" :class="layout">
      <BlockLeftSide />
      <div class="text-md text-gray-400 text-center w-full">
        <span class="bg-gray-700 py-2 px-4 text-yellow-300 dark:text-yellow-300 rounded-sm">3</span>
      </div>
      <BlockLeftCenter />
      <NuxtLink to="/uses" title="Swap to Uses" :class="link">
        <Icon name="line-md:chevron-small-double-left" class="w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <BlockLeftCenter />
      <NuxtLink to="/blog" title="Redirect to Blog" class="text-xs text-gray-400 text-center -rotate-45 w-full">Blog</NuxtLink>
      <BlockLeftSide />
    </div>
    <LazyBaseProjectComponent />
    <div class="right-0" :class="layout">
      <BlockLeftSide />
      <UISwitchColorMode class="w-full" />
      <BlockLeftCenter />
      <NuxtLink to="/achievements" title="Swap to Achievement" :class="link">
        <Icon name="line-md:chevron-small-double-right" class="animate-pulse w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <BlockLeftCenter />
      <UILinkFeed />
      <BlockLeftSide />
    </div>
  </main>
</template>

<script setup lang="ts">
const title = ref("Project - Dewa");
const description = ref("This is my projects");

const layout = "flex flex-wrap justify-center items-center xl:w-40 2xl:w-52 py-6 mx-auto h-screen bg-white dark:bg-gray-950 fixed top-0";
const link = "w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200";

useSeoMeta({
  title,
  description,
});
</script>
