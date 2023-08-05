<script setup>
const { data: posts } = await useAsyncData("posts", () => queryContent("/blog").find());

const title = ref("Blog - Dewa");
const description = ref("This is my Blo");

useSeoMeta({
  title,
  description,
});
</script>

<template>
  <main class="bg-gray-950 text-white min-h-screen">
    <section
      class="bg-[url('/assets/pattern-hero-left.png')] dark:bg-[url('/assets/pattern-hero-left-dark.png')] bg-contain bg-center px-8 lg:px-32"
    >
      <div class="min-h-screen container mx-auto bg-gray-900/50 py-4 lg:py-10 px-8 lg:px-28 relative">
        <button @click.prevent="$router.back()" class="fixed top-4 left-4 rounded-md bg-white/10 px-2 py-1 lg:p-0 lg:bg-transparent lg:top-7 lg:left-9">
          <Icon name="icon-park-twotone:back" class="text-white w-4 h-4 lg:w-8 lg:h-8 -mt-1" />
        </button>
        <h1 class="text-2xl xl:text-3xl 2xl:text-4xl text-center font-bold py-6 lg:py-12">Blog Posts</h1>
        <section class="grid md:grid-cols-3 gap-10 2xl:gap-20 mt-4 lg:mt-8">
          <UIBlogCard :posts="posts" />
        </section>
      </div>
    </section>
  </main>
</template>
