<template>
  <NuxtLayout>
    <h1 class="text-4xl lg:text-5xl text-center font-bold py-10 lg:py-12">Demo</h1>
    <section class="columns-1 md:columns-2 lg:columns-3 pb-12 space-y-4 gap-4 mt-4 lg:mt-8">
      <AtomsTheDemoCard />
    </section>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({ title: "Demo", layout: "demo" });
</script>
