<template>
  <div class="mx-auto h-screen relative w-screen">
    <section class="grid grid-cols-8 h-screen">
      <div
        class="col-span-5 flex items-center py-40 pl-10 pr-16 2xl:px-24 bg-[url('/assets/pattern-hero-left.png')] dark:bg-[url('/assets/pattern-hero-left-dark.png')] bg-contain bg-center"
      >
        <div class="xl:space-y-6 2xl:space-y-8">
          <p
            class="text-gray-500 dark:text-gray-300 xl:text-4xl 2xl:text-5xl font-bold xl:leading-relaxed 2xl:leading-snug"
          >
            <span class="text-yellow-300 dark:text-yellow-200">Front End Developer</span>, website
            and mobile, enjoying life.
          </p>
          <p class="text-gray-400 xl:text-md 2xl:text-lg">
            ~ I’m Adityawarman Dewa Putra. I live in Jakarta Indonesia.
          </p>
          <UISocialMedia />
        </div>
      </div>
      <div
        class="col-span-3 flex justify-center items-center bg-white dark:bg-yellow-200 bg-[url('/assets/pattern-hero-right.png')] bg-contain bg-center"
      >
        <UISwiper />
      </div>
    </section>
  </div>
</template>

<style scoped>
.swiper-slide {
  @apply flex justify-center items-center;
}
.swiper,
.swiper-content {
  @apply !h-full;
}
</style>
