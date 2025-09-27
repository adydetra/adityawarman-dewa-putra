<script lang="ts" setup>
const games = useGame();
</script>

<template>
  <section class="text-neutral-400 !leading-[2.5rem] text-center text-base xl:text-[0.95rem] 2xl:text-base">
    <h2 class="mb-2">
      Study at
      <AtomsLink to="www.ut.ac.id" title="Universitas Terbuka." />
    </h2>
    <h3 class="mb-2">
      Working at <AtomsLink to="www.aptronim.com" title="Aptronim" />, As a member of the <AtomsLink to="www.aptronim.com/aptrocode" title="Aptrocode" /> team.
    </h3>
    <p>
      Outside of programming, I listening music on
      <AtomsLink to="open.spotify.com/user/31ayzku5aj7g7grortm6lca74ufq?si=f308a6ee6a2f4710" title="Spotify" />
      & looking minimalist photos on
      <AtomsLink to="pinterest.com/adydetra" title="Pinterest" />
      . If you happen to be in<br>
      the same city as where I live (in Jakarta), maybe<br>
      we could hang out and talk about tech or <br>join
      <AtomsLink to="discord.gg/9z6APrYMAq" title="Discord" />
      to play games together.
    </p>
    <div class="my-12 flex flex-wrap justify-center gap-10">
      <div v-for="game in games" :key="game.title">
        <NuxtImg
          :src="`/images/${game.src}`"
          :title="game.title"
          loading="lazy"
          alt=""
          placeholder
          class="w-8 neutralscale hover:neutralscale-0 opacity-30 hover:opacity-100 transition ease-in-out"
        />
      </div>
    </div>
    <p>Find Me On</p>
    <AtomsSocialMedia class="justify-center gap-8 md:gap-7 mt-2" />
    <p class="mt-8">
      If you enjoy my works, consider sponsoring<br>me on
      <AtomsLink to="github.com/sponsors/adydetra" title="GitHub Sponsor 🖤" />
    </p>
    <AtomsFooter />
  </section>
</template>
