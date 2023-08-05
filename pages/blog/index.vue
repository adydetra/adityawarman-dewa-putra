<script setup>
  const { data: posts } = await useAsyncData("posts", () => 
    queryContent("/blog").find()
  );
</script>

<template>
  <main class="bg-gray-950 text-white min-h-screen">
    <section
      class="bg-[url('/assets/pattern-hero-left.png')] dark:bg-[url('/assets/pattern-hero-left-dark.png')] bg-contain bg-center px-32"
    >
      <div class="min-h-screen container mx-auto bg-gray-900/50 py-10 px-28">
        <h1 class="text-md xl:text-3xl 2xl:text-4xl text-center font-bold py-12">Blog Posts</h1>
        <section class="grid md:grid-cols-3 gap-10 2xl:gap-20 mt-8">
              <ContentList path="/blog" v-slot="{ list }">
              <div v-for="article in list" :key="article._path">
                <h2>{{ article.title }}</h2>
                <p>{{ article.description }}</p>
              </div>
            </ContentList>
        </section>
      </div>
    </section>
  </main>
</template>
