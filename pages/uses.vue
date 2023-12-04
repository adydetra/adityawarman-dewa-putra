<script lang="ts" setup>
definePageMeta({ title: 'Uses' });
</script>

<template>
  <NuxtLayout class="lg:bg-[url('/images/pattern-hero-left.png')] lg:dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center">
    <div class="container mx-auto px-7 lg:px-40 2xl:px-24 pb-14 2xl:pb-16 py-14 2xl:py-0">
      <div class="mb-16 lg:hidden">
        <AtomsColorMode
          class="fixed z-10 flex items-center top-4 right-4 rounded-md bg-gray-200 ring-1 ring-gray-400 dark:ring-0 dark:bg-white/10 p-2 dark:lg:bg-transparent"
        />
        <AtomsNav />
      </div>
      <h1 class="text-gray-500 dark:text-gray-300 text-center text-4xl lg:text-3xl 2xl:text-4xl font-bold mb-16">
        <div class="leading-relaxed hidden lg:block">
          Software I use, gadgets I love, and<br>the tech stack that I use.
        </div>
        <div class="lg:hidden">
          Uses
        </div>
      </h1>
      <div class="grid grid-cols-8 gap-2 space-y-4 lg:space-y-0 lg:gap-12 2xl:gap-20">
        <MoleculesTheUsesCard />
      </div>
    </div>
  </NuxtLayout>
</template>
