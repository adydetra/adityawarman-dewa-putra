<script setup lang="ts">
const totalPhotos = 16;

const photos = Array.from({ length: totalPhotos }, (_, i) => {
  const photoNum = i + 1;
  return {
    id: photoNum,
    src: `/images/capture/photo${photoNum}.jpg`,
    alt: `Photo ${photoNum}`,
  };
});
</script>

<template>
  <section>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      <div v-for="photo in photos" :key="photo.id" class="aspect-square overflow-hidden">
        <NuxtImg
          :src="photo.src"
          :alt="photo.alt"
          loading="lazy"
          class="object-cover size-full hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </section>
</template>
