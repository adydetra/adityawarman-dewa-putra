<template>
  <ul class="flex text-gray-500 dark:text-gray-400 xl:gap-7 2xl:gap-8">
    <li v-for="data in social" :key="data.id">
      <NuxtLink :to="data.to" :title="data.title" target="_blank" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-400 dark:hover:text-yellow-200">
        <Icon :name="data.name" class="w-6 h-6 2xl:w-7 2xl:h-7" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
import * as data from "~/types/index";

const social = data.social;
</script>
