<template>
  <h1 class="text-2xl xl:text-3xl 2xl:text-4xl text-center font-bold py-6 lg:py-12">Feed Posts</h1>
  <section class="flex lg:w-[55%] 2xl:w-[45%] flex-col mx-auto space-y-5 mt-4 lg:mt-8">
    <AtomsCardFeed :posts="posts" />
  </section>
</template>

<script setup>
definePageMeta({ title: "Feed", layout: "feed" });
</script>
