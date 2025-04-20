<script setup lang="ts">
interface Photo {
  id: number;
  src: string;
  alt: string;
}

const totalPhotos = 113;

const photos = Array.from({ length: totalPhotos }, (_, i) => {
  const photoNum = i + 1;
  return {
    id: photoNum,
    src: `/images/capture/photo${photoNum}.jpg`,
    alt: `Photo ${photoNum}`,
  };
}).reverse();

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
    <!-- Gallery Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
      <div
        v-for="photo in photos"
        :key="photo.id"
        class="aspect-square overflow-hidden cursor-pointer relative"
        @click="openPopup(photo)"
      >
        <NuxtImg
          :src="photo.src"
          :alt="photo.alt"
          loading="lazy"
          class="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
        >
          <!-- Placeholder slot: tampilkan spinner saat loading -->
          <template #placeholder>
            <div class="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
              <Icon
                name="line-md:loading-twotone-loop"
                class="dark:text-black size-4 lg:size-6 animate-spin"
              />
            </div>
          </template>
        </NuxtImg>
      </div>
    </div>

    <!-- Lightbox Popup -->
    <div
      v-if="selectedPhoto"
      class="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-md"
      @click="closePopup"
    >
      <div class="max-w-[90%] max-h-[90%] relative" @click.stop>
        <NuxtImg
          :src="selectedPhoto.src"
          :alt="selectedPhoto.alt"
          class="object-contain w-full h-full"
        >
          <!-- Placeholder untuk popup -->
          <template #placeholder>
            <div class="absolute inset-0 flex items-center justify-center bg-black">
              <Icon
                name="line-md:loading-twotone-loop"
                class="dark:text-black size-6 animate-spin"
              />
            </div>
          </template>
        </NuxtImg>
      </div>
    </div>

    <AtomsFooter class="!text-center" />
  </section>
</template>
