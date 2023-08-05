<template>
  <!-- Desktop -->
  <main
    class="hidden lg:flex bg-white dark:bg-gray-950 tracking-wide h-screen select-none"
    v-if="$device.isDesktop"
  >
    <div class="flex flex-wrap justify-center items-center px-12 py-6 mx-auto xl:w-44 2xl:w-60">
      <BlockLeftSide />
      <div class="text-md text-gray-400 text-center w-full">
        <span class="bg-gray-700 py-2 px-4 text-yellow-300 dark:text-yellow-300 rounded-sm">1</span>
      </div>
      <BlockLeftCenter />
      <div
        class="w-full flex justify-center cursor-not-allowed py-8 ease-in-out duration-300 text-slate-400 hover:text-red-400"
      >
        <Icon name="uim:bars" class="w-4 h-4 lg:w-6 lg:h-6" />
      </div>
      <BlockLeftCenter />
      <NuxtLink
        to="/blog"
        title="Redirect to Blog"
        class="text-xs text-gray-400 text-center -rotate-45 w-full"
        >Blog</NuxtLink
      >
      <BlockLeftSide />
    </div>
    <ContentsHeroComponent />
    <div class="flex flex-wrap justify-center items-center px-12 py-6 mx-auto xl:w-44 2xl:w-60">
      <BlockLeftSide />
      <UISwitchColorMode />
      <BlockLeftCenter />
      <NuxtLink
        to="/uses"
        title="Swap to Uses"
        class="w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200"
      >
        <Icon name="uim:angle-double-right" class="animate-pulse w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <BlockLeftCenter />
      <p class="text-xs text-gray-400 text-center rotate-45 w-full">By Dewa</p>
      <BlockLeftSide />
    </div>
  </main>

  <!-- Mobile -->
  <main class="lg:hidden bg-gray-950 tracking-wide h-screen relative overflow-x-hidden" v-else>
    <MobileViewComponent />
  </main>
</template>