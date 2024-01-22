<script setup lang="ts">
const link = 'text-gray-600 dark:text-gray-300 pb-0.5 border-b-2 border-gray-200/50 dark:border-gray-700/40 transition-colors ease-in-out duration-500';
</script>

<template>
  <p class="text-black dark:text-gray-300 text-2xl font-bold transition-colors ease-in-out duration-500">
    A.<span class="text-4xl">Dewa</span> Putra
  </p>
  <div class="mt-6 text-gray-400 text-sm lg:text-base !leading-loose">
    <div class="space-y-4">
      <p>
        ~ Hello, I am Adityawarman <span class="px-1 rounded-md bg-gray-200/50 dark:bg-gray-900 transition-colors ease-in-out duration-500">Dewa</span> Putra. Front End Developer, big fan open-source, enjoying life.
      </p>
      <p>
        Study at <NuxtLink to="https://www.ut.ac.id/" title="Terbuka University" :class="link">
          Terbuka University.
        </NuxtLink>
      </p>
      <p>
        Dreaming up ideas and making them come true is where my passion lies. You can find my
        <NuxtLink to="/work" title="Work" :class="link">
          full work list here
        </NuxtLink>
      </p>
    </div>
    <p class="mt-4">
      Outside of programming, I enjoy playing games & looking at minimalist photos on
      <NuxtLink to="https://pinterest.com/adydetra" title="Pinterest" aria-label="Pinterest" :class="link">
        Pinterest
      </NuxtLink>. If you happen to be in the same city as where
      I live (in Jakarta), maybe we could hang out and talk about tech or join
      <NuxtLink to="https://discord.gg/9z6APrYMAq" title="Discord" aria-label="Discord" :class="link">
        Discord
      </NuxtLink> to play games together.
    </p>
    <div class="mt-12">
      <p>Find Me On</p>
      <AtomsSocialMedia class="gap-8 md:gap-7 mt-2" />
      <p class="mt-8">
        If you enjoy my works, consider sponsoring me on
        <NuxtLink to="https://github.com/sponsors/adydetra" title="GitHub Sponsor" :class="link">
          GitHub Sponsor.
        </NuxtLink>
      </p>
    </div>
    <AtomsFooter />
  </div>
</template>
