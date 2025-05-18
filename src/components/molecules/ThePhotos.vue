<script setup lang="ts">
interface Photo {
  id: number;
  src: string;
  alt: string;
}

const totalPhotos = 125;
const photos = Array.from({ length: totalPhotos }, (_, i) => ({
  id: i + 1,
  src: `/images/capture/photo${i + 1}.jpg`,
  alt: `Photo ${i + 1}`,
})).reverse();

const selectedPhoto = ref<Photo | null>(null);

function openPopup(photo: Photo) {
  selectedPhoto.value = photo;
}

function closePopup() {
  selectedPhoto.value = null;
}
</script>

<template>
  <section>
    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mb-8 lg:px-20 xl:px-0">
      <div
        v-for="photo in photos"
        :key="photo.id"
        class="aspect-square overflow-hidden cursor-pointer"
        @click="openPopup(photo)"
      >
        <NuxtImg
          v-slot="{ imgAttrs, isLoaded }"
          custom
          :src="photo.src"
          :alt="photo.alt"
          loading="lazy"
        >
          <div class="relative w-full h-full">
            <img
              v-bind="imgAttrs"
              class="object-cover w-full h-full transition-opacity duration-300"
            >
            <div
              v-if="!isLoaded"
              class="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800"
            >
              <Icon
                name="line-md:loading-twotone-loop"
                class="size-4 lg:size-6 animate-spin dark:text-gray-300"
              />
            </div>
          </div>
        </NuxtImg>
      </div>
    </div>

    <div
      v-if="selectedPhoto"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-md"
      @click="closePopup"
    >
      <div class="max-w-[90%] max-h-[90%]" @click.stop>
        <NuxtImg
          v-slot="{ imgAttrs, isLoaded }"
          custom
          :src="selectedPhoto.src"
          :alt="selectedPhoto.alt"
        >
          <div class="relative w-full h-full">
            <img
              v-bind="imgAttrs"
              class="object-contain w-full h-full transition-opacity duration-300"
            >
            <div
              v-if="!isLoaded"
              class="absolute inset-0 flex items-center justify-center bg-black"
            >
              <Icon
                name="line-md:loading-twotone-loop"
                class="size-6 animate-spin dark:text-gray-300"
              />
            </div>
          </div>
        </NuxtImg>
      </div>
    </div>

    <AtomsFooter class="!text-center" />
  </section>
</template>
