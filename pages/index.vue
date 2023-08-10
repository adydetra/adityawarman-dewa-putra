<template>
  <!-- Desktop -->
  <main class="hidden lg:flex bg-white dark:bg-gray-950 tracking-wide h-screen select-none" v-if="$device.isDesktop">
    <div :class="layout">
      <BlockLeftSide />
      <div class="text-md text-gray-400 text-center w-full">
        <span class="bg-gray-700 py-2 px-4 text-yellow-300 dark:text-yellow-300 rounded-sm">1</span>
      </div>
      <BlockLeftCenter />
      <div class="w-full flex justify-center cursor-not-allowed py-8 ease-in-out duration-300 text-slate-400 hover:text-red-400">
        <Icon name="line-md:grid-3" class="w-4 h-4 lg:w-6 lg:h-6" />
      </div>
      <UILinkBlog />
    </div>
    <BaseHero />
    <div :class="layout">
      <BlockLeftSide />
      <UIButtonColorMode class="w-full" />
      <BlockLeftCenter />
      <NuxtLink
        to="/uses"
        title="Swap to Uses"
        class="w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200"
      >
        <Icon name="line-md:chevron-small-double-right" class="animate-pulse w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <UILinkFeed />
    </div>
  </main>

  <!-- Mobile -->
  <main class="lg:hidden bg-white dark:bg-gray-950 tracking-wide h-screen relative overflow-x-hidden" v-else>
    <MobileViewComponent />
  </main>
</template>

<script setup lang="ts">
const title = ref("Adityawarman Dewa Putra");
const description = ref("This is my personal portfolio, build using nuxt js and tailwind css.");

const layout = "flex flex-wrap justify-center items-center px-12 py-6 mx-auto xl:w-44 2xl:w-60";

useSeoMeta({
  title,
  description,
});
</script>
