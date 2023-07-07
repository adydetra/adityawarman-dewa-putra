<template>
    <div class="bg-[url('/assets/pattern-hero-left.png')] bg-contain bg-center mx-auto relative w-screen">
            <section class="flex flex-wrap justify-center items-center h-full">
                <div class="py-8 px-6">
                    <div class="flex justify-center items-center bg-yellow-200 p-1.5 w-48 rotate-3 rounded-[2.1rem]">
                        <img src="~/assets/hero.png" alt="Photo" class="w-48  rounded-[2rem] shadow-lg shadow-gray-500/40" />
                    </div>
                    <div class="space-y-6 mt-8">
                        <p class="text-gray-300 text-xl font-bold leading-snug">
                            <span class="text-yellow-200">Front End Developer</span>, website and mobile, enjoying life.
                        </p>
                        <p class="text-gray-400 text-xs">
                            ~ I’m Adityawarman Dewa Putra. I live in Jakarta Indonesia.
                        </p>
                        <ul class="flex text-gray-400 gap-7">
                            <li>
                                <NuxtLink to="https://github.com/devdewa/" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
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
                                <NuxtLink to="https://www.linkedin.com/in/adityawarman-dewa-putra/" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                                    <Icon name="uim:linkedin-alt" class="w-4 h-4 lg:w-6 lg:h-6"/>
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
    </div>
</template>