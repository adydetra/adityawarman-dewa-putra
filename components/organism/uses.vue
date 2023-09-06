<template>
  <div
    class="mx-auto min-h-screen w-screen px-40 2xl:px-24 py-14 2xl:py-16 container bg-[url('/images/pattern-hero-left.png')] dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center"
  >
    <h1 data-aos="fade-down" data-aos-duration="1000" class="text-gray-500 dark:text-gray-300 text-center text-3xl 2xl:text-4xl font-bold leading-snug 2xl:leading-snug mb-16">
      Software I use, gadgets I love, and<br />the tech stack that I use.
    </h1>

    <div class="grid grid-cols-8 gap-16 2xl:gap-20">
      <AtomsCardUses />
    </div>
  </div>
</template>
