<script setup lang="ts">
type Theme = 'light' | 'dark';

async function toggleColorMode(event: MouseEvent) {
  const colorMode = useColorMode();
  const newTheme: Theme = colorMode.preference === 'dark' ? 'light' : 'dark';

  if (!document.startViewTransition) {
    colorMode.preference = newTheme;
    return;
  }

  const x = event.clientX;
  const y = event.clientY;

  const maxRadius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

  document.documentElement.style.setProperty('--reveal-x', `${x}px`);
  document.documentElement.style.setProperty('--reveal-y', `${y}px`);
  document.documentElement.style.setProperty('--reveal-radius', `${maxRadius}px`);

  const transition = document.startViewTransition(() => {
    colorMode.preference = newTheme;
  });

  await transition.ready;
}
</script>

<template>
  <button aria-label="Color Mode" class="flex items-center" @click="toggleColorMode">
    <Icon v-if="$colorMode.value === 'dark'" name="line-md:moon-filled-alt-loop" class="text-black dark:text-white size-4 md:size-6" />
    <Icon v-else name="line-md:sunny-outline-loop" class="dark:text-black size-4 md:size-6" />
  </button>
</template>
