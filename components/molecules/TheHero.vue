<script lang="ts" setup>
const social = useSocial();
</script>

<template>
  <section class="grid grid-cols-8 h-screen lg:px-36 2xl:px-52">
    <div
      class="col-span-5 flex items-center py-40 pl-5 2xl:pl-10 pr-16 2xl:px-24 bg-[url('/images/pattern-hero-left.png')] dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center"
    >
      <div class="xl:space-y-6 2xl:space-y-8">
        <p class="text-gray-500 dark:text-gray-300 xl:text-4xl 2xl:text-5xl font-bold lg:!leading-relaxed max-w-xl 2xl:max-w-7xl">
          <span class="text-yellow-300 dark:text-yellow-200">Front End Developer</span>, big fan open source, enjoying life.
        </p>
        <p class="text-gray-400 xl:text-md 2xl:text-lg">
          ~ I’m Adityawarman <span class="px-1 rounded-md bg-gray-200/50 dark:bg-gray-900">Dewa</span> Putra. Live in Jakarta, Indonesia. 🇮🇩
        </p>
        <ul class="flex text-gray-500 dark:text-gray-400 gap-8 md:gap-7 mt-2">
          <li v-for="(data, index) in social" :key="index">
            <NuxtLink :to="data.url" :title="data.title" target="_blank" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-400">
              <Icon :name="data.icon" class="w-6 h-6 md:w-7 md:h-7" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-span-3 flex justify-center items-center bg-white dark:bg-yellow-200 bg-[url('/images/pattern-hero-right.png')] bg-contain bg-center">
      <div class="relative py-4 xl:w-[280px] 2xl:w-[360px] xl:h-[420px] 2xl:h-[540px]">
        <NuxtImg src="/images/hero.webp" alt="" placeholder loading="lazy" class="w-full h-full object-cover rotate-2 rounded-[2rem]" />
        <div class="flex justify-center items-center absolute bg-gray-100 border border-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full">
          <Icon size="30" name="meteocons:star-fill" />
        </div>
      </div>
    </div>
  </section>
</template>
