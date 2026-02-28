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
  <button aria-label="Color Mode" class="flex items-center cursor-pointer" @click="toggleColorMode">
    <span class="hidden dark:flex items-center">
      <Icon name="line-md:moon-filled-alt-loop" class="text-black dark:text-white text-base md:text-2xl" />
    </span>
    <span class="flex dark:hidden items-center">
      <Icon name="line-md:sunny-outline-loop" class="dark:text-black text-base md:text-2xl" />
    </span>
  </button>
</template>
