<template>
  <div class="flex items-center absolute top-4 left-4 text-gray-500 dark:text-gray-300 text-xs gap-2 font-semibold pl-0 p-2">
    <ul class="flex items-center">
      <slot />
      <li><NuxtLink to="/blog" title="Blog">Blog</NuxtLink></li>
      <li><Icon name="svg-spinners:pulse" class="w-5 h-5 md:w-6 md:h-6" /></li>
      <li><NuxtLink to="/feed" title="Feed">Feed</NuxtLink></li>
      <li><Icon name="line-md:chevron-small-right" class="w-5 h-5 md:w-6 md:h-6 text-gray-300 dark:text-gray-700" /></li>
    </ul>
    <ul class="flex items-center -mt-0.5 space-x-4 text-gray-400 dark:text-gray-500">
      <li>
        <NuxtLink to="/uses" title="Uses"><Icon name="line-md:heart" class="w-4 h-4" /></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" title="Projects"><Icon name="line-md:text-box" class="w-4 h-4" /></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/achievements" title="Achievements"><Icon name="line-md:star" class="w-4 h-4" /></NuxtLink>
      </li>
    </ul>
  </div>
</template>
