<template>
  <section class="text-gray-400 !leading-[2.5rem] text-center">
    <h2 class="mb-4">Study at <NuxtLink to="https://www.ut.ac.id/" title="Terbuka University" :class="link">Terbuka University.</NuxtLink></h2>
    <p>
      Outside of programming, I enjoy playing games & looking at minimalist photos on
      <NuxtLink to="https://pinterest.com/adydetra" title="Pinterest" aria-label="Pinterest" :class="link">Pinterest</NuxtLink>. If you happen to be in<br />
      the same city as where I live (in Jakarta), maybe<br />
      we could hang out and talk about tech or <br />join <NuxtLink to="https://discord.gg/9z6APrYMAq" title="Discord" aria-label="Discord" :class="link">Discord</NuxtLink> to
      play games together.
    </p>
    <div class="my-12 flex flex-wrap justify-center gap-10">
      <div v-for="game in games" :key="game.title">
        <NuxtImg
          :src="'/images/' + game.src"
          :title="game.title"
          loading="lazy"
          alt=""
          placeholder
          class="w-8 grayscale hover:grayscale-0 opacity-30 hover:opacity-100 transition ease-in-out"
        />
      </div>
    </div>
    <p>Find Me On</p>
    <ul class="mt-2 flex justify-center text-gray-500 dark:text-gray-400 gap-8 md:gap-7">
      <li v-for="data in social" :key="data.id">
        <NuxtLink :to="data.to" :title="data.title" target="_blank" class="cursor-pointer ease-in-out duration-300 hover:text-yellow-400">
          <Icon :name="data.name" class="w-5 h-5 md:w-6 md:h-6" />
        </NuxtLink>
      </li>
    </ul>
    <p class="mt-8">
      If you enjoy my works, consider sponsoring<br />me on
      <NuxtLink to="https://github.com/sponsors/adydetra" title="GitHub Sponsor" :class="link">GitHub Sponsor 🖤</NuxtLink>
    </p>
    <AtomsFooter />
  </section>
</template>

<script setup lang="ts">
import * as data from "~/types/index";

const social = data.social;
const link = "text-gray-600 dark:text-gray-300 pb-0.5 border-b-2 border-gray-200/50 dark:border-gray-700/40 dark:hover:!border-yellow-200/50 hover:!border-yellow-200";
const games = [
  { src: "wc3.svg", title: "Warcraft III" },
  { src: "minecraft.svg", title: "Minecraft" },
  { src: "dw6.svg", title: "Dynasty Warriors 6" },
  { src: "cs.svg", title: "Counter Strike" },
  { src: "stronghold.svg", title: "Stronghold Crusader" },
  { src: "lfd.svg", title: "Left 4 Dead" },
];
</script>
