<template>
    <div class="bg-[url('/assets/img/pattern-hero-left.png')] bg-contain bg-center mx-auto relative w-screen">
            <section class="flex flex-wrap justify-center items-center h-full">
                <div class="py-8 px-4">
                    <div class="flex justify-center items-center bg-yellow-200 p-0.5 w-16 rotate-3 rounded-full">
                        <nuxt-img src="~/assets/img/hero-mobile.png" alt="Photo" class="w-16 rounded-full shadow-md shadow-gray-500/40" />
                    </div>
                    <div class="space-y-6 mt-6">
                        <p class="text-gray-300 text-3xl font-bold leading-snug">
                            <span class="text-yellow-200">Front End Developer</span>, website and mobile, enjoying life.
                        </p>
                        <p class="text-gray-400 text-sm">
                            ~ I’m Adityawarman Dewa Putra <span class="text-xs ml-2">🇮🇩</span>
                        </p>
                        <ul class="flex text-gray-400 gap-7">
                            <li v-for="data in datas" :key="data.id">
                                <NuxtLink :to="data.to" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon :name="data.name" class="w-5 h-5 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
    </div>

    <section class="flex gap-8 -ml-10 mt-10">
        <img src="~/assets/img/hero.png" alt="Photo" class="w-full object-cover rounded-md -rotate-3" />
        <img src="~/assets/img/hero.png" alt="Photo" class="w-full object-cover rounded-md aspect-[9/10] rotate-3" />
        <img src="~/assets/img/hero.png" alt="Photo" class="w-full object-cover rounded-md rotate-3" />
    </section>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        { id: 1, name: "uim:github-alt", to: "https://github.com/devdewa/" },
        { id: 2, name: "uim:instagram", to: "https://www.instagram.com/741_dewa/" },
        { id: 3, name: "uim:facebook-f", to: "https://web.facebook.com/adityawarman.dewa.putra" },
        { id: 4, name: "uim:linkedin-alt", to: "https://www.linkedin.com/in/adityawarman-dewa-putra/" },
      ]
    }
  },
}
</script>