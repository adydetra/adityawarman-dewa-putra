<template>
  <main class="bg-white dark:bg-gray-950 flex tracking-wide h-screen select-none">
    <div class="flex flex-wrap justify-center items-center px-12 py-6 mx-auto xl:w-44 2xl:w-60">
      <BlockLeftSide />
      <div class="text-md text-gray-400 text-center w-full">
        <span class="bg-gray-700 py-2 px-4 text-yellow-300 dark:text-yellow-300 rounded-sm">2</span>
      </div>
      <BlockLeftCenter />
      <NuxtLink
        to="/"
        title="Swap to Home"
        class="w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200"
      >
        <Icon name="uim:angle-double-left" class="animate-pulse w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <BlockLeftCenter />
      <NuxtLink
        to="/blog"
        title="Redirect to Blog"
        class="text-xs text-gray-400 text-center -rotate-45 w-full"
        >Blog</NuxtLink
      >
      <BlockLeftSide />
    </div>
    <ContentsUsesComponent />
    <div class="flex flex-wrap justify-center items-center px-12 py-6 mx-auto xl:w-44 2xl:w-60">
      <BlockLeftSide />
      <UISwitchColorMode />
      <BlockLeftCenter />
      <NuxtLink
        to="/projects"
        title="Swap to Projects"
        class="w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200"
      >
        <Icon name="uim:angle-double-right" class="animate-pulse w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <BlockLeftCenter />
      <p class="text-xs text-gray-400 text-center rotate-45 w-full">By Dewa</p>
      <BlockLeftSide />
    </div>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Uses - Dewa",
  ogTitle: "Uses - Dewa",
});
</script>
