<script setup lang="ts">
const totalPhotos = 44;

const photos = Array.from({ length: totalPhotos }, (_, i) => {
  const photoNum = i + 1;
  return {
    id: photoNum,
    src: `/images/capture/photo${photoNum}.jpg`,
    alt: `Photo ${photoNum}`,
  };
});

const selectedPhoto = ref<null | { id: number; src: string; alt: string }>(null);

function openPopup(photo: { id: number; src: string; alt: string }) {
  selectedPhoto.value = photo;
}

function closePopup() {
  selectedPhoto.value = null;
}
</script>

<template>
  <section>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      <div v-for="photo in photos" :key="photo.id" class="aspect-square overflow-hidden cursor-pointer" @click="openPopup(photo)">
        <NuxtImg :src="photo.src" :alt="photo.alt" loading="lazy" class="object-cover size-full hover:scale-105 transition-transform duration-300" />
      </div>
    </div>

    <div v-if="selectedPhoto" class="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-md" @click="closePopup">
      <div class="max-w-[90%] max-h-[90%]" @click.stop>
        <NuxtImg :src="selectedPhoto.src" :alt="selectedPhoto.alt" class="object-contain size-full" />
      </div>
    </div>

    <AtomsFooter class="!text-center" />
  </section>
</template>
