<template>
    <section class="bg-gray-950 flex tracking-wide h-screen">
        <div class="flex flex-wrap justify-center items-center px-12 py-6 mx-auto w-60">
            <div class="bg-yellow-100 opacity-20 w-0.5 h-20 text-white"></div>
                <p class="text-xs text-gray-400 text-center -rotate-45 w-full">Projects</p>
            <div class="bg-yellow-100 opacity-20 w-0.5 h-52 text-white"></div>
                <NuxtLink to="/uses" class="w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-200">
                    <Icon name="uim:angle-double-left" class="w-4 h-4 lg:w-6 lg:h-6"/>
                </NuxtLink>
            <div class="bg-yellow-100 opacity-20 w-0.5 h-52 text-white"></div>
                <p class="text-xs text-gray-400 text-center -rotate-45 w-full">© 2023</p>
            <div class="bg-yellow-100 opacity-20 w-0.5 h-20 text-white"></div>
        </div>
        <div class="bg-gradient-to-r from-gray-900 to-gray-700 mx-auto h-screen relative w-screen px-24 py-16">
            <h1 class="text-gray-300 text-center text-4xl font-bold leading-snug mb-16">
                Things I’ve made trying to put my dent in the universe.
            </h1>
        </div>
        <div class="flex flex-wrap justify-center items-center px-12 py-6 mx-auto w-60">
            <div class="bg-yellow-100 opacity-20 w-0.5 h-20 text-white"></div>
                <div class="text-md text-gray-400 text-center w-full"><span class="bg-gray-700 py-2 px-4 text-yellow-300 rounded-sm">3</span></div>
            <div class="bg-yellow-100 opacity-20 w-0.5 h-52 text-white"></div>
                <NuxtLink to="/projects" class="w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-200">
                    <Icon name="uim:angle-double-right" class="w-4 h-4 lg:w-6 lg:h-6"/>
                </NuxtLink>
            <div class="bg-yellow-100 opacity-20 w-0.5 h-52 text-white"></div>
                <p class="text-xs text-gray-400 text-center rotate-45 w-full">By Dewa</p>
            <div class="bg-yellow-100 opacity-20 w-0.5 h-20 text-white"></div>
        </div>
    </section>
</template>