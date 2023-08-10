<template>
  <main class="bg-white dark:bg-gray-950 text-gray-600 dark:text-gray-400" id="blog">
    <section
      class="bg-[url('/images/pattern-hero-left.png')] dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center px-8 lg:px-32"
    >
      <div class="container mx-auto bg-gray-100/50 dark:bg-gray-900/20 relative">
        <UIButtonBack/>
        <div class="">
          <UIButtonColorMode class="fixed top-4 right-4 rounded-md bg-gray-200 ring-1 ring-gray-400 dark:ring-0 lg:ring-0 dark:bg-white/10 px-2 py-1 lg:p-0 lg:bg-transparent dark:lg:bg-transparent lg:top-7 lg:right-9" />
        </div>
        <div class="text-muted mx-auto py-12 px-8 lg:px-16 w-full lg:max-w-[40rem] bg-gray-500/10 dark:bg-gray-900/40">
          <ContentDoc />
          <div class="flex justify-evenly items-center flex-wrap lg:block mt-2 lg:mt-12 my-0 lg:space-x-4 text-center lg:text-left">
            <span
              v-for="tag in data.tags"
              class="text-[10px] lg:text-xs w-[45%] lg:max-w-full font-semibold mt-4 lg:mt-0 py-2 px-2 lg:px-4 rounded-md text-gray-100 bg-blue-500 uppercase"
            >
              <Icon name="pajamas:label" size="0.8rem" class="text-gray-100 mr-2" />{{
                tag
              }}
            </span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style>
#blog h1 {
  @apply text-2xl md:text-3xl text-center font-bold mb-6;
}
#blog prose-h2 {
  @apply text-xl block font-semibold pt-4 pb-2;
}
#blog prose-h3 {
  @apply text-sm block font-semibold pt-6 pb-2;
}
#blog p {
  @apply text-xs md:text-sm font-extralight md:font-normal !leading-loose py-2;
}
#blog a,
#blog strong {
  @apply text-xs md:text-sm my-4;
}
#blog li {
  @apply text-xs md:text-sm list-disc ml-5 mt-3 !leading-loose;
}
#blog blockquote p {
  @apply text-[9px] font-normal md:text-xs bg-gray-300 dark:bg-gray-800 rounded-md px-4 py-2 my-2;
}
</style>

<script setup>
const { path } = useRoute();

const { data } = await useAsyncData("content-${path}", () => {
  return queryContent().where({ _path: path }).findOne();
});
</script>
