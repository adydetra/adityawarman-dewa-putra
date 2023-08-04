<template>
  <div
    class="mx-auto h-screen relative w-screen px-12 2xl:px-24 py-8 2xl:py-16 bg-[url('/assets/img/pattern-hero-left.png')] dark:bg-[url('/assets/img/pattern-hero-left-dark.png')] bg-contain bg-center"
  >
    <h1
      data-aos="fade-down"
      data-aos-duration="1000"
      class="text-gray-500 dark:text-gray-300 text-center text-3xl 2xl:text-4xl font-bold leading-snug 2xl:leading-snug mb-16"
    >
      Software I use, gadgets I love, and<br />and the tech stack that I use.
    </h1>

    <div class="grid grid-cols-8 gap-20">
      <UIUsesCard />
    </div>
  </div>
</template>
