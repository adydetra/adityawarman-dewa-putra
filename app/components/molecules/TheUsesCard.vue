<script setup lang="ts">
const sections = ref([
  { title: 'OS', data: useOperatings(), colSpan: '3xl:col-span-2' },
  { title: 'Workstation', data: useWorkstations(), colSpan: '3xl:col-span-4' },
  { title: 'Database', data: useDatabases(), colSpan: '3xl:col-span-2' },
  { title: 'Development tools', data: useDevelopments(), colSpan: 'col-span-8' },
  { title: 'Tech Stack', data: useTechstacks(), colSpan: '3xl:col-span-8' },
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
    <div class="w-full max-w-xs mx-auto md:max-w-2xl lg:max-w-none">
      <h2 :class="classes.h2">
        {{ section.title }}
      </h2>
      <div class="flex flex-col items-start lg:items-center">
        <ul class="flex flex-col lg:flex-row lg:flex-wrap lg:justify-center gap-4 lg:gap-8 lg:gap-12 w-full lg:w-auto px-4 md:px-6 lg:px-0">
          <li v-for="(data, idx) in section.data" :key="idx" class="w-full sm:w-auto text-left lg:text-center">
            <NuxtLink :to="`https://${data.url}`" target="_blank" :title="data.title" :class="[classes.link, 'block py-1 lg:py-0']">
              <span class="hidden lg:block">
                <Icon :name="data.icon" :class="classes.icon" />
              </span>
              
              <div class="flex lg:hidden items-start gap-4 text-left w-full">
                <Icon :name="data.icon" class="text-xl md:text-2xl shrink-0 mt-1" />
                <div>
                  <div class="text-sm md:text-base font-medium">{{ data.title }}</div>
                  <div v-if="data.description" class="text-xs md:text-sm text-neutral-500 dark:text-neutral-400 mt-0.5">
                    {{ data.description }}
                  </div>
                </div>
              </div>
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
