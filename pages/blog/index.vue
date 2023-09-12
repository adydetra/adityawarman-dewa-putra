<template>
  <h1 class="text-2xl xl:text-3xl 2xl:text-4xl text-center font-bold py-6 lg:py-12">Blog Posts</h1>
  <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 2xl:gap-20 mt-4 lg:mt-8">
    <AtomsCardBlog :posts="posts" />
  </section>
</template>

<script setup>
definePageMeta({ title: "Blog", layout: "blog" });
const { data: posts } = await useAsyncData("posts", () => queryContent("/blog").find());
</script>
