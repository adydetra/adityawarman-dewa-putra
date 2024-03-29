<script setup lang="ts">
const formatDate = useDateDemo();
const statuses = ref<any[]>([]);
const filteredStatuses = ref<any[]>([]);
const isLoading = ref<boolean>(true);

function hasVideoAttachment(status: any) {
  return status.media_attachments?.length > 0 && status.media_attachments[0].type === 'video';
}

onMounted(async () => {
  try {
    const response = await fetch(useRuntimeConfig().public.MASTODON_URL);
    if (response.ok) {
      const data = await response.json();
      statuses.value = data;
      filteredStatuses.value = data.filter((status: any) => hasVideoAttachment(status));
      isLoading.value = false;
    }
    else {
      console.error('Failed to fetch data from Mastodon API');
    }
  }
  catch (error) {
    console.error('An error occurred:', error);
  }
});
</script>

<template>
  <!-- Skeleton -->
  <div v-if="isLoading" class="space-y-4">
    <div v-for="index in 9" :key="index" class="flex space-x-4 bg-gray-300/30 p-4 rounded-xl">
      <div class="w-full overflow-hidden space-y-4 border border-gray-200 dark:border-gray-800">
        <div class="bg-white dark:bg-black/10">
          <div class="w-full h-64 bg-gray-400/40 animate-pulse" />
          <div class="p-5 !pt-3 border-t border-gray-200 dark:border-gray-800">
            <div class="bg-gray-400/40 h-4 w-3/4 animate-pulse" />
            <div class="bg-gray-400/40 h-4 w-1/2 mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Post -->
  <div v-else class="space-y-4">
    <div v-for="status in filteredStatuses" :key="status.id" class="flex space-x-4">
      <div class="w-full overflow-hidden space-y-4 border border-gray-200 dark:border-gray-800 rounded-xl transition-colors ease-in-out duration-500">
        <div class="bg-white dark:bg-black/10 transition-colors ease-in-out duration-500">
          <a :href="status.uri" target="_blank" rel="noopener noreferrer">
            <video class="w-full" :src="status.media_attachments[0]?.url" autoplay muted loop />
          </a>
          <div class="p-5 !pt-3 border-t border-gray-200 dark:border-gray-800 transition-colors ease-in-out duration-500">
            <p class="text-xs md:text-[16px] text-gray-500 leading-loose md:leading-[2.7rem]" v-html="status.content" />
            <p class="text-xs md:text-sm text-gray-400 mt-2 flex items-center">
              <Icon name="line-md:calendar" class="mr-1" />
              {{ formatDate(status.created_at) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
