<template>
  <div class="bg-[url('/images/pattern-hero-left.png')] dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center mx-auto relative pt-12">
    <AtomsButtonColor class="fixed z-10 flex items-center top-4 right-4 rounded-md bg-gray-200 ring-1 ring-gray-400 dark:ring-0 dark:bg-white/10 p-2 dark:lg:bg-transparent" />
    <section class="flex flex-wrap justify-center items-center w-full h-full pt-12">
      <div class="py-8 px-4 w-full">
        <AtomsLinkList />
        <p class="text-black dark:text-gray-300 text-2xl font-bold">A.<span class="text-4xl">Dewa</span> Putra</p>
        <div class="mt-6 text-gray-400 text-sm leading-loose">
          <div class="space-y-4">
            <p>~ Hello, I am Adityawarman Dewa Putra. Front End Developer focused on web or mobile.</p>
            <p>Study at <NuxtLink to="https://www.ut.ac.id/" title="Terbuka University" :class="link">Terbuka University.</NuxtLink></p>
            <p>
              Dreaming up ideas and making them come true is where my passion lies. You can find my
              <NuxtLink to="/projects" title="Project" :class="link">full project list here</NuxtLink>
            </p>
            <p>
              Outside of programming, I enjoy watching streamers and playing games. If you happen to be in the same city as where I live (currently in Jakarta), maybe we could
              hang out and talk about technology or code together.
            </p>
          </div>
          <div class="mt-12">
            <p>Find Me On</p>
            <ul class="mt-2 flex text-gray-500 dark:text-gray-400 gap-8 md:gap-7">
              <li v-for="data in social" :key="data.id">
                <NuxtLink :to="data.to" :title="data.title" target="_blank" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-200">
                  <Icon :name="data.name" class="w-5 h-5 md:w-6 md:h-6" />
                </NuxtLink>
              </li>
            </ul>
            <p class="mt-8">If you enjoy my works, consider sponsoring me on <NuxtLink to="https://github.com/sponsors/devdewa" title="Github Sponsor" :class="link">Github Sponsor.</NuxtLink></p>
          </div>
          <AtomsFooter v-if="$device.isMobileOrTablet" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import * as data from "~/types/index";

const social = data.social;
const link = "text-gray-600 dark:text-gray-300 border-b";
</script>
