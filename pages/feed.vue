<script lang="ts" setup>
definePageMeta({ title: 'Feed', layout: 'feed' });
</script>

<template>
  <div>
    <NuxtLayout>
      <h1 class="text-4xl lg:text-5xl text-center font-bold py-10 lg:py-12">
        Feed
      </h1>
      <section class="flex lg:w-[55%] 2xl:w-[45%] flex-col mx-auto mt-4 lg:mt-8">
        <MoleculesTheFeedCard />
      </section>
    </NuxtLayout>
  </div>
</template>
