<template>
  <NuxtLink
    data-aos="zoom-in"
    data-aos-duration="1000"
    :to="project.to"
    target="_blank"
    :title="project.title"
    class="text-gray-500 dark:text-white hover:text-yellow-500 col-span-3 cursor-pointer ease-in-out duration-300 hover:scale-105 hover:backdrop-saturate-200 flex justify-center border-dashed border-2 border-gray-400 dark:border-gray-800 pt-4 pb-6 hover:border-yellow-500 dark:hover:border-gray-100"
    v-for="project in projects"
    :key="project.id"
  >
    <div class="flex justify-center flex-col gap-6">
      <img :src="project.src" alt="" class="w-12 h-full m-auto rounded-full p-1.5 shadow-md bg-zinc-800 border border-zinc-700/50 ring-0" />
      <div class="flex justify-center items-center">
        <Icon name="line-md:external-link" class="w-3 h-3 lg:w-4 2xl:w-5 lg:h-4 2xl:h-5" /><span class="ml-2 text-sm lg:text-md 2xl:text-base font-semibold">{{
          project.title
        }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import * as pro from "~/types/projects";

const projects = pro.projects;
</script>
