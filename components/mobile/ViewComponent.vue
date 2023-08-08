<template>
  <div class="bg-[url('/assets/pattern-hero-left.png')] dark:bg-[url('/assets/pattern-hero-left-dark.png')] bg-contain bg-center mx-auto relative pt-12">
    <UISwitchColorMode class="fixed top-7 right-7 z-10" />
    <section class="flex flex-wrap justify-center items-center w-full h-full">
      <div class="py-8 px-4 md:px-20 w-full">
        <div class="flex justify-center items-center bg-yellow-200 p-0.5 w-16 md:w-20 rotate-3 rounded-full">
          <img src="/images/hero-mobile.webp" alt="Photo" class="w-full h-full rounded-full shadow-md shadow-gray-500/40" />
        </div>
        <div class="space-y-6 mt-6">
          <p class="text-gray-500 dark:text-gray-300 text-3xl md:text-4xl md:max-w-[85%] font-bold leading-snug md:leading-relaxed">
            <span class="text-yellow-300 dark:text-yellow-200">Front End Developer</span>, website and mobile, enjoying life.
          </p>
          <p class="text-gray-400 text-sm leading-loose max-w-[75%]">~ I’m Adityawarman Dewa Putra. Live in Jakarta, Indonesia. 🇮🇩</p>
          <ul class="flex text-gray-500 dark:text-gray-400 gap-8 md:gap-7">
            <li v-for="data in datas" :key="data.id">
              <NuxtLink :to="data.to" :title="data.title" target="_blank" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                <Icon :name="data.name" class="w-5 h-5 md:w-6 md:h-6" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <LazyMobileContent />
  </div>
</template>

<script setup lang="ts">
const datas = [
  { id: 1, name: "line-md:github-loop", title: "Github", to: "https://github.com/devdewa/" },
  {
    id: 2,
    name: "line-md:discord",
    title: "Discord",
    to: "https://discord.gg/9z6APrYMAq",
  },
  {
    id: 3,
    name: "line-md:email",
    title: "Email",
    to: "mailto:devdewa123.sp@gmail.com",
  },
  {
    id: 4,
    name: "line-md:instagram",
    title: "Instagram",
    to: "https://www.instagram.com/741_dewa/",
  },
  {
    id: 5,
    name: "line-md:facebook",
    title: "Facebook",
    to: "https://web.facebook.com/adityawarman.dewa.putra",
  },
  {
    id: 6,
    name: "line-md:linkedin",
    title: "Linkedin",
    to: "https://www.linkedin.com/in/adityawarman-dewa-putra/",
  },
];
</script>
