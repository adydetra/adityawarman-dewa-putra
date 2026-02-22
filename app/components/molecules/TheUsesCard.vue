<script setup lang="ts">
const sections = ref([
  { title: 'OS', data: useOperatings(), colSpan: '3xl:col-span-2' },
  { title: 'Workstation', data: useWorkstations(), colSpan: '3xl:col-span-4' },
  { title: 'Database', data: useDatabases(), colSpan: '3xl:col-span-2' },
  { title: 'Package Manager', data: usePackages(), colSpan: '3xl:col-span-4' },
  { title: 'Tech Stack', data: useTechstacks(), colSpan: '3xl:col-span-4' },
  { title: 'Development tools', data: useDevelopments(), colSpan: 'col-span-8' },
]);

const classes = {
  card: 'flex justify-center pt-6 pb-8 xl:pt-4 xl:pb-6 2xl:pt-6 2xl:pb-8 bg-neutral-200/30 dark:bg-neutral-500/5 rounded-md text-neutral-400 transition-colors ease-in-out duration-500',
  h2: 'text-sm md:text-base 2xl:text-lg font-light mb-6 lg:mb-8 text-center',
  list: 'flex flex-wrap justify-center px-16 md:!px-0 gap-8 md:gap-12',
  link: 'cursor-pointer transition-colors ease-in-out duration-300 dark:text-neutral-600 hover:text-yellow-400 dark:hover:text-yellow-200',
  icon: 'text-sm md:text-base 2xl:text-xl',
};
</script>

<template>
  <div v-for="(section, index) in sections" :key="index" class="col-span-8" :class="[classes.card, section.colSpan]">
    <div>
      <h2 :class="classes.h2">
        {{ section.title }}
      </h2>
      <ul :class="classes.list">
        <li v-for="(data, idx) in section.data" :key="idx">
          <NuxtLink :to="`https://${data.url}`" target="_blank" :title="data.title" :class="classes.link">
            <Icon :name="data.icon" :class="classes.icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>
