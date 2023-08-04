<template>
    <section class="bg-white dark:bg-gray-950 tracking-wide select-none relative">
        <div class="flex flex-wrap justify-center items-center xl:w-40 2xl:w-52 py-6 mx-auto h-screen bg-white dark:bg-gray-950 fixed top-0 left-0">
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-16 2xl:h-20 text-white"></div>
                <div class="text-md text-gray-400 text-center w-full"><span class="bg-gray-700 py-2 px-4 text-yellow-300 dark:text-yellow-300 rounded-sm">4</span></div>
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-36 2xl:h-52 text-white"></div>
                <NuxtLink to="/projects" title="Swap to Projects" class="w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200">
                    <Icon name="uim:angle-double-left" class="w-4 h-4 lg:w-6 lg:h-6"/>
                </NuxtLink>
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-36 2xl:h-52 text-white"></div>
                <p class="text-xs text-gray-400 text-center -rotate-45 w-full">© 2023</p>
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-16 2xl:h-20 text-white"></div>
        </div>
        <AchievementsContentComponent/>
        <div class="flex flex-wrap justify-center items-center xl:w-40 2xl:w-52 py-6 mx-auto h-screen bg-white dark:bg-gray-950 fixed top-0 right-0">
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-16 2xl:h-20 text-white"></div>
                <UISwitchColorMode />
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-36 2xl:h-52 text-white"></div>
                <div to="" class="w-full flex justify-center cursor-not-allowed py-8 ease-in-out duration-300 text-slate-400 hover:text-red-400">
                    <Icon name="uim:bars" class="w-4 h-4 lg:w-6 lg:h-6"/>
                </div>
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-36 2xl:h-52 text-white"></div>
                <p class="text-xs text-gray-400 text-center rotate-45 w-full">By Dewa</p>
            <div class="bg-black dark:bg-yellow-100 opacity-20 w-0.5 xl:h-16 2xl:h-20 text-white"></div>
        </div>
    </section>
</template>