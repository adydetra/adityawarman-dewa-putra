<template>
    <div class="bg-white dark:bg-gray-950 mx-auto h-screen relative w-screen">
            <section class="grid grid-cols-8 h-screen">
                <div class="col-span-5 flex items-center py-40 pl-10 pr-16 2xl:px-24 bg-[url('/assets/img/pattern-hero-left.png')] bg-contain bg-center">
                    <div class="xl:space-y-6 2xl:space-y-8">
                        <p class="text-gray-500 dark:text-gray-300 xl:text-4xl 2xl:text-5xl font-bold xl:leading-relaxed 2xl:leading-snug">
                            <span class="text-yellow-300 dark:text-yellow-200">Front End Developer</span>, website and mobile, enjoying life.
                        </p>
                        <p class="text-gray-400 xl:text-md 2xl:text-lg">
                            ~ I’m Adityawarman Dewa Putra. I live in Jakarta Indonesia.
                        </p>
                        <ul class="flex text-gray-500 dark:text-gray-400 xl:gap-7 2xl:gap-8">
                            <li v-for="data in datas" :key="data.id">
                                <NuxtLink :to="data.to" :title="data.title" target="_blank" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-400 dark:hover:text-yellow-200">
                                    <Icon :name="data.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-span-3 flex justify-center items-center bg-white dark:bg-yellow-200  bg-[url('/assets/img/pattern-hero-right.png')] bg-contain bg-center">
                    <Swiper
                        :modules="[SwiperAutoplay, SwiperEffectFade]"
                        :slides-per-view="1"
                        :loop="true"
                        :effect="'fade'"
                        :autoplay="{
                            delay: 4000,
                            disableOnInteraction: true,
                        }"
                    >
                        <SwiperSlide class="py-4">
                            <div class="relative py-4 xl:w-[280px] 2xl:w-[360px] xl:h-[420px] 2xl:h-[540px]">
                                <img src="~/assets/img/hero-1.jpg" alt="" class="w-full h-full object-cover rotate-2 rounded-[2rem]" />
                                <div class="flex justify-center items-center absolute bg-gray-100 border border-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full">👋</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="py-4">
                            <div class="relative py-4 xl:w-[280px] 2xl:w-[360px] xl:h-[420px] 2xl:h-[540px]">
                                <img src="~/assets/img/hero-2.jpg" alt="" class="w-full h-full object-cover rotate-2 rounded-[2rem]" />
                                <div class="flex justify-center items-center absolute bg-gray-100 border border-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full">👋</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="py-4">
                            <div class="relative py-4 xl:w-[280px] 2xl:w-[360px] xl:h-[420px] 2xl:h-[540px]">
                                <img src="~/assets/img/hero-3.jpg" alt="" class="w-full h-full object-cover object-left-bottom rotate-2 rounded-[2rem]" />
                                <div class="flex justify-center items-center absolute bg-gray-100 border border-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full">👋</div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                </div>
            </section>
        </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        { id: 1, name: "uim:github-alt", title:"Github", to: "https://github.com/devdewa/" },
        { id: 2, name: "uim:instagram", title:"Instagram", to: "https://www.instagram.com/741_dewa/" },
        { id: 3, name: "uim:facebook-f", title:"Facebook", to: "https://web.facebook.com/adityawarman.dewa.putra" },
        { id: 4, name: "uim:linkedin-alt", title:"Linkedin", to: "https://www.linkedin.com/in/adityawarman-dewa-putra/" },
      ]
    }
  },
}
</script>

<style scoped>  
    .swiper-slide { @apply flex justify-center items-center}
    .swiper, .swiper-content { @apply !h-full }
</style>