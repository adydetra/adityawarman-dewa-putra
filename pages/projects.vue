<template>
  <main class="bg-white dark:bg-gray-950 tracking-wide select-none relative">
    <div class="left-0" :class="layout">
      <AtomsNumber>3</AtomsNumber>
      <NuxtLink to="/uses" title="Swap to Uses" :class="link">
        <Icon name="line-md:chevron-small-double-left" class="w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <AtomsLinkBlog/>
    </div>
    <LazyOrganismProject />
    <div class="right-0" :class="layout">
      <AtomsLineSide />
      <AtomsButtonColor class="w-full" />
      <AtomsLineCenter />
      <NuxtLink to="/achievements" title="Swap to Achievement" :class="link">
        <Icon name="line-md:chevron-small-double-right" class="animate-pulse w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <AtomsLinkFeed />
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ title: "Projects" });
const layout = "flex flex-wrap justify-center items-center xl:w-40 2xl:w-52 py-6 mx-auto h-screen bg-white dark:bg-gray-950 fixed top-0";
const link = "w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200";
</script>
