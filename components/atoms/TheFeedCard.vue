<template>
  <div v-if="isLoading" class="space-y-5 w-72 md:w-96 lg:w-full">
    <div v-for="index in 4" :key="index" :class="cardStyle">
      <div>
        <div class="flex justify-center items-center w-8 md:w-12 h-8 md:h-12 bg-gray-400/40 rounded-full"></div>
      </div>
      <div class="w-full space-y-4">
        <div class="bg-gray-400/40 h-3 w-1/2"></div>
        <div class="bg-gray-400/40 h-3 w-3/4"></div>
        <div class="bg-gray-400/40 h-3 w-2/3"></div>
        <div class="bg-gray-400/40 h-3 w-4/5"></div>
      </div>
    </div>
  </div>

  <div v-else class="space-y-5">
    <div v-for="status in filteredStatuses" :key="status.id" :class="cardStyle">
      <div>
        <div class="flex justify-center items-center w-8 md:w-12 overflow-hidden">
          <NuxtImg :src="status.account.avatar" alt="Photo" placeholder loading="lazy" class="rounded-full" />
        </div>
      </div>
      <div class="w-full overflow-hidden space-y-4">
        <NuxtLink :to="status.uri" title="Mastodon">
          <div class="flex justify-between items tracking-wide">
            <h2 class="text-xs flex items-center gap-1"><Icon name="line-md:mastodon" class="mr-0.5" />Dewa <span class="text-[7px]">🇮🇩</span></h2>
            <p class="text-xs"><Icon name="line-md:calendar" class="mr-1" />{{ formatDate(status.created_at) }}</p>
          </div>
        </NuxtLink>
        <p class="text-xs mt-4 leading-loose" v-html="status.content"></p>
        <NuxtImg
          :src="status.media_attachments[0]?.url"
          v-if="status.media_attachments && status.media_attachments.length > 0"
          alt="Photo"
          placeholder
          loading="lazy"
          class="object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const statuses = ref<any[]>([]);
const filteredStatuses = ref<any[]>([]);
const isLoading = ref<boolean>(true);
const cardStyle = "flex space-x-4 bg-gray-300/30 first-letter:dark:bg-slate-800 p-4 text-gray-600 dark:text-gray-300";

const hasVideoAttachment = (status: any) => {
  return status.media_attachments && status.media_attachments.length > 0 && status.media_attachments[0].type === "video";
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${day}-${month}-${year}`;
};

onMounted(async () => {
  try {
    const response = await fetch("https://mastodon.social/api/v1/accounts/110889737873743694/statuses");
    if (response.ok) {
      const data = await response.json();
      statuses.value = data;
      filteredStatuses.value = data.filter((status: any) => !hasVideoAttachment(status));
      isLoading.value = false;
    } else {
      console.error("Failed to fetch data from Mastodon API");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
</script>
