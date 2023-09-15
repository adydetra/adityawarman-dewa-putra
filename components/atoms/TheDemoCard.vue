<template>
  <div v-for="status in filteredStatuses" :key="status.id" class="flex space-x-4">
    <div class="w-full overflow-hidden space-y-4 border border-gray-200 dark:border-gray-800 rounded-xl">
      <div class="bg-white dark:bg-black/10">
        <a :href="status.uri" target="_blank" rel="noopener noreferrer">
          <video class="w-full" :src="status.media_attachments[0]?.url" autoplay muted loop></video>
        </a>
        <div class="p-5 !pt-3 border-t border-gray-200 dark:border-gray-800">
          <p class="text-xs md:text-[16px] text-gray-500 leading-loose md:leading-[2.7rem]" v-html="status.content"></p>
          <p class="text-xs md:text-sm text-gray-400 mt-2 flex items-center">
            <Icon name="line-md:calendar" class="mr-1" />
            {{ formatDate(status.created_at) }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const statuses = ref<any[]>([]);
const filteredStatuses = ref<any[]>([]);

const hasVideoAttachment = (status: any) => {
  return status.media_attachments?.length > 0 && status.media_attachments[0].type === "video";
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

onMounted(async () => {
  try {
    const response = await fetch("https://mastodon.social/api/v1/accounts/110889737873743694/statuses");
    if (response.ok) {
      const data = await response.json();
      statuses.value = data;
      filteredStatuses.value = data.filter((status: any) => hasVideoAttachment(status));
    } else {
      console.error("Failed to fetch data from Mastodon API");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
});
</script>
