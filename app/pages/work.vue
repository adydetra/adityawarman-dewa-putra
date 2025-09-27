<script setup lang="ts">
definePageMeta({ title: 'Work' });
</script>

<template>
  <div>
    <NuxtLayout class="lg:bg-[url('/images/pattern-hero-left.png')] lg:dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center">
      <div class="container mx-auto px-7 lg:px-40 2xl:px-24 py-14">
        <div class="mb-16 lg:hidden">
          <AtomsColorMode
            class="fixed z-10 flex items-center top-4 right-4 rounded-md bg-neutral-200 ring-1 ring-neutral-400 dark:ring-0 dark:bg-white/10 p-2 dark:lg:bg-transparent"
          />
          <AtomsNav />
        </div>
        <h1 class="text-neutral-500 dark:text-neutral-300 text-center text-4xl lg:text-3xl 2xl:text-4xl font-bold mb-16 transition-colors ease-in-out duration-500">
          <div class="leading-relaxed hidden lg:block">
            Things I’ve made trying to put<br>my dent in the universe.
          </div>
          <div class="lg:hidden">
            Work
          </div>
        </h1>
        <div class="flex flex-col gap-16 2xl:px-32 3xl:px-0">
          <MoleculesTheWorkCard />
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
