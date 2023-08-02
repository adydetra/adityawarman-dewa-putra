<template>
    <div class="bg-[url('/assets/img/pattern-hero-left.png')] bg-contain bg-center mx-auto relative pt-12">

            <section class="flex flex-wrap justify-center items-center w-full h-full">
                <div class="py-8 px-4 md:px-20 w-full">
                    <div class="flex justify-center items-center bg-yellow-200 p-0.5 w-16 md:w-20 rotate-3 rounded-full">
                        <img src="~/assets/img/hero-mobile.webp" alt="Photo" class="w-full h-full rounded-full shadow-md shadow-gray-500/40" />
                    </div>
                    <div class="space-y-6 mt-6">
                        <p class="text-gray-300 text-3xl font-bold leading-snug md:hidden">
                            <span class="text-yellow-200">Front End Developer</span>, website and mobile, enjoying life.
                        </p>
                        <p class="text-gray-300 text-4xl font-bold leading-snug hidden md:block">
                            <span class="text-yellow-200">Front End Developer</span>, website <br/>and mobile, enjoying life.
                        </p>
                        <p class="text-gray-400 text-sm">
                            ~ I’m Adityawarman Dewa Putra <span class="text-xs ml-2">🇮🇩</span>
                        </p>
                        <ul class="flex text-gray-400 gap-7">
                            <li v-for="data in datas" :key="data.id">
                                <NuxtLink :to="data.to" :title="data.title" target="_blank" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon :name="data.name" class="w-5 h-5 md:w-6 md:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="flex justify-center gap-6 overflow-hidden pt-16 pb-12">
                <div class="relative aspect-[10/10] w-44 md:w-80 flex-none overflow-hidden rounded-xl -rotate-3 shadow-2xl shadow-yellow-200/10">
                    <img src="~/assets/img/hero.webp" alt="Photo" class="absolute h-full w-full object-cover" />
                </div>
                <div class="relative aspect-[10/10] w-32 md:w-60 flex-none overflow-hidden rounded-xl">
                    <img src="~/assets/img/mobile-3.webp" alt="Photo" class="absolute h-full w-full object-scale-down" />
                </div>
                <div class="relative aspect-[10/10] w-44 md:w-80 flex-none overflow-hidden rounded-xl rotate-3 shadow-2xl shadow-yellow-200/10">
                    <img src="~/assets/img/mobile-2.webp" alt="Photo" class="absolute h-full w-full object-cover" />
                </div>
            </section>

            <!-- Uses -->
            <div class="mx-auto relative px-6 py-8 md:py-20 lg:py-8 bg-[url('/assets/img/pattern-hero-left.png')] bg-contain bg-center">
                <h1 class="text-gray-300 text-center text-2xl font-bold leading-snug 2xl:leading-snug mb-16">
                    Software I use, gadgets I love, and and the tech stack that I use.
                </h1>

                <div class="grid grid-cols-10 md:grid-cols-12 gap-8">
                    <!-- Workstation -->
                    <div class="col-span-5 md:col-span-4 flex justify-center border-dashed border-2 border-gray-400/30 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                        <div>
                            <h2 class="text-gray-400 text-sm font-semibold mb-4 flex justify-center">Workstation</h2>
                            <ul class="flex justify-center text-gray-400 gap-6">
                                <li v-for="workstation in workstations" :key="workstation.id">
                                    <NuxtLink :to="workstation.to" target="_blank" :title="workstation.title" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                        <Icon :name="workstation.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Database -->
                    <div class="col-span-5 md:col-span-4 flex justify-center border-dashed border-2 border-gray-400/30 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                        <div>
                            <h2 class="text-gray-400 text-sm font-semibold mb-4 flex justify-center">Database</h2>
                            <ul class="flex justify-center text-gray-400 gap-6">
                                <li v-for="database in databases" :key="database.id">
                                    <NuxtLink :to="database.to" target="_blank" :title="database.title" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                        <Icon :name="database.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Operating System -->
                    <div class="col-span-10 md:col-span-4 flex justify-center border-dashed border-2 border-gray-400/30 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                        <div>
                            <h2 class="text-gray-400 text-sm font-semibold mb-4 flex justify-center">Operating System</h2>
                            <ul class="flex justify-center text-gray-400 gap-6">
                                <li v-for="operating in operatings" :key="operating.id">
                                    <NuxtLink :to="operating.to" target="_blank" :title="operating.title" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                        <Icon :name="operating.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Development tools -->
                    <div class="backdrop-saturate-200 col-span-10 md:col-span-6 flex justify-center border-dashed border-2 border-gray-400/30 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                        <div>
                            <h2 class="text-gray-400 text-sm font-semibold mb-6 flex justify-center">Development tools</h2>
                            <ul class="flex justify-center text-gray-400 gap-6">
                                <li v-for="development in developments" :key="development.id">
                                    <NuxtLink :to="development.to" target="_blank" :title="development.title" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                        <Icon :name="development.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Back End Development -->
                    <div class="backdrop-saturate-200 col-span-10 md:col-span-6 flex justify-center border-dashed border-2 border-gray-400/30 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                        <div>
                            <h2 class="text-gray-400 text-sm font-semibold mb-6 flex justify-center">Back End [Not Focus]</h2>
                            <ul class="flex justify-center text-gray-400 gap-6">
                                <li v-for="backend in backends" :key="backend.id">
                                    <NuxtLink :to="backend.to" target="_blank" :title="backend.title" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                        <Icon :name="backend.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!-- Front End Development -->
                    <div class="col-span-10 md:col-span-12 flex justify-center border-dashed border-2 border-gray-400/30 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                        <div>
                            <h2 class="text-gray-400 text-sm font-semibold mb-6 flex justify-center">Front End Development</h2>
                            <ul class="flex flex-wrap justify-center text-gray-400 gap-6 px-6">
                                <li v-for="frontend in frontends" :key="frontend.id">
                                    <NuxtLink :to="frontend.to" target="_blank" :title="frontend.title" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                        <Icon :name="frontend.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                    </NuxtLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

            <!-- Project -->
            <div class="mx-auto relative px-6 py-8 md:py-20 lg:py-8 bg-[url('/assets/img/pattern-hero-left.png')] bg-contain bg-center">
                    <h1 class="text-gray-300 text-center text-2xl font-bold leading-snug 2xl:leading-snug mb-10 md:mb-20 lg:mb-10">
                        Things I’ve made trying to put my dent in the universe.
                    </h1>

                    <div class="grid grid-cols-10 md:grid-cols-9 gap-8">
                        <!-- Project -->
                        <NuxtLink :to="project.to" target="_blank" :title="project.title" class="col-span-10 md:col-span-3 cursor-pointer ease-in-out duration-300 hover:scale-105 hover:backdrop-saturate-200 flex justify-center border-dashed border-2 border-gray-800 pt-4 pb-6 hover:border-gray-100" v-for="project in projects" :key="project.id">
                        <div class="flex justify-center flex-col gap-6">
                            <img :src="project.src" alt="" class="w-12 h-12 m-auto rounded-full bg-white p-1.5 shadow-md border border-zinc-700/50 bg-zinc-800 ring-0" />
                            <div class="flex justify-center items-center text-gray-200">
                                <Icon name="ph:link-bold" class="w-3 h-3"/><span class="ml-2 text-xs font-semibold">{{ project.title }}</span>
                            </div>
                        </div>
                        </NuxtLink>
                    </div>
            </div>

            <!-- Achievement -->
            <div class="mx-auto px-6 py-8 md:py-20 lg:py-8 container bg-[url('/assets/img/pattern-hero-left.png')] bg-contain bg-center">
                <h1 class="text-gray-300 text-center text-2xl font-bold leading-snug mb-10 md:mb-20 lg:mb-10">
                    Achievements that I have achieved both as a team or individually.
                </h1>

                <div class="grid grid-cols-5 md:grid-cols-6 gap-16 px-4 realtive">
                    <NuxtLink :to="achievement.to" target="_blank" :title="achievement.title" class="shadow-xl shadow-blue-800/5 col-span-5 md:col-span-3 cursor-pointer ease-in-out duration-300 hover:scale-105 rounded-2xl backdrop-saturate-200 hover:bg-yellow-200/20 flex justify-center pt-4 pb-6" v-for="achievement in achievements" :key="achievement.id">
                        <div class="w-full flex flex-col justify-between gap-6 px-6 pt-6 pb-4">
                            <img :src="achievement.thumbnail" alt="" class="w-full h-40 bg-gray-800/50 py-8 px-12 rounded-2xl" />
                            <p class="text-justify text-xs indent-3 text-gray-400 leading-loose"><span class="text-sky-400">#</span> {{ achievement.deskripsi }}</p>
                            <p class="flex text-sm items-center font-semibold text-gray-200">Result: <span class="ml-2 text-gray-400 leading-relaxed">{{ achievement.result }}</span></p>
                            <div class="flex items-center text-white mt-4">
                                <img :src="achievement.src" alt="" class="w-8 h-8 rounded-full bg-white p-1.5 shadow-md border border-zinc-700/50 bg-zinc-800 ring-0" />
                                <Icon name="ph:link-bold" class="w-3 h-3 ml-3"/>
                                <span class="ml-2 text-xs font-semibold leading-relaxed">{{ achievement.title }}</span>
                            </div>
                        </div>
                        
                        <!-- Icon Team / Individual -->
                        <div class="flex justify-center items-center absolute bg-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full"><Icon :name="achievement.icon" class="w-3 h-3"/></div>
                    </NuxtLink>
                </div>

            </div>

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
      ],

      //Uses
      workstations: [
        { id: 1, name: "ic:round-smartphone", title: "Xiaomi Redmi Note 7 Pro", to: "https://www.gsmarena.com/xiaomi_redmi_note_7-9513.php" },
        { id: 2, name: "solar:laptop-outline", title: "Asus A412DA Ryzen 3", to: "https://www.reviewlaptop-id.com/asus-a412da-ek301t-amd-ryzen-3-3200u/" },
      ],

      operatings: [
        { id: 1, name: "uim:android", title: "Android", to: "https://www.android.com/intl/id_id/" },
        { id: 2, name: "uim:windows", title: "Windows", to: "https://www.microsoft.com/en-us/windows" },
        { id: 3, name: "cib:arch-linux", title: "Arch Linux", to: "https://archlinux.org/" },
      ],
      
      databases: [
        { id: 1, name: "simple-icons:mysql", title: "My SQL", to: "https://www.mysql.com/" },
      ],

      developments: [
        { id: 1, name: "akar-icons:vscode-fill", title: "VS Code", to: "https://code.visualstudio.com/" },
        { id: 2, name: "solar:figma-bold-duotone", title: "FIGMA", to: "https://www.figma.com" },
        { id: 3, name: "simple-icons:androidstudio", title: "Android Studio", to: "https://developer.android.com/studio" },
        { id: 4, name: "simple-icons:postman", title: "Postman", to: "https://www.postman.com/" },
        { id: 5, name: "simple-icons:xampp", title: "XAMPP", to: "https://www.apachefriends.org/download.html" },
        { id: 6, name: "mdi:firefox", title: "Firefox", to: "https://www.mozilla.org/id/firefox/new/" },
      ],

      backends: [
        { id: 1, name: "akar-icons:php-fill", title: "PHP", to: "https://www.php.net/" },
        { id: 2, name: "mdi:laravel", title: "Laravel", to: "https://laravel.com/" },
        { id: 3, name: "simple-icons:codeigniter", title: "Codeigniter", to: "https://www.codeigniter.com/" },
      ],

      frontends: [
        { id: 1, name: "simple-icons:tailwindcss", title: "Tailwind CSS", to: "https://tailwindcss.com/" },
        { id: 2, name: "ri:bootstrap-fill", title: "Bootstrap", to: "https://getbootstrap.com/" },
        { id: 3, name: "akar-icons:jquery-fill", title: "jQuery", to: "https://jquery.com/" },
        { id: 4, name: "simple-icons:vuedotjs", title: "Vue Js", to: "https://vuejs.org/" },
        { id: 5, name: "simple-icons:nuxtdotjs", title: "Nuxt Js", to: "https://nuxt.com/" },
        { id: 6, name: "mdi:react", title: "React Js", to: "https://react.dev/" },
        { id: 7, name: "teenyicons:nextjs-solid", title: "Next Js", to: "https://nextjs.org/" },
        { id: 8, name: "devicon-plain:vitejs", title: "Vite Js", to: "https://vitejs.dev/" },
        { id: 9, name: "tabler:brand-react-native", title: "React Native", to: "https://reactnative.dev/" },
        { id: 10, name: "simple-icons:npm", title: "NPM", to: "https://www.npmjs.com/" },
        { id: 11, name: "akar-icons:yarn-fill", title: "Yarn", to: "https://yarnpkg.com/" },
      ],

      //Project
      projects: [
        { id: 1, title: "Portfolio", src:"icon/hero-mobile.webp", to: "https://github.com/devdewa?tab=repositories" },
        { id: 2, title: "Old Portfolio", src:"icon/old-portfolio.svg", to: "https://dewaprogramming.vercel.app/" },
        { id: 3, title: "DewaProgramming", src:"icon/dewaprogramming.svg", to: "https://github.com/devdewa/DewaProgramming" },
        { id: 4, title: "Decorative Plant", src:"icon/decorative-plant.svg", to: "https://decorative-plant.vercel.app/" },
        { id: 5, title: "Learning Centre Indonesia", src:"icon/lci.svg", to: "https://learningcentreindonesia.com/web/" },
        { id: 6, title: "Wangyland", src:"icon/wangyland.svg", to: "https://wangyland.vercel.app/" },
        { id: 7, title: "Bang CV", src:"icon/bangcv.webp", to: "https://github.com/devdewa/bangcv" },
        { id: 8, title: "MP3 / MP4 Downloader", src:"icon/github.svg", to: "https://dewa-downloader.vercel.app/" },
        { id: 9, title: "E-Commerce LSP", src:"icon/lsp.webp", to: "https://github.com/devdewa/E-Commerce-LSP" },
        { id: 10, title: "Belajar HTML App", src:"icon/expo.svg", to: "https://github.com/devdewa/React-Native-Expo-Belajar-HTML-App" },
        { id: 11, title: "Averroes Unipessoal. Lda", src:"icon/averroes.svg", to: "https://www.averroes.info/" },
        { id: 12, title: "Protem", src:"icon/github.svg", to: "https://pt-teknologi-pustaka-indonesia-buku.vercel.app/" },
      ],

      //Achievement
      achievements: [
        { 
            id: 1,
            title: "Hackathon Maritime 2021",
            thumbnail: "icon/hackathon.svg",
            src: "icon/maritime-explore.svg",
            icon: "ri:team-fill",
            to: "sertifikat-hackathon.jpg",
            result: "Semifinalist",
            deskripsi: "Kompetisi ini diselenggarakan oleh Dinas Pembinaan Potensi Maritim Markas Besar Angkatan Laut (Dispotmar Mabesal) dalam rangka menggalang potensi anak bangsa di bidang inovasi produk digital kemaritiman."
        },
        { 
            id: 2,
            title: "KKSI 2021",
            thumbnail: "icon/kksi.svg",
            src: "icon/go-prakerin.svg",
            icon: "ri:team-fill",
            to: "sertifikat-kksi.pdf",
            result: "Juara Harapan 1",
            deskripsi: "KKSI adalah singkatan dari Kamp Kreatif SMK Indonesia, yang merupakan event nasional yang rutin diselenggarakan oleh kementrian pendidikan dan kebudayaan serta direktorat jenderal vokasi yang dibantu oleh SMK pengampu atau penyelenggara."
        },
        { 
            id: 3,
            title: "Coding di Skilvul Playground",
            thumbnail: "icon/skilvul.svg",
            src: "icon/html.svg",
            icon: "bxs:user",
            to: "https://skilvul.com/paths/coding-di-skilvul-playground/student/ckqzaqvkkbpov0722lngebxow",
            result: "Complete",
            deskripsi: "Tulis coding tanpa harus install aplikasi lain dan langsung lihat hasil dari codemu dalam satu tempat. Membuat Halaman Website Pertama Kamu dengan menggunakan Skilvul Playground, hanya di Skilvul Playground!"
        },
        { 
            id: 4,
            title: "Bootstrap 5 - Landing Page",
            thumbnail: "icon/skilvul.svg",
            src: "icon/bootstrap.svg",
            icon: "bxs:user",
            to: "https://skilvul.com/courses/bootstrap-5-membuat-website-landing-page/student/ckqzaqvr4bppp0722g5uqhx0w",
            result: "SkilPoin 320/385",
            deskripsi: "Bootstrap membuat front-end developer dapat membuat website dengan cepat, fokus pada responsive mobile, dan membuat website menjadi lebih interaktif tanpa membuat banyak CSS dan JavaScript dari nol."
        },
      ],
    }
  },
}
</script>