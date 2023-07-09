<template>
    <div class="bg-gradient-to-r from-gray-950 to-gray-900 mx-auto h-screen relative w-screen">
            <section class="grid grid-cols-8 h-screen">
                <div class="col-span-5 flex items-center py-40 px-24 bg-[url('/assets/img/pattern-hero-left.png')] bg-contain bg-center">
                    <div class="xl:space-y-6 2xl:space-y-8">
                        <p class="text-gray-300 xl:text-3xl 2xl:text-5xl font-bold xl:leading-relaxed 2xl:leading-snug">
                            <span class="text-yellow-200">Front End Developer</span>, website and mobile, enjoying life.
                        </p>
                        <p class="text-gray-400 xl:text-md 2xl:text-lg">
                            ~ I’m Adityawarman Dewa Putra. I live in Jakarta Indonesia.
                        </p>
                        <ul class="flex text-gray-400 xl:gap-7 2xl:gap-8">
                            <li v-for="data in datas" :key="data.id">
                                <NuxtLink :to="data.to" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon :name="data.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-span-3 flex justify-center items-center bg-yellow-200 py-40 bg-[url('/assets/img/pattern-hero-right.png')] bg-contain bg-center">
                    <nuxt-img src="../../assets/img/hero.png" alt="Photo" loading="lazy" class="xl:w-64 2xl:w-96 rotate-3 rounded-[2rem] shadow-xl shadow-gray-500/40" />
                </div>
            </section>
        </div>
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