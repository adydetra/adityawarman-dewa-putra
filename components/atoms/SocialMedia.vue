<script lang="ts" setup>
const social = useSocial();
</script>

<template>
  <ul class="flex text-gray-500 dark:text-gray-400">
    <li v-for="(data, index) in social" :key="index">
      <NuxtLink :to="data.url" :title="data.title" target="_blank" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-400 dark:hover:text-yellow-200">
        <Icon :name="data.icon" class="w-5 h-5 md:w-6 md:h-6" />
      </NuxtLink>
    </li>
  </ul>
</template>
