<script setup lang="ts">
const socials = useSocial();
</script>

<template>
  <ul class="flex">
    <li v-for="(data, index) in socials" :key="index">
      <NuxtLink :to="`https://${data.url}`" :title="data.title" target="_blank" class="transition ease-in-out duration-300 text-neutral-500 dark:text-neutral-400 hover:text-yellow-400 dark:hover:text-yellow-200">
        <Icon :name="data.icon" class="text-xl md:text-2xl" />
      </NuxtLink>
    </li>
  </ul>
</template>
