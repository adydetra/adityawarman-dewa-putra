<template>
    <div class="mx-auto h-screen relative w-screen px-12 2xl:px-24 py-8 2xl:py-16 bg-[url('/assets/img/pattern-hero-left.png')] bg-contain bg-center">
            <h1 class="text-gray-300 text-center text-3xl 2xl:text-4xl font-bold leading-snug 2xl:leading-snug mb-16">
                Things I’ve made trying to put<br/>my dent in the universe.
            </h1>

            <div class="grid grid-cols-9 gap-8 xl:gap-16 2xl:gap-20">
                <!-- Project -->
                <NuxtLink :to="project.to" target="_blank" :title="project.title" class="col-span-3 cursor-pointer ease-in-out duration-300 hover:scale-105 hover:backdrop-saturate-200 flex justify-center border-dashed border-2 border-gray-800 pt-4 pb-6 hover:border-gray-100" v-for="project in projects" :key="project.id">
                  <div class="flex justify-center flex-col gap-6">
                      <img :src="project.src" alt="" class="w-12 h-12 m-auto rounded-full bg-white p-1.5 shadow-md border border-zinc-700/50 bg-zinc-800 ring-0" />
                      <div class="flex justify-center items-center text-white">
                        <Icon name="ph:link-bold" class="w-3 h-3 lg:w-4 2xl:w-5 lg:h-4 2xl:h-5"/><span class="ml-2 text-sm lg:text-md 2xl:text-base font-semibold">{{ project.title }}</span>
                      </div>
                  </div>
                </NuxtLink>
            </div>

        </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { id: 1, title: "Portfolio", src:"../../assets/img/hero-mobile.jpg", to: "https://github.com/devdewa?tab=repositories" },
        { id: 2, title: "Old Portfolio", src:"../../assets/img/icon/old-portfolio.svg", to: "https://dewaprogramming.vercel.app/" },
        { id: 3, title: "DewaProgramming", src:"../../assets/img/icon/dewaprogramming.svg", to: "https://github.com/devdewa/DewaProgramming" },
        { id: 4, title: "Wangyland", src:"../../assets/img/icon/wangyland.svg", to: "https://wangyland.vercel.app/" },
        { id: 5, title: "Bang CV", src:"../../assets/img/icon/bangcv.jpg", to: "https://bangcv.vercel.app/" },
        { id: 6, title: "MP3 / MP4 Downloader", src:"../../assets/img/icon/decorative-plant.svg", to: "https://dewa-downloader.vercel.app/" },
        { id: 7, title: "E-Commerce LSP", src:"../../assets/img/icon/lsp.png", to: "https://github.com/devdewa/E-Commerce-LSP" },
        { id: 8, title: "Belajar HTML App", src:"../../assets/img/icon/expo.png", to: "https://github.com/devdewa/React-Native-Expo-Belajar-HTML-App" },
        { id: 8, title: "PTS", src:"../../assets/img/icon/smkn1jakarta.png", to: "https://github.com/devdewa/PTS" },
      ],
    }
  },
}
</script>