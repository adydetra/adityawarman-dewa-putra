<script setup lang="ts">
const works = useWorks();
</script>

<template>
  <NuxtLink
    v-for="(work, index) in works"
    :key="index"
    :to="`https://${work.url}`"
    :title="work.title"
    target="_blank"
    class="relative flex justify-center col-span-8 md:col-span-4 3xl:col-span-3 pt-4 pb-6 2xl:pb-7 text-gray-500 dark:text-gray-400 transition-colors ease-in-out duration-500 cursor-pointer hover:backdrop-saturate-200 border-2 border-dashed border-gray-400 dark:border-gray-800 hover:border-yellow-500 dark:hover:border-gray-100"
  >
    <div class="flex flex-col gap-4 2xl:gap-6 w-full px-6">
      <div class="flex items-center">
        <span class="text-xs 2xl:text-base font-light tracking-wider">{{ work.title }}</span>
      </div>
      <div class="flex justify-between items-center w-full">
        <span class="text-[11px] lg:text-[9.5px] 2xl:text-xs font-extralight tracking-widest space-x-2.5">
          <span class="bg-gray-100 dark:bg-slate-900 rounded py-0.5 px-1.5 transition-colors ease-in-out duration-500">{{ work.tech }}</span>
          <span class="bg-gray-100 dark:bg-slate-900 rounded py-0.5 px-1.5 transition-colors ease-in-out duration-500">{{ work.ui }}</span>
        </span>
        <div class="absolute flex items-center right-6 p-1.5 shadow-sm bg-gray-100 dark:bg-zinc-800 rounded-full border border-gray-400/50 dark:border-zinc-700/50 ring-0 transition-colors ease-in-out duration-500">
          <Icon
            :name="work.icon"
            class="size-3 2xl:size-4"
          />
        </div>
      </div>
    </div>
  </NuxtLink>
</template>
