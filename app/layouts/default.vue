<script setup lang="ts">
const layout = 'hidden lg:flex flex-wrap justify-center items-center xl:w-36 2xl:w-52 py-6 mx-auto h-screen bg-white dark:bg-neutral-950 fixed top-0 transition-colors ease-in-out duration-500';
const link = 'text-xs text-neutral-400 hover:text-yellow-400 dark:hover:text-yellow-200 text-center w-full transition-colors ease-in-out duration-500';
const icon = 'size-4 lg:size-6';
const box = 'w-full flex justify-center my-8';

const route = useRoute();
const router = useRouter();
const routeMap: Record<string, number> = {
  '/': 1,
  '/uses': 2,
  '/work': 3,
  '/photos': 4,
  '/secreto': 5,
  '/closing': 6,
};
const currentNumber = routeMap[route.path] || 0;

const showLeftContent = currentNumber !== 1;
const leftLink = showLeftContent
  ? (currentNumber === 2
      ? '/'
      : currentNumber === 3
        ? '/uses'
        : currentNumber === 4
          ? '/work'
          : currentNumber === 5
            ? '/photos'
            : currentNumber === 6
              ? '/secreto'
              : '#')
  : '#';
const leftIconName = showLeftContent ? 'ci:chevron-left-duo' : '#';

const showRightContent = currentNumber !== 6;
const rightLink = showRightContent
  ? (currentNumber === 1
      ? '/uses'
      : currentNumber === 2
        ? '/work'
        : currentNumber === 3
          ? '/photos'
          : currentNumber === 4
            ? '/secreto'
            : currentNumber === 5
              ? '/closing'
              : '#')
  : '#';
const rightIconName = showRightContent ? 'ci:chevron-right-duo' : '#';

const activeLeft = showLeftContent
  ? 'cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-200'
  : 'cursor-not-allowed hover:text-red-400';
const activeRight = showRightContent
  ? 'cursor-pointer hover:text-yellow-400 dark:hover:text-yellow-200'
  : 'cursor-not-allowed hover:text-red-400';

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'ArrowLeft' && showLeftContent && leftLink !== '#') {
    router.push(leftLink);
  }
  else if (event.key === 'ArrowRight' && showRightContent && rightLink !== '#') {
    router.push(rightLink);
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <section class="dark:bg-neutral-950 transition-colors ease-in-out duration-500 tracking-wide min-h-screen w-screen flex flex-col justify-center select-none">
    <div class="fixed top-0 left-0" :class="layout">
      <AtomsLine>
        <AtomsNumber :number="currentNumber" />
      </AtomsLine>
      <div :class="box">
        <NuxtLink
          :to="leftLink"
          :title="currentNumber === 1 ? '' : currentNumber === 2 ? 'Home' : currentNumber === 3 ? 'Uses' : 'Work'"
          :class="`transition-colors ease-in-out duration-300 text-neutral-400 ${activeLeft}`"
          aria-label="slide"
        >
          <Icon v-if="showLeftContent" :name="leftIconName" :class="`${icon} animate-pulse animate-slide-left`" />
          <Icon v-else name="mingcute:dot-grid-line" :class="icon" />
        </NuxtLink>
      </div>
      <AtomsLine>
        <NuxtLink to="/demo" title="Redirect to Demo" class="-rotate-45" :class="link">
          Demo
        </NuxtLink>
      </AtomsLine>
    </div>
    <slot />
    <div class="fixed top-0 right-0" :class="layout">
      <AtomsLine>
        <div class="w-full flex justify-center">
          <AtomsColorMode />
        </div>
      </AtomsLine>
      <div :class="box">
        <NuxtLink
          :to="rightLink"
          :title="currentNumber === 1 ? 'Uses' : currentNumber === 2 ? 'Work' : currentNumber === 3 ? 'Closing' : ''"
          :class="`transition-colors ease-in-out duration-300 text-neutral-400 ${activeRight}`"
          aria-label="slide"
        >
          <Icon v-if="showRightContent" :name="rightIconName" :class="`${icon} animate-pulse animate-slide-right`" />
          <Icon v-else name="mingcute:dot-grid-line" :class="icon" />
        </NuxtLink>
      </div>
      <AtomsLine>
        <NuxtLink to="/feed" title="Redirect to Feed" class="rotate-45" :class="link">
          Feed
        </NuxtLink>
      </AtomsLine>
    </div>
  </section>
</template>

<style scoped>
@keyframes slide-left {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-6px);
  }
}

@keyframes slide-right {
  0%, 100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(6px);
  }
}

.animate-slide-left {
  animation: slide-left 2s ease-in-out infinite;
}

.animate-slide-right {
  animation: slide-right 2s ease-in-out infinite;
}
</style>
