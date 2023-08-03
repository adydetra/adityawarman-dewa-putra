<template>
    <!-- Desktop -->
    <section class="hidden lg:flex bg-white dark:bg-gray-950 tracking-wide h-screen select-none" v-if="$device.isDesktop">
        <div class="flex flex-wrap justify-center items-center px-12 py-6 mx-auto xl:w-44 2xl:w-60">
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-16 2xl:h-20 text-white"></div>
                <div class="text-md text-gray-400 text-center w-full"><span class="bg-gray-700 py-2 px-4 text-yellow-300 dark:text-yellow-300 rounded-sm">1</span></div>
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-36 2xl:h-52 text-white"></div>
                <div class="w-full flex justify-center cursor-not-allowed py-8 ease-in-out duration-300 text-slate-400 hover:text-red-400 cursor-not-allowed">
                    <Icon name="uim:bars" class="w-4 h-4 lg:w-6 lg:h-6"/>
                </div>
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-36 2xl:h-52 text-white"></div>
                <p class="text-xs text-gray-400 text-center -rotate-45 w-full">© 2023</p>
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-16 2xl:h-20 text-white"></div>
        </div>
        <HomeHeroComponent/>
        <div class="flex flex-wrap justify-center items-center px-12 py-6 mx-auto xl:w-44 2xl:w-60">
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-16 2xl:h-20 text-white"></div>
                <button aria-label="Color Mode" class="hidden xl:block w-full" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
                    <Icon v-if="$colorMode.value == 'dark'" name="ph:moon-fill" class="dark:text-white w-4 h-4 lg:w-6 lg:h-6"/>
                    <Icon v-else name="entypo:light-up" class="text-black w-4 h-4 lg:w-6 lg:h-6"/>
                </button>
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-36 2xl:h-52 text-white"></div>
                <NuxtLink to="/uses" title="Swap to Uses" class="w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200">
                    <Icon name="uim:angle-double-right" class="animate-pulse w-4 h-4 lg:w-6 lg:h-6"/>
                </NuxtLink>
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-36 2xl:h-52 text-white"></div>
                <p class="text-xs text-gray-400 text-center rotate-45 w-full">By Dewa</p>
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-16 2xl:h-20 text-white"></div>
        </div>
    </section>

    <!-- Mobile -->
    <section class="lg:hidden bg-gray-950 tracking-wide h-screen relative overflow-x-hidden" v-else>
        <MobileViewComponent/>
    </section>
</template>

<script setup lang="ts">
    type Theme = 'light' | 'dark';

    const setColorTheme = (newTheme: Theme) => {
        useColorMode().preference = newTheme
    }
</script>