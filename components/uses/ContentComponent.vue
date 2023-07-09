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
                            <li>
                                <NuxtLink to="https://www.gsmarena.com/xiaomi_redmi_note_7-9513.php" target="_blank" title="Xiaomi Redmi Note 7 Pro" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="ic:round-smartphone" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://www.reviewlaptop-id.com/asus-a412da-ek301t-amd-ryzen-3-3200u/" target="_blank" title="Asus A412DA Ryzen 3" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="solar:laptop-outline" class="w-4 h-4 lg:w-6 lg:h-6"/>
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
                            <li>
                                <NuxtLink to="https://www.android.com/intl/id_id/" target="_blank" title="Android" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="uim:android" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://www.microsoft.com/en-us/windows" target="_blank" title="Windows" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="uim:windows" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://archlinux.org/" target="_blank" title="Arch Linux" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="cib:arch-linux" class="w-4 h-4 lg:w-6 lg:h-6"/>
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
                            <li>
                                <NuxtLink to="https://www.mysql.com/" target="_blank" title="MySQL" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="simple-icons:mysql" class="w-4 h-4 lg:w-6 lg:h-6"/>
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
                            <li>
                                <NuxtLink to="https://code.visualstudio.com/" target="_blank" title="VS Code" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="akar-icons:vscode-fill" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://www.figma.com" target="_blank" title="Figma" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="solar:figma-bold-duotone" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://developer.android.com/studio" target="_blank" title="Android Studio" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="simple-icons:androidstudio" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://www.postman.com/" target="_blank" title="Postman" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="simple-icons:postman" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://www.apachefriends.org/download.html" target="_blank" title="XAMPP" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="simple-icons:xampp" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://www.mozilla.org/id/firefox/new/" target="_blank" title="Firefox" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="mdi:firefox" class="w-4 h-4 lg:w-6 lg:h-6"/>
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
                            <li>
                                <NuxtLink to="https://www.php.net/" target="_blank" title="PHP" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="akar-icons:php-fill" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://laravel.com/" target="_blank" title="Laravel" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="mdi:laravel" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://www.codeigniter.com/" target="_blank" title="Codeigniter" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="simple-icons:codeigniter" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://www.java.com/en/" target="_blank" title="Java" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="bxl:java" class="w-4 h-4 lg:w-6 lg:h-6"/>
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
                            <li>
                                <NuxtLink to="https://id.wikipedia.org/wiki/HTML" target="_blank" title="HTML" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="akar-icons:html-fill" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://en.wikipedia.org/wiki/CSS" target="_blank" title="CSS" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="akar-icons:css-fill" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://tailwindcss.com/" target="_blank" title="Tailwind CSS" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="simple-icons:tailwindcss" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://getbootstrap.com/" target="_blank" title="Bootstrap" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="ri:bootstrap-fill" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://www.javascript.com/" target="_blank" title="Javascript" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="mdi:language-javascript" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://vuejs.org/" target="_blank" title="Vue Js" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="simple-icons:vuedotjs" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://nuxt.com/" target="_blank" title="Nuxt Js (Framework Vue Js)" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="simple-icons:nuxtdotjs" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://react.dev/" target="_blank" title="React Js" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="mdi:react" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://nextjs.org/" target="_blank" title="Next Js (Framework React Js)" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="teenyicons:nextjs-solid" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://vitejs.dev/" target="_blank" title="Vite Js" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="devicon-plain:vitejs" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://reactnative.dev/" target="_blank" title="React Native" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="tabler:brand-react-native" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://www.npmjs.com/" target="_blank" title="NPM" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="simple-icons:npm" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="https://yarnpkg.com/" target="_blank" title="Yarn" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="akar-icons:yarn-fill" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
</template>