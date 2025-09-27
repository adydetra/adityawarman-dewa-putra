<script setup lang="ts">
const socials = useSocial();
</script>

<template>
  <section class="grid grid-cols-8 h-screen lg:px-36 2xl:px-52">
    <div
      class="col-span-5 flex items-center py-40 pl-5 2xl:pl-10 pr-16 2xl:px-24 bg-[url('/images/pattern-hero-left.png')] dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center"
    >
      <div class="xl:space-y-6 2xl:space-y-8">
        <p class="text-neutral-500 dark:text-neutral-300 xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-bold lg:!leading-relaxed max-w-xl 2xl:max-w-7xl">
          <span class="text-yellow-300 dark:text-yellow-200">Full Stack Developer</span>, big fan open-source, enjoying life.
        </p>
        <p class="text-neutral-400 xl:text-sm 3xl:text-lg">
          ~ I’m Adityawarman <span class="px-1 rounded-md bg-neutral-200/50 dark:bg-neutral-900">Dewa</span> Putra. Live in Jakarta, Indonesia <Icon name="twemoji:flag-indonesia" class="size-4" />
        </p>
        <ul class="flex gap-8 md:gap-7 mt-2">
          <li v-for="(data, index) in socials" :key="index">
            <NuxtLink :to="`https://${data.url}`" :title="data.title" target="_blank" class="transition-colors ease-in-out duration-300 text-neutral-500 dark:text-neutral-400 hover:text-yellow-400 dark:hover:text-yellow-200">
              <Icon :name="data.icon" class="size-6 md:size-5 2xl:size-7" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-span-3 flex justify-center items-center bg-white dark:bg-yellow-200 bg-[url('/images/pattern-hero-right.png')] bg-contain bg-center transition-colors ease-in-out duration-500">
      <div class="relative py-4 xl:w-[280px] 3xl:w-[360px] xl:h-[420px] 3xl:h-[540px]">
        <NuxtImg src="/images/hero.webp" alt="" placeholder loading="lazy" class="size-full object-cover rotate-2 rounded-[2rem]" />
        <div class="flex justify-center items-center absolute bg-neutral-100 border border-neutral-300 text-black -top-4 -left-4 inset-0 size-12 rounded-full">
          <Icon size="30" name="meteocons:star-fill" />
        </div>
      </div>
    </div>
  </section>
</template>
