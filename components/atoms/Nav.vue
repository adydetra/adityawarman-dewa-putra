<template>
  <div class="flex items-center absolute top-4 left-7 text-gray-400 dark:text-gray-500 text-xs gap-2 font-semibold pl-0 p-2">
    <ul class="flex items-center space-x-7">
      <li>
        <NuxtLink to="/" title="Home"><Icon name="majesticons:home-simple-line" class="w-4 h-4" /></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/uses" title="Uses"><Icon name="majesticons:heart-line" class="w-4 h-4" /></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" title="Projects"><Icon name="majesticons:cpu-line" class="w-4 h-4" /></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/achievements" title="Achievements"><Icon name="majesticons:award-line" class="w-4 h-4" /></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" title="Blog"><Icon name="majesticons:receipt-text-line" class="w-4 h-4" /></NuxtLink>
      </li>
      <li>
        <NuxtLink to="/feed" title="Feed"><Icon name="majesticons:user-box-line" class="w-4 h-4" /></NuxtLink>
      </li>
    </ul>
  </div>
</template>
