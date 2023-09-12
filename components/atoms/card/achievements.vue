<template>
  <NuxtLink
    :to="achievement.to"
    target="_blank"
    :title="achievement.title"
    class="relative flex justify-center col-span-8 lg:col-span-4 my-6 lg:pt-4 lg:pb-6 lg:bg-gray-200/30 lg:dark:bg-slate-900/40 lg:shadow-sm shadow-blue-900/5 hover:bg-yellow-200/20 dark:hover:bg-slate-900 cursor-pointer ease-in-out duration-300 rounded-2xl"
    v-for="achievement in achievements"
    :key="achievement.id"
  >
    <div class="w-full flex flex-col justify-between gap-6 xl:p-8 2xl:p-12">
      <div class="h-60">
        <NuxtImg :src="achievement.thumbnail" alt="" placeholder loading="lazy" class="w-full h-full bg-gray-800/50 py-8 px-12 rounded-2xl" />
      </div>
      <p class="text-justify text-xs lg:text-sm 2xl:text-md indent-8 text-gray-400 !leading-loose"><span class="text-sky-400">#</span> {{ achievement.deskripsi }}</p>
      <p class="flex items-center font-semibold text-gray-500 dark:text-gray-200">
        Result: <span class="ml-2 text-gray-400 leading-relaxed">{{ achievement.result }}</span>
      </p>
      <div class="flex items-center text-gray-500 dark:text-white mt-4">
        <NuxtImg
          :src="achievement.src"
          alt=""
          placeholder
          loading="lazy"
          class="w-10 md:w-12 w-10 md:h-12 p-1.5 rounded-full bg-zinc-800/5 dark:bg-zinc-800 shadow-sm md:border border-zinc-700/50 ring-0"
        />
        <Icon name="line-md:text-box" class="w-3 h-3 lg:w-4 2xl:w-5 lg:h-4 2xl:h-5 ml-3" />
        <span class="ml-2 text-xs lg:text-md 2xl:text-base font-semibold">{{ achievement.title }}</span>
      </div>
    </div>

    <!-- Icon Team / Individual -->
    <div class="flex justify-center items-center absolute bg-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full">
      <Icon :name="achievement.icon" class="w-3 h-3 lg:w-4 2xl:w-5 lg:h-4 2xl:h-5" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import * as ach from "~/types/achievements";

const achievements = ach.achievements;
</script>
