<script setup lang="ts">
const button = 'top-4 p-3 rounded-md !bg-neutral-200/80 dark:!bg-neutral-800/80 transition-colors ease-in-out duration-500';
</script>

<template>
  <section class="bg-white dark:bg-neutral-950 text-neutral-500 dark:text-white min-h-screen transition-colors ease-in-out duration-500">
    <div class="lg:bg-[url('/images/pattern-hero-left.png')] lg:dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center">
      <div class="flex flex-col min-h-screen mx-auto py-4 lg:py-10 px-6 md:px-10 relative">
        <div class="hidden lg:block">
          <AtomsBack class="left-4" :class="button" />
          <AtomsColorMode class="fixed right-4" :class="button" />
        </div>
        <div class="mb-16 lg:hidden">
          <AtomsColorMode class="fixed x-10 flex items-center right-4 top-4 p-2 rounded-md bg-neutral-200 dark:bg-neutral-800/80 dark:lg:bg-transparent ring-1 ring-neutral-400 dark:ring-0 transition-colors ease-in-out duration-500" />
          <AtomsNav />
        </div>
        <slot />
        <AtomsFooter class="!text-center lg:hidden" />
      </div>
    </div>
  </section>
</template>
