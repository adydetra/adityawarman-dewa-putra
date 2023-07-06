<template>
    <div class="bg-gradient-to-r from-gray-900 to-gray-700 mx-auto h-screen relative w-screen">
            <section class="grid grid-cols-8 h-screen">
                <div class="col-span-5 flex items-center py-40 px-24">
                    <div class="xl:space-y-6 2xl:space-y-8">
                        <p class="text-gray-300 xl:text-3xl 2xl:text-5xl font-bold xl:leading-relaxed 2xl:leading-snug">
                            <span class="text-yellow-200">Front End Developer</span>, website and mobile, enjoying life.
                        </p>
                        <p class="text-gray-400 xl:text-md 2xl:text-lg">
                            ~ I’m Adityawarman Dewa Putra. I live in Jakarta Indonesia.
                        </p>
                        <ul class="flex text-gray-400 xl:gap-7 2xl:gap-8">
                            <li>
                                <NuxtLink to="" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="uim:github-alt" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="uim:instagram" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="uim:facebook-f" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink to="" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="uim:linkedin-alt" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-span-3 flex justify-center items-center bg-yellow-200 py-40">
                    <img src="~/assets/hero.png" alt="Photo" class="xl:w-64 2xl:w-96 rotate-3 rounded-[2rem] shadow-xl shadow-gray-500/40" />
                </div>
            </section>
        </div>
</template>