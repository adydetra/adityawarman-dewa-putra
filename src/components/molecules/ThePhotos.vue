<script setup lang="ts">
const photos = ref<Array<{ id: number; src: string; alt: string }>>([]);

async function imageExists(url: string): Promise<boolean> {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    return response.ok;
  }
  catch {
    return false;
  }
}

async function loadPhotos() {
  const foundPhotos = [];
  let photoNum = 1;
  let consecutiveFailures = 0;

  while (consecutiveFailures < 3) {
    const photoPath = `/images/capture/photo${photoNum}.jpg`;

    if (await imageExists(photoPath)) {
      foundPhotos.push({
        id: photoNum,
        src: photoPath,
        alt: `Photo ${photoNum}`,
      });
      consecutiveFailures = 0;
    }
    else {
      consecutiveFailures++;
    }
    photoNum++;
  }
  photos.value = foundPhotos;
}

onMounted(() => {
  loadPhotos();
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
