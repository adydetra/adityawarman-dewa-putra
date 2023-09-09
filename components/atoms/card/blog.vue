<script setup>
const props = defineProps(["posts"]);
</script>

<template>
  <div v-for="post in props.posts" :key="post.slug" class="rounded-xl shadow-sm overflow-hidden hover:opacity-75">
    <NuxtLink :to="post._path">
      <NuxtImg :src="`/images/blog/${post.cover}`" alt="Blog Post Cover Image" placeholder loading="lazy" class="w-full h-32 md:h-40 2xl:h-52 object-cover" />
      <div class="p-4 lg:px-5 2xl:p-6 text-gray-500 dark:text-gray-100 bg-white/10 h-full">
        <h2 class="text-sm lg:text-md font-bold">{{ post.title }}</h2>
        <div class="flex justify-between items-center py-2">
          <p class="text-xs"><Icon name="line-md:calendar" class="mr-1" />{{ post.publishDate }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
