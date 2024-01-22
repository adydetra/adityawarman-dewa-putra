<script setup lang="ts">
type Theme = 'light' | 'dark';

function setColorTheme(newTheme: Theme) {
  useColorMode().preference = newTheme;
}
</script>

<template>
  <button aria-label="Color Mode" @click="setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')">
    <Icon v-if="$colorMode.value === 'dark'" name="line-md:moon-filled-alt-loop" class="text-black dark:text-white size-4 lg:size-6" />
    <Icon v-else name="line-md:sunny-outline-loop" class="dark:text-black size-4 lg:size-6" />
  </button>
</template>
