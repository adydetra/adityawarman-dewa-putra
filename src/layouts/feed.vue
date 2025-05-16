<script setup lang="ts">
const button = 'top-4 p-3 rounded-md';
</script>

<template>
  <section class="bg-white dark:bg-gray-950 text-gray-500 dark:text-white min-h-screen transition-colors ease-in-out duration-500">
    <div class="lg:bg-[url('/images/pattern-hero-left.png')] lg:dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center px-0 lg:px-32">
      <div class="container flex flex-col min-h-screen mx-auto py-4 lg:py-10 px-6 md:px-10 xl:px-28 relative">
        <div class="hidden lg:block">
          <AtomsBack class="left-4" :class="button" />
          <AtomsColorMode class="fixed right-4" :class="button" />
        </div>
        <div class="mb-16 lg:hidden">
          <AtomsColorMode
            class="fixed z-10 flex items-center top-4 right-4 p-2 rounded-md bg-gray-200 dark:bg-white/10 dark:lg:bg-transparent ring-1 ring-gray-400 dark:ring-0 transition-colors ease-in-out duration-500"
          />
          <AtomsNav />
        </div>
        <slot />
        <AtomsFooter class="!text-center lg:hidden" />
      </div>
    </div>
  </section>
</template>
