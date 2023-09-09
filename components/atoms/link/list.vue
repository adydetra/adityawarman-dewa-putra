<template>
  <ul class="absolute top-4 left-4 text-gray-500 dark:text-gray-300 text-xs flex items-center gap-2 font-semibold pl-0 p-2">
    <slot/>
    <li><NuxtLink to="/blog">Blog</NuxtLink></li>
    <li><Icon name="svg-spinners:pulse" class="w-5 h-5 md:w-6 md:h-6" /></li>
    <li><NuxtLink to="/feed">Feed</NuxtLink></li>
    <li><Icon name="line-md:chevron-small-right" class="w-5 h-5 md:w-6 md:h-6 text-gray-300 dark:text-gray-700" /></li>
    <li class="flex items-center -mt-0.5 space-x-4 text-gray-400 dark:text-gray-500">
      <li>
        <NuxtLink to="/uses"><Icon name="line-md:heart" class="w-4 h-4" /></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects"><Icon name="line-md:text-box" class="w-4 h-4" /></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/achievements"><Icon name="line-md:star" class="w-4 h-4" /></NuxtLink>
      </li>
    </li>
  </ul>
</template>
