<template>
  <NuxtLink
    data-aos="zoom-in"
    data-aos-duration="1000"
    :to="project.to"
    target="_blank"
    :title="project.title"
    class="text-gray-500 dark:text-white hover:text-yellow-500 col-span-3 cursor-pointer ease-in-out duration-300 hover:scale-105 hover:backdrop-saturate-200 flex justify-center border-dashed border-2 border-gray-400 dark:border-gray-800 pt-4 pb-6 hover:border-yellow-500 dark:hover:border-gray-100"
    v-for="project in projects"
    :key="project.id"
  >
    <div class="flex justify-center flex-col gap-6">
      <img
        :src="project.src"
        alt=""
        class="w-12 h-full m-auto rounded-full p-1.5 shadow-md bg-zinc-800 border border-zinc-700/50 ring-0"
      />
      <div class="flex justify-center items-center">
        <Icon name="ph:link-bold" class="w-3 h-3 lg:w-4 2xl:w-5 lg:h-4 2xl:h-5" /><span
          class="ml-2 text-sm lg:text-md 2xl:text-base font-semibold"
          >{{ project.title }}</span
        >
      </div>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Portfolio",
          src: "icon/hero-mobile.webp",
          to: "https://github.com/devdewa?tab=repositories",
        },
        {
          id: 2,
          title: "Old Portfolio",
          src: "icon/old-portfolio.png",
          to: "https://dewaprogramming.vercel.app/",
        },
        {
          id: 3,
          title: "DewaProgramming",
          src: "icon/dewaprogramming.png",
          to: "https://github.com/devdewa/DewaProgramming",
        },
        {
          id: 4,
          title: "Decorative Plant",
          src: "icon/decorative-plant.svg",
          to: "https://decorative-plant.vercel.app/",
        },
        {
          id: 5,
          title: "Learning Centre Indonesia",
          src: "icon/lci.svg",
          to: "https://learningcentreindonesia.com/web/",
        },
        {
          id: 6,
          title: "Wangyland",
          src: "icon/wangyland.png",
          to: "https://wangyland.vercel.app/",
        },
        {
          id: 7,
          title: "Bang CV",
          src: "icon/bangcv.webp",
          to: "https://github.com/devdewa/bangcv",
        },
        {
          id: 8,
          title: "MP3 / MP4 Downloader",
          src: "icon/github.svg",
          to: "https://dewa-downloader.vercel.app/",
        },
        {
          id: 9,
          title: "E-Commerce LSP",
          src: "icon/lsp.webp",
          to: "https://github.com/devdewa/E-Commerce-LSP",
        },
        {
          id: 10,
          title: "Belajar HTML App",
          src: "icon/expo.svg",
          to: "https://github.com/devdewa/React-Native-Expo-Belajar-HTML-App",
        },
        {
          id: 11,
          title: "Averroes Unipessoal. Lda",
          src: "icon/averroes.png",
          to: "https://www.averroes.info/",
        },
        {
          id: 12,
          title: "Protem",
          src: "icon/github.svg",
          to: "https://pt-teknologi-pustaka-indonesia-buku.vercel.app/",
        },
      ],
    };
  },
};
</script>
