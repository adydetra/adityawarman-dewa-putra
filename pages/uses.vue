<template>
  <main class="bg-white dark:bg-gray-950 tracking-wide select-none relative">
    <div class="left-0" :class="layout">
      <AtomsNumber>2</AtomsNumber>
      <NuxtLink to="/" title="Swap to Home" :class="link">
        <Icon name="line-md:chevron-small-double-left" class="animate-pulse w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <AtomsLinkBlog />
    </div>
    <LazyOrganismUses />
    <div class="right-0" :class="layout">
      <AtomsLineSide />
      <AtomsButtonColor class="w-full" />
      <AtomsLineCenter />
      <NuxtLink to="/projects" title="Swap to Projects" :class="link">
        <Icon name="line-md:chevron-small-double-right" class="animate-pulse w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <AtomsLinkFeed />
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({ title: "Uses" });
const layout = "hidden lg:flex flex-wrap justify-center items-center xl:w-40 2xl:w-52 py-6 mx-auto h-screen bg-white dark:bg-gray-950 fixed top-0";
const link = "w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200";
</script>
