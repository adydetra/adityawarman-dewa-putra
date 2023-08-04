<template>
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
        <img
          src="~/assets/img/hero-1.webp"
          alt=""
          class="w-full h-full object-cover rotate-2 rounded-[2rem]"
        />
        <div
          class="flex justify-center items-center absolute bg-gray-100 border border-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full"
        >
          👋
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="py-4">
      <div class="relative py-4 xl:w-[280px] 2xl:w-[360px] xl:h-[420px] 2xl:h-[540px]">
        <img
          src="~/assets/img/hero-2.webp"
          alt=""
          class="w-full h-full object-cover rotate-2 rounded-[2rem]"
        />
        <div
          class="flex justify-center items-center absolute bg-gray-100 border border-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full"
        >
          👋
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide class="py-4">
      <div class="relative py-4 xl:w-[280px] 2xl:w-[360px] xl:h-[420px] 2xl:h-[540px]">
        <img
          src="~/assets/img/hero-3.webp"
          alt=""
          class="w-full h-full object-cover object-left-bottom rotate-2 rounded-[2rem]"
        />
        <div
          class="flex justify-center items-center absolute bg-gray-100 border border-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full"
        >
          👋
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
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
