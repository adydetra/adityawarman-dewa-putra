<template>
  <button
    aria-label="Color Mode"
    class="hidden xl:block w-full"
    @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
  >
    <Icon
      v-if="$colorMode.value == 'dark'"
      name="ph:moon-fill"
      class="dark:text-white w-4 h-4 lg:w-6 lg:h-6"
    />
    <Icon v-else name="entypo:light-up" class="text-black w-4 h-4 lg:w-6 lg:h-6" />
  </button>
</template>

<script setup lang="ts">
type Theme = "light" | "dark";

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme;
};
</script>
