<template>
    <div class="mx-auto h-screen relative w-screen px-12 2xl:px-24 py-8 2xl:py-16 bg-[url('/assets/img/pattern-hero-left.png')] bg-contain bg-center">
            <h1 data-aos="fade-down" data-aos-duration="1000" class="text-gray-300 text-center text-3xl 2xl:text-4xl font-bold leading-snug 2xl:leading-snug mb-16">
                Software I use, gadgets I love, and<br/>and the tech stack that I use.
            </h1>

            <div class="grid grid-cols-8 gap-20">
                <!-- Workstation -->
                <div data-aos="zoom-in" data-aos-duration="1000" class="col-span-2 flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                    <div>
                        <h2 class="text-gray-400 text-lg font-semibold mb-4 flex justify-center">Workstation</h2>
                        <ul class="flex justify-center text-gray-400 gap-6">
                            <li v-for="workstation in workstations" :key="workstation.id">
                                <NuxtLink :to="workstation.to" target="_blank" :title="workstation.title" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon :name="workstation.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Operating System -->
                <div data-aos="zoom-in" data-aos-duration="1000" class="col-span-4 flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                    <div>
                        <h2 class="text-gray-400 text-lg font-semibold mb-4 flex justify-center">Operating System</h2>
                        <ul class="flex justify-center text-gray-400 gap-6">
                            <li v-for="operating in operatings" :key="operating.id">
                                <NuxtLink :to="operating.to" target="_blank" :title="operating.title" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon :name="operating.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Database -->
                <div data-aos="zoom-in" data-aos-duration="1000" class="col-span-2 flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                    <div>
                        <h2 class="text-gray-400 text-lg font-semibold mb-4 flex justify-center">Database</h2>
                        <ul class="flex justify-center text-gray-400 gap-6">
                            <li v-for="database in databases" :key="database.id">
                                <NuxtLink :to="database.to" target="_blank" :title="database.title" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon :name="database.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <!-- <li>
                                <NuxtLink to="" target="_blank" title="MongoDB" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="bxl:mongodb" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li> -->
                        </ul>
                    </div>
                </div>
                <!-- Development tools -->
                <div data-aos="zoom-in" data-aos-duration="1000" class="backdrop-saturate-200 col-span-4 flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                    <div>
                        <h2 class="text-gray-400 text-lg font-semibold mb-6 flex justify-center">Development tools</h2>
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
                <div data-aos="zoom-in" data-aos-duration="1000" class="backdrop-saturate-200 col-span-4 flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                    <div>
                        <h2 class="text-gray-400 text-lg font-semibold mb-6 flex justify-center">Back End Development [Not Focus]</h2>
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
                <div data-aos="zoom-in" data-aos-duration="1000" class="col-span-8 flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                    <div>
                        <h2 class="text-gray-400 text-lg font-semibold mb-6 flex justify-center">Front End Development</h2>
                        <ul class="flex justify-center text-gray-400 gap-6 2xl:gap-8">
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
</template>

<script>
export default {
  data() {
    return {
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
        { id: 4, name: "bxl:java", title: "Java", to: "https://www.java.com/en/" },
      ],

      frontends: [
        { id: 1, name: "akar-icons:html-fill", title: "HTML", to: "https://id.wikipedia.org/wiki/HTML" },
        { id: 2, name: "akar-icons:css-fill", title: "CSS", to: "https://en.wikipedia.org/wiki/CSS" },
        { id: 3, name: "simple-icons:tailwindcss", title: "Tailwind CSS", to: "https://tailwindcss.com/" },
        { id: 4, name: "ri:bootstrap-fill", title: "Bootstrap", to: "https://getbootstrap.com/" },
        { id: 5, name: "mdi:language-javascript", title: "Javascript", to: "https://www.javascript.com/" },
        { id: 6, name: "akar-icons:jquery-fill", title: "jQuery", to: "https://jquery.com/" },
        { id: 7, name: "simple-icons:vuedotjs", title: "Vue Js", to: "https://vuejs.org/" },
        { id: 8, name: "simple-icons:nuxtdotjs", title: "Nuxt Js", to: "https://nuxt.com/" },
        { id: 9, name: "mdi:react", title: "React Js", to: "https://react.dev/" },
        { id: 10, name: "teenyicons:nextjs-solid", title: "Next Js", to: "https://nextjs.org/" },
        { id: 11, name: "devicon-plain:vitejs", title: "Vite Js", to: "https://vitejs.dev/" },
        { id: 12, name: "tabler:brand-react-native", title: "React Native", to: "https://reactnative.dev/" },
        { id: 13, name: "simple-icons:npm", title: "NPM", to: "https://www.npmjs.com/" },
        { id: 14, name: "akar-icons:yarn-fill", title: "Yarn", to: "https://yarnpkg.com/" },
      ],
    }
  },
}
</script>