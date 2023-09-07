<template>
  <section class="flex justify-center gap-6 overflow-hidden pt-16 pb-12">
    <div class="relative aspect-[10/10] w-44 md:w-80 flex-none overflow-hidden rounded-xl shadow-2xl shadow-yellow-200/5 -rotate-3">
      <NuxtImg src="/images/mobile-1.png" alt="" placeholder loading="lazy" class="absolute h-full w-full object-cover" />
    </div>
    <div class="relative aspect-[10/10] w-32 md:w-60 flex-none overflow-hidden rounded-xl">
      <NuxtImg src="/images/mobile-2.png" alt="" placeholder loading="lazy" class="absolute h-full w-full object-scale-down" />
    </div>
    <div class="relative aspect-[10/10] w-44 md:w-80 flex-none overflow-hidden rounded-xl shadow-2xl shadow-yellow-200/5 rotate-3">
      <NuxtImg src="/images/mobile-3.png" alt="" placeholder loading="lazy" class="absolute h-full w-full object-cover" />
    </div>
  </section>

  <!-- Uses -->
  <div :class="container">
    <h1 :class="h1Style">Software I use, gadgets I love, and the tech stack that I use.</h1>

    <div class="grid grid-cols-10 md:grid-cols-12 gap-8">
      <!-- Workstation -->
      <div class="col-span-10 md:col-span-4" :class="card">
        <div>
          <h2 :class="h2Style">Workstation</h2>
          <ul :class="useslist">
            <li v-for="workstation in workstations" :key="workstation.id">
              <NuxtLink :to="workstation.to" target="_blank" :title="workstation.title" :class="useslink">
                <Icon :name="workstation.name" :class="usesicon" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- Database -->
      <div class="col-span-5 md:col-span-4" :class="card">
        <div>
          <h2 :class="h2Style">Database</h2>
          <ul :class="useslist">
            <li v-for="database in databases" :key="database.id">
              <NuxtLink :to="database.to" target="_blank" :title="database.title" :class="useslink">
                <Icon :name="database.name" :class="usesicon" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- Operating System -->
      <div class="col-span-5 md:col-span-4" :class="card">
        <div>
          <h2 :class="h2Style">OS</h2>
          <ul :class="useslist">
            <li v-for="operating in operatings" :key="operating.id">
              <NuxtLink :to="operating.to" target="_blank" :title="operating.title" :class="useslink">
                <Icon :name="operating.name" :class="usesicon" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- Package Manager -->
      <div class="backdrop-saturate-200 col-span-10 md:col-span-6" :class="card">
        <div>
          <h2 :class="h2Style">Package Manager</h2>
          <ul :class="useslist">
            <li v-for="pack in packages" :key="pack.id">
              <NuxtLink :to="pack.to" target="_blank" :title="pack.title" :class="useslink">
                <Icon :name="pack.name" :class="usesicon" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- Tech Stack Development -->
      <div class="backdrop-saturate-200 col-span-10 md:col-span-6" :class="card">
        <div>
          <h2 :class="h2Style">Tech Stack</h2>
          <ul :class="useslist">
            <li v-for="techstack in techstacks" :key="techstack.id">
              <NuxtLink :to="techstack.to" target="_blank" :title="techstack.title" :class="useslink">
                <Icon :name="techstack.name" :class="usesicon" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <!-- Development tools -->
      <div class="col-span-10 md:col-span-12" :class="card">
        <div>
          <h2 :class="h2Style">Development tools</h2>
          <ul :class="useslist">
            <li v-for="development in developments" :key="development.id">
              <NuxtLink :to="development.to" target="_blank" :title="development.title" :class="useslink">
                <Icon :name="development.name" :class="usesicon" />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Project -->
  <div :class="container">
    <h1 :class="h1Style">Things I’ve made trying to put my dent in the universe.</h1>

    <div class="grid grid-cols-10 md:grid-cols-9 gap-8">
      <!-- Project -->
      <NuxtLink
        :to="project.to"
        target="_blank"
        :title="project.title"
        class="relative flex justify-center col-span-10 md:col-span-3 py-4 text-gray-500 dark:text-gray-400 cursor-pointer hover:backdrop-saturate-200 border-2 border-dashed border-gray-400 dark:border-gray-800 hover:border-yellow-500 dark:hover:border-gray-100"
        v-for="project in projects"
        :key="project.id"
      >
        <div class="flex flex-col gap-4 2xl:gap-6 w-full px-3">
          <div class="flex items-center">
            <span class="text-xs 2xl:text-base font-light tracking-wider">{{ project.title }}</span>
          </div>
          <div class="flex justify-between items-center w-full">
            <span class="text-[11px] 2xl:text-xs font-extralight tracking-widest"
              >TECH STACK<span class="ml-2.5 bg-gray-100 dark:bg-slate-900 rounded py-0.5 px-1.5">{{ project.tech }}</span></span
            >
            <Icon
              :name="project.src"
              class="absolute right-3 w-6 h-6 rounded-full p-1.5 shadow-sm bg-gray-100 dark:bg-zinc-800 border border-gray-400/50 dark:border-zinc-700/50 ring-0"
            />
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>

  <!-- Achievement -->
  <div :class="container">
    <h1 :class="h1Style">Achievements that I have achieved both as a team or individually.</h1>

    <div class="grid grid-cols-5 md:grid-cols-6 gap-16 px-4 realtive">
      <NuxtLink
        :to="achievement.to"
        target="_blank"
        :title="achievement.title"
        class="bg-gray-100/40 dark:bg-slate-900/40 shadow-xl shadow-blue-500/5 dark:shadow-blue-800/5 hover:bg-yellow-200/20 col-span-5 md:col-span-3 cursor-pointer ease-in-out duration-300 hover:scale-105 rounded-2xl backdrop-saturate-200 flex justify-center pt-4 pb-6"
        v-for="achievement in achievements"
        :key="achievement.id"
      >
        <div class="w-full flex flex-col justify-between gap-6 px-6 pt-6 pb-4">
          <div class="h-40">
            <NuxtImg :src="achievement.thumbnail" alt="" placeholder loading="lazy" class="w-full h-full bg-gray-800/50 py-8 px-12 rounded-2xl" />
          </div>
          <p class="text-justify text-xs indent-3 text-gray-400 leading-loose"><span class="text-sky-400">#</span> {{ achievement.deskripsi }}</p>
          <p class="flex text-xs items-center font-semibold text-gray-500 dark:text-gray-200">
            Result:
            <span class="ml-2 text-gray-400 leading-relaxed">{{ achievement.result }}</span>
          </p>
          <div class="flex items-center text-gray-500 dark:text-white mt-4">
            <NuxtImg :src="achievement.src" alt="" placeholder loading="lazy" class="w-8 h-8 rounded-full bg-zinc-800 p-1.5 shadow-md border border-zinc-700/50 ring-0" />
            <Icon name="line-md:text-box" class="w-3 h-3 ml-3" />
            <span class="ml-2 text-[10px] font-semibold leading-relaxed">{{ achievement.title }}</span>
          </div>
        </div>

        <!-- Icon Team / Individual -->
        <div class="flex justify-center items-center absolute bg-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full">
          <Icon :name="achievement.icon" class="w-3 h-3" />
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as use from "~/types/uses";
import * as pro from "~/types/projects";
import * as ach from "~/types/achievements";

const workstations = use.workstations;
const operatings = use.operatings;
const databases = use.databases;
const developments = use.developments;
const packages = use.packages;
const techstacks = use.techstacks;
const projects = pro.projects;
const achievements = ach.achievements;

const container = "mx-auto px-6 py-8 md:py-20 lg:py-8 bg-[url('/images/pattern-hero-left.png')] dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center";
const h1Style = "text-gray-500 dark:text-gray-300 md:max-w-[70%] mx-auto text-center text-2xl font-bold leading-snug 2xl:leading-snug mb-10";
const h2Style = "text-gray-500 dark:text-gray-400 text-sm font-semibold mb-4 flex justify-center";
const card = "flex justify-center border-dashed border-2 border-gray-400 dark:border-gray-800 pt-4 pb-6 hover:border-gray-100 ease-in-out duration-300";
const useslink = "cursor-pointer ease-in-out duration-300 hover:text-yellow-200";
const useslist = "flex flex-wrap justify-center text-gray-400 gap-6 px-6";
const usesicon = "w-4 h-4";
</script>
