<script setup lang="ts">
const formatDate = useDateFeed();
const statuses = ref<any[]>([]);
const widths = ['1/2', '3/4', '2/3', '4/5'];
const cardStyle = 'flex space-x-4 bg-neutral-300/30 first-letter:dark:bg-neutral-800 p-4 text-neutral-600 dark:text-neutral-300 transition-colors ease-in-out duration-500';

function hasVideoAttachment(statusItem: any) {
  return statusItem.media_attachments && statusItem.media_attachments.length > 0 && statusItem.media_attachments[0].type === 'video';
}

const { public: { MASTODON_URL } } = useRuntimeConfig();

const { data, error, status: fetchStatus } = useAsyncData('statuses', () => $fetch(MASTODON_URL), {
  server: false,
});

const isLoading = computed(() => fetchStatus.value && !statuses.value.length);
const filteredStatuses = computed(() => statuses.value.filter((statusItem: any) => !hasVideoAttachment(statusItem)));

watchEffect(() => {
  if (data.value && Array.isArray(data.value))
    statuses.value = data.value;
  if (error.value)
    console.error('An error occurred:', error.value);
});
</script>

<template>
  <!-- Skeleton -->
  <div v-if="isLoading" class="space-y-5 w-72 md:w-96 lg:w-full">
    <div v-for="index in 4" :key="index" :class="cardStyle">
      <div>
        <div class="flex justify-center items-center size-8 md:size-12 bg-neutral-400/40 rounded-full" />
      </div>
      <div class="w-full space-y-4">
        <div v-for="width in widths" :key="width" :class="`bg-neutral-400/40 h-3 w-${width}`" />
      </div>
    </div>
  </div>

  <!-- Post -->
  <div v-else class="space-y-5">
    <div v-for="statusItem in filteredStatuses" :key="statusItem.id" :class="cardStyle">
      <div>
        <div class="flex justify-center items-center w-8 md:w-12 overflow-hidden">
          <NuxtImg placeholder :src="statusItem.account.avatar" alt="Photo" loading="lazy" class="rounded-full" />
        </div>
      </div>
      <div class="w-full overflow-hidden space-y-4">
        <NuxtLink :to="statusItem.uri" target="_blank" title="Mastodon">
          <div class="flex justify-between items-center tracking-wide">
            <h2 class="text-xs flex items-center gap-1">
              <Icon name="line-md:mastodon" class="mr-0.5" />{{ statusItem.account.display_name }} <span class="text-[7px]">🇮🇩</span>
            </h2>
            <p class="text-xs">
              <Icon name="line-md:calendar" class="mr-1" />{{ formatDate(statusItem.created_at) }}
            </p>
          </div>
        </NuxtLink>
        <p class="text-xs mt-4 space-y-3 leading-loose" v-html="statusItem.content" />
        <NuxtImg
          v-if="statusItem.media_attachments && statusItem.media_attachments.length > 0"
          :src="statusItem.media_attachments[0]?.url"
          alt="Photo"
          placeholder
          loading="lazy"
          class="w-full"
        />
      </div>
    </div>
  </div>
</template>
