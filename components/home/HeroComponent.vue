<template>
    <div class="bg-gradient-to-r from-gray-950 to-gray-900 mx-auto h-screen relative w-screen">
            <section class="grid grid-cols-8 h-screen">
                <div class="col-span-5 flex items-center py-40 px-24 bg-[url('/assets/img/pattern-hero-left.png')] bg-contain bg-center">
                    <div class="xl:space-y-6 2xl:space-y-8">
                        <p class="text-gray-300 xl:text-3xl 2xl:text-5xl font-bold xl:leading-relaxed 2xl:leading-snug" data-aos="fade-down" data-aos-duration="1000">
                            <span class="text-yellow-200">Front End Developer</span>, website and mobile, enjoying life.
                        </p>
                        <p class="text-gray-400 xl:text-md 2xl:text-lg" data-aos="fade-right" data-aos-duration="1000">
                            ~ I’m Adityawarman Dewa Putra. I live in Jakarta Indonesia.
                        </p>
                        <ul class="flex text-gray-400 xl:gap-7 2xl:gap-8" data-aos="fade-up" data-aos-duration="1000">
                            <li v-for="data in datas" :key="data.id">
                                <NuxtLink :to="data.to" :title="data.title" target="_blank" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon :name="data.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-span-3 flex justify-center items-center bg-yellow-200 py-40 bg-[url('/assets/img/pattern-hero-right.png')] bg-contain bg-center">
                    <Swiper
                        :modules="[SwiperAutoplay, SwiperEffectFade]"
                        :slides-per-view="1"
                        :loop="true"
                        :effect="'fade'"
                        :autoplay="{
                            delay: 4000,
                            disableOnInteraction: true,
                        }"
                        data-aos="flip-right" data-aos-duration="2000"
                    >
                        <SwiperSlide class="py-4">
                            <div class="relative py-4 xl:w-64 2xl:w-96 h-full">
                                <img src="~/assets/img/hero.jpg" alt="" class=" h-full object-cover rotate-2 rounded-[2rem]" />
                                <div class="flex justify-center items-center absolute bg-gray-100 border border-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full">👋</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="py-4">
                            <div class="relative py-4 xl:w-64 2xl:w-96 h-full">
                                <img src="~/assets/img/mobile-2.jpg" alt="" class="xl:w-64 2xl:w-96 h-full object-cover rotate-2 rounded-[2rem]" />
                                <div class="flex justify-center items-center absolute bg-gray-100 border border-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full">👋</div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide class="py-4">
                            <div class="relative py-4 xl:w-64 2xl:w-96 h-full">
                                <img src="~/assets/img/mobile-3.jpg" alt="" class="xl:w-64 2xl:w-96 h-full object-cover object-left-bottom rotate-2 rounded-[2rem]" />
                                <div class="flex justify-center items-center absolute bg-gray-100 border border-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full">👋</div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                    
                    <!-- <img src="~/assets/img/hero.jpg" alt="" class="xl:w-64 2xl:w-96 rotate-3 rounded-[2rem] shadow-xl shadow-gray-500/40" /> -->
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