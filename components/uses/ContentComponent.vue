<template>
    <div class="mx-auto h-screen relative w-screen px-12 2xl:px-24 py-8 2xl:py-16 bg-[url('/assets/img/pattern-hero-left.png')] bg-contain bg-center">
            <h1 class="text-gray-300 text-center text-3xl 2xl:text-4xl font-bold leading-snug 2xl:leading-snug mb-16">
                Software I use, gadgets I love, and<br/>and the tech stack that I use.
            </h1>

            <div class="grid grid-cols-8 gap-20">
                <!-- Workstation -->
                <div class="col-span-2 flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                    <div>
                        <h2 class="text-gray-400 text-lg font-semibold mb-4 flex justify-center">Workstation</h2>
                        <ul class="flex justify-center text-gray-400 gap-6">
                            <li v-for="workstation in workstations" :key="workstation.id">
                                <NuxtLink :to="workstation.to" target="_blank" title="Xiaomi Redmi Note 7 Pro" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon :name="workstation.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Operating System -->
                <div class="col-span-4 flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                    <div>
                        <h2 class="text-gray-400 text-lg font-semibold mb-4 flex justify-center">Operating System</h2>
                        <ul class="flex justify-center text-gray-400 gap-6">
                            <li v-for="operating in operatings" :key="operating.id">
                                <NuxtLink :to="operating.to" target="_blank" title="Android" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon :name="operating.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Database -->
                <div class="col-span-2 flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                    <div>
                        <h2 class="text-gray-400 text-lg font-semibold mb-4 flex justify-center">Database</h2>
                        <ul class="flex justify-center text-gray-400 gap-6">
                            <li v-for="database in databases" :key="database.id">
                                <NuxtLink :to="database.to" target="_blank" title="MySQL" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
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
                <div class="backdrop-saturate-200 col-span-4 flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                    <div>
                        <h2 class="text-gray-400 text-lg font-semibold mb-6 flex justify-center">Development tools</h2>
                        <ul class="flex justify-center text-gray-400 gap-6">
                            <li v-for="development in developments" :key="development.id">
                                <NuxtLink :to="development.to" target="_blank" title="VS Code" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon :name="development.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Back End Development -->
                <div class="backdrop-saturate-200 col-span-4 flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                    <div>
                        <h2 class="text-gray-400 text-lg font-semibold mb-6 flex justify-center">Back End Development [Not Focus]</h2>
                        <ul class="flex justify-center text-gray-400 gap-6">
                            <li v-for="backend in backends" :key="backend.id">
                                <NuxtLink :to="backend.to" target="_blank" title="PHP" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon :name="backend.name" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Front End Development -->
                <div class="col-span-8 flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300">
                    <div>
                        <h2 class="text-gray-400 text-lg font-semibold mb-6 flex justify-center">Front End Development</h2>
                        <ul class="flex justify-center text-gray-400 gap-6">
                            <li v-for="frontend in frontends" :key="frontend.id">
                                <NuxtLink :to="frontend.to" target="_blank" title="HTML" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
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
        { id: 1, name: "ic:round-smartphone", to: "https://www.gsmarena.com/xiaomi_redmi_note_7-9513.php" },
        { id: 2, name: "solar:laptop-outline", to: "https://www.reviewlaptop-id.com/asus-a412da-ek301t-amd-ryzen-3-3200u/" },
      ],

      operatings: [
        { id: 1, name: "uim:android", to: "https://www.android.com/intl/id_id/" },
        { id: 2, name: "uim:windows", to: "https://www.microsoft.com/en-us/windows" },
        { id: 3, name: "cib:arch-linux", to: "https://archlinux.org/" },
      ],
      
      databases: [
        { id: 1, name: "simple-icons:mysql", to: "https://www.mysql.com/" },
      ],

      developments: [
        { id: 1, name: "akar-icons:vscode-fill", to: "https://code.visualstudio.com/" },
        { id: 2, name: "solar:figma-bold-duotone", to: "https://www.figma.com" },
        { id: 3, name: "simple-icons:androidstudio", to: "https://developer.android.com/studio" },
        { id: 4, name: "simple-icons:postman", to: "https://www.postman.com/" },
        { id: 5, name: "simple-icons:xampp", to: "https://www.apachefriends.org/download.html" },
        { id: 6, name: "mdi:firefox", to: "https://www.mozilla.org/id/firefox/new/" },
      ],

      backends: [
        { id: 1, name: "akar-icons:php-fill", to: "https://www.php.net/" },
        { id: 2, name: "mdi:laravel", to: "https://laravel.com/" },
        { id: 3, name: "simple-icons:codeigniter", to: "https://www.codeigniter.com/" },
        { id: 4, name: "bxl:java", to: "https://www.java.com/en/" },
      ],

      frontends: [
        { id: 1, name: "akar-icons:html-fill", to: "https://id.wikipedia.org/wiki/HTML" },
        { id: 2, name: "akar-icons:css-fill", to: "https://en.wikipedia.org/wiki/CSS" },
        { id: 3, name: "simple-icons:tailwindcss", to: "https://tailwindcss.com/" },
        { id: 4, name: "ri:bootstrap-fill", to: "https://getbootstrap.com/" },
        { id: 5, name: "mdi:language-javascript", to: "https://www.javascript.com/" },
        { id: 6, name: "simple-icons:vuedotjs", to: "https://vuejs.org/" },
        { id: 7, name: "simple-icons:nuxtdotjs", to: "https://nuxt.com/" },
        { id: 8, name: "mdi:react", to: "https://react.dev/" },
        { id: 9, name: "teenyicons:nextjs-solid", to: "https://nextjs.org/" },
        { id: 10, name: "devicon-plain:vitejs", to: "https://vitejs.dev/" },
        { id: 11, name: "tabler:brand-react-native", to: "https://reactnative.dev/" },
        { id: 12, name: "simple-icons:npm", to: "https://www.npmjs.com/" },
        { id: 13, name: "akar-icons:yarn-fill", to: "https://yarnpkg.com/" },
      ],
    }
  },
}
</script>