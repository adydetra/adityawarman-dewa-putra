<script lang="ts" setup>
type Theme = 'light' | 'dark';

function setColorTheme(newTheme: Theme) {
  useColorMode().preference = newTheme;
}
</script>

<template>
  <button aria-label="Color Mode" @click="setColorTheme($colorMode.preference === 'dark' ? 'light' : 'dark')">
    <Icon v-if="$colorMode.value === 'dark'" name="line-md:moon-filled-alt-loop" class="dark:text-white w-4 h-4 lg:w-6 lg:h-6" />
    <Icon v-else name="line-md:sunny-outline-loop" class="text-black w-4 h-4 lg:w-6 lg:h-6" />
  </button>
</template>
