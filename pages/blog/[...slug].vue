<template>
  <main class="bg-gray-950 text-gray-400" id="blog">
    <section
      class="bg-[url('/assets/pattern-hero-left.png')] dark:bg-[url('/assets/pattern-hero-left-dark.png')] bg-contain bg-center px-32"
    >
      <div class="container mx-auto bg-gray-900/20 relative">
        <button @click.prevent="$router.back()" class="absolute top-7 left-9">Back</button>
        <div class="text-muted mx-auto py-12 px-16 w-full max-w-[40rem] bg-gray-900/40">
          <ContentRenderer :value="data" />
          <div class="mt-12 space-x-4">
            <NuxtLink
              v-for="tag in data.tags"
              :key="tag"
              :to="'/blog/tags/${tag}'"
              class="text-xs font-semibold py-2 px-4 rounded-lg text-gray-100 bg-blue-500 uppercase"
            >
              <Icon name="pajamas:label" size="0.8rem" class="text-gray-100 mr-2 -mt-[0.2rem]" />{{ tag }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
  #blog h1 {
    @apply text-3xl text-center font-bold mb-6;
  }
  #blog h2 {
    @apply text-xl font-semibold py-4;
  }
  #blog h3 {
    @apply text-lg font-semibold py-4;
  }
  #blog p {
    @apply text-sm leading-relaxed py-4;
  }
</style>

<script setup>
  const { path } = useRoute();

  const { data } = await useAsyncData(`content-${path}`, () => {
    return queryContent()
      .where({ _path: path })
      .findOne();
  });
</script>