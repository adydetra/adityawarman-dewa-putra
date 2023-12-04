<script lang="ts" setup>
const works = useWorks();
</script>

<template>
  <NuxtLink
    v-for="(work, index) in works"
    :key="index"
    :to="`https://${work.url}`"
    :title="work.title"
    target="_blank"
    class="relative flex justify-center col-span-8 md:col-span-4 lg:col-span-3 pt-4 pb-6 2xl:pb-7 text-gray-500 dark:text-gray-400 cursor-pointer hover:backdrop-saturate-200 border-2 border-dashed border-gray-400 dark:border-gray-800 hover:border-yellow-500 dark:hover:border-gray-100"
  >
    <div class="flex flex-col gap-4 2xl:gap-6 w-full px-6">
      <div class="flex items-center">
        <span class="text-xs 2xl:text-base font-light tracking-wider">{{ work.title }}</span>
      </div>
      <div class="flex justify-between items-center w-full">
        <span class="text-[11px] 2xl:text-xs font-extralight tracking-widest">TECH<span class="ml-2.5 bg-gray-100 dark:bg-slate-900 rounded py-0.5 px-1.5">{{ work.tech }}</span></span>
        <Icon
          :name="work.icon"
          class="absolute right-6 w-6 h-6 2xl:w-7 2xl:h-7 rounded-full p-1.5 shadow-sm bg-gray-100 dark:bg-zinc-800 border border-gray-400/50 dark:border-zinc-700/50 ring-0"
        />
      </div>
    </div>
  </NuxtLink>
</template>
