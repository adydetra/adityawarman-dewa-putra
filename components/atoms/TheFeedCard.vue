<template>
  <div v-for="status in filteredStatuses" :key="status.id" class="flex space-x-4 bg-gray-300/30 first-letter:dark:bg-slate-800 p-4 text-gray-600 dark:text-gray-300">
    <div>
      <div class="flex justify-center items-center w-8 md:w-12 overflow-hidden">
        <NuxtImg :src="status.account.avatar" alt="Photo" placeholder loading="lazy" class="rounded-full shadow-md shadow-gray-500/40" />
      </div>
    </div>
    <div class="w-full overflow-hidden space-y-4">
      <NuxtLink :to="status.uri" title="Mastodon">
        <div class="flex justify-between items tracking-wide">
          <h2 class="text-xs flex items-center gap-1"><Icon name="line-md:mastodon" class="mr-0.5" />Dewa <span class="text-[7px]">🇮🇩</span></h2>
          <p class="text-xs"><Icon name="line-md:calendar" class="mr-1" />{{ formatDate(status.created_at) }}</p>
        </div>
      </NuxtLink>
      <p class="text-xs mt-4 leading-loose" v-html="(status.content)"></p>
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
</template>

<script setup lang="ts">
const statuses = ref<any[]>([]);
const filteredStatuses = ref<any[]>([]);

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
    } else {
      console.error("Failed to fetch data from Mastodon API");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
</script>
