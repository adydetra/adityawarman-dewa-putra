<template>
  <div class="left-0" :class="layout">
    <AtomsNumber>3</AtomsNumber>
    <NuxtLink to="/uses" title="Swap to Uses" :class="link">
      <Icon name="line-md:chevron-small-double-left" class="w-4 h-4 lg:w-6 lg:h-6" />
    </NuxtLink>
    <AtomsLinkBlog />
  </div>
  <div
    class="mx-auto min-h-screen w-screen px-7 lg:px-40 2xl:px-24 py-14 2xl:py-16 container bg-[url('/images/pattern-hero-left.png')] dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center"
  >
    <div class="mb-16 lg:hidden">
      <AtomsButtonColor
        class="fixed z-10 flex items-center top-4 right-4 rounded-md bg-gray-200 ring-1 ring-gray-400 dark:ring-0 dark:bg-white/10 p-2 dark:lg:bg-transparent"
      />
      <AtomsNav />
    </div>
    <h1 class="text-gray-500 dark:text-gray-300 text-center text-4xl lg:text-3xl 2xl:text-4xl font-bold mb-12 md:mb-16">
      <div class="leading-relaxed hidden lg:block">Things I’ve made trying to put<br />my dent in the universe.</div>
      <div class="lg:hidden">Projects</div>
    </h1>

    <div class="grid grid-cols-8 lg:grid-cols-9 gap-8 xl:gap-16 2xl:gap-20">
      <AtomsCardProjects />
    </div>
    <AtomsFooter class="!text-center lg:hidden" />
  </div>
  <div class="right-0" :class="layout">
    <AtomsLineSide />
    <AtomsButtonColor class="w-full" />
    <AtomsLineCenter />
    <NuxtLink to="/achievements" title="Swap to Achievement" :class="link">
      <Icon name="line-md:chevron-small-double-right" class="animate-pulse w-4 h-4 lg:w-6 lg:h-6" />
    </NuxtLink>
    <AtomsLinkFeed />
  </div>
</template>

<script lang="ts" setup>
const layout = "hidden lg:flex flex-wrap justify-center items-center xl:w-40 2xl:w-52 py-6 mx-auto h-screen bg-white dark:bg-gray-950 fixed top-0";
const link = "w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200";
</script>
