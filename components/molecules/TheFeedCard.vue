<script lang="ts" setup>
const formatDate = useDateFeed();
const statuses = ref<any[]>([]);
const filteredStatuses = ref<any[]>([]);
const isLoading = ref<boolean>(true);
const widths = ['1/2', '3/4', '2/3', '4/5'];
const cardStyle = 'flex space-x-4 bg-gray-300/30 first-letter:dark:bg-slate-800 p-4 text-gray-600 dark:text-gray-300';

function hasVideoAttachment(status: any) {
  return status.media_attachments && status.media_attachments.length > 0 && status.media_attachments[0].type === 'video';
}

onMounted(async () => {
  try {
    const response = await fetch(useRuntimeConfig().public.MASTODON_URL);
    if (response.ok) {
      const data = await response.json();
      statuses.value = data;
      filteredStatuses.value = data.filter((status: any) => !hasVideoAttachment(status));
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
  <div v-if="isLoading" class="space-y-5 w-72 md:w-96 lg:w-full">
    <div v-for="index in 4" :key="index" :class="cardStyle">
      <div>
        <div class="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 bg-gray-400/40 rounded-full" />
      </div>
      <div class="w-full space-y-4">
        <div v-for="width in widths" :key="width" :class="`bg-gray-400/40 h-3 w-${width}`" />
      </div>
    </div>
  </div>

  <div v-else class="space-y-5">
    <div v-for="status in filteredStatuses" :key="status.id" :class="cardStyle">
      <div>
        <div class="flex justify-center items-center w-8 md:w-12 overflow-hidden">
          <NuxtImg placeholder :src="status.account.avatar" alt="Photo" loading="lazy" class="rounded-full" />
        </div>
      </div>
      <div class="w-full overflow-hidden space-y-4">
        <NuxtLink :to="status.uri" target="_blank" title="Mastodon">
          <div class="flex justify-between items tracking-wide">
            <h2 class="text-xs flex items-center gap-1">
              <Icon name="line-md:mastodon" class="mr-0.5" />{{ status.account.display_name }} <span class="text-[7px]">🇮🇩</span>
            </h2>
            <p class="text-xs">
              <Icon name="line-md:calendar" class="mr-1" />{{ formatDate(status.created_at) }}
            </p>
          </div>
        </NuxtLink>
        <p class="text-xs mt-4 space-y-3 leading-loose" v-html="status.content" />
        <NuxtImg
          v-if="status.media_attachments && status.media_attachments.length > 0"
          :src="status.media_attachments[0]?.url"
          alt="Photo"
          placeholder
          loading="lazy"
          class="object-contain"
        />
      </div>
    </div>
  </div>
</template>
