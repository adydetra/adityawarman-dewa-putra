<script setup lang="ts">
interface Photo {
  id: number;
  src: string;
  alt: string;
}

const totalPhotos = 131;
const photos = Array.from({ length: totalPhotos }, (_, i) => ({
  id: i + 1,
  src: `/images/capture/photo${i + 1}.jpg`,
  alt: `Photo ${i + 1}`,
})).reverse();

const selectedPhoto = ref<Photo | null>(null);
const popupImageLoaded = ref(false);

function openPopup(photo: Photo) {
  selectedPhoto.value = photo;

  const img = new Image();
  img.onload = () => {
    popupImageLoaded.value = true;
  };
  img.onerror = () => {
    popupImageLoaded.value = false;
  };
  img.src = photo.src;

  if (img.complete) {
    popupImageLoaded.value = true;
  }
  else {
    popupImageLoaded.value = false;
  }
}

function closePopup() {
  selectedPhoto.value = null;
  popupImageLoaded.value = false;
}
</script>

<template>
  <section>
    <div class="grid grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-4 mb-8 lg:px-20 xl:px-60 3xl:px-8">
      <div v-for="photo in photos" :key="photo.id" class="aspect-square overflow-hidden cursor-pointer mx-auto" @click="openPopup(photo)">
        <NuxtImg v-slot="{ imgAttrs, isLoaded }" custom :src="photo.src" :alt="photo.alt" loading="lazy">
          <div class="relative size-full">
            <img v-bind="imgAttrs" class="object-cover size-full transition-opacity duration-300">
            <div v-if="!isLoaded" class="absolute inset-0 flex items-center justify-center bg-neutral-100 dark:bg-neutral-800">
              <Icon name="line-md:loading-twotone-loop" class="size-4 lg:size-6 animate-spin dark:text-neutral-300" />
            </div>
          </div>
        </NuxtImg>
      </div>
    </div>

    <div v-if="selectedPhoto" class="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-md" @click="closePopup">
      <div class="xl:h-[80vh]" @click.stop>
        <NuxtImg v-slot="{ imgAttrs }" custom :src="selectedPhoto.src" :alt="selectedPhoto.alt">
          <div class="relative size-full">
            <img v-bind="imgAttrs" class="object-contain size-full transition-opacity duration-300" @load="popupImageLoaded = true">
            <div v-if="!popupImageLoaded" class="absolute inset-0 flex items-center justify-center bg-black">
              <Icon name="line-md:loading-twotone-loop" class="size-6 animate-spin dark:text-neutral-300" />
            </div>
          </div>
        </NuxtImg>
      </div>
    </div>

    <AtomsFooter class="!text-center" />
  </section>
</template>
