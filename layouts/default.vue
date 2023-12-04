<script lang="ts" setup>
const layout = 'hidden lg:flex flex-wrap justify-center items-center xl:w-40 2xl:w-52 py-6 mx-auto h-screen bg-white dark:bg-gray-950 fixed top-0';
const link = 'text-xs text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-300 text-center w-full';

const route = useRoute();
const routeMap: Record<string, number> = {
  '/': 1,
  '/uses': 2,
  '/work': 3,
  '/closing': 4,
};
const currentNumber = routeMap[route.path] || 0;

const showLeftContent = currentNumber !== 1;
const leftLink = showLeftContent ? (currentNumber === 2 ? '/' : currentNumber === 3 ? 'uses' : currentNumber === 4 ? 'work' : '#') : '#';
const leftIconName = showLeftContent ? (currentNumber === 2 ? 'ci:chevron-left-duo' : 'ci:chevron-left-duo') : '#';

const showRightContent = currentNumber !== 4;
const rightLink = showRightContent ? (currentNumber === 1 ? 'uses' : currentNumber === 2 ? 'work' : currentNumber === 3 ? 'closing' : '#') : '#';
const rightIconName = showRightContent ? (currentNumber === 1 ? 'ci:chevron-right-duo' : 'ci:chevron-right-duo') : '#';

const leftContentClass = showLeftContent
  ? 'w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200'
  : 'w-full flex justify-center cursor-not-allowed py-8 ease-in-out duration-300 text-slate-400 hover:text-red-400';
const rightContentClass = showRightContent
  ? 'w-full flex justify-center cursor-pointer py-8 ease-in-out duration-300 text-slate-400 hover:text-yellow-400 dark:hover:text-yellow-200'
  : 'w-full flex justify-center cursor-not-allowed py-8 ease-in-out duration-300 text-slate-400 hover:text-red-400';
</script>

<template>
  <section class="dark:bg-gray-950 tracking-wide min-h-screen w-screen flex flex-col justify-center select-none">
    <div class="fixed top-0 left-0" :class="layout">
      <AtomsLine>
        <AtomsNumber :number="currentNumber" />
      </AtomsLine>
      <NuxtLink
        :to="leftLink"
        :title="currentNumber === 1 ? '' : currentNumber === 2 ? 'Home' : currentNumber === 3 ? 'Uses' : 'Work'"
        :class="leftContentClass"
        aria-label="slide"
      >
        <Icon v-if="showLeftContent" :name="leftIconName" class="animate-pulse w-4 h-4 lg:w-6 lg:h-6" />
        <Icon v-else name="mingcute:dot-grid-line" class="w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <AtomsLine>
        <NuxtLink to="/demo" title="Redirect to Demo" class="-rotate-45" :class="link">
          Demo
        </NuxtLink>
      </AtomsLine>
    </div>
    <slot />
    <div class="fixed top-0 right-0" :class="layout">
      <AtomsLine>
        <AtomsColorMode class="w-full" />
      </AtomsLine>
      <NuxtLink
        :to="rightLink"
        :title="currentNumber === 1 ? 'Uses' : currentNumber === 2 ? 'Work' : currentNumber === 3 ? 'Closing' : ''"
        :class="rightContentClass"
        aria-label="slide"
      >
        <Icon v-if="showRightContent" :name="rightIconName" class="animate-pulse w-4 h-4 lg:w-6 lg:h-6" />
        <Icon v-else name="mingcute:dot-grid-line" class="w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
      <AtomsLine>
        <NuxtLink to="/feed" title="Redirect to Feed" class="rotate-45" :class="link">
          Feed
        </NuxtLink>
      </AtomsLine>
    </div>
  </section>
</template>
