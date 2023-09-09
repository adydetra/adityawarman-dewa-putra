<template>
  <div
    class="mx-auto min-h-screen w-screen flex flex-col justify-center px-4 lg:px-40 2xl:px-24 pb-14 2xl:pb-16 py-14 2xl:py-0 container bg-[url('/images/pattern-hero-left.png')] dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center"
  >
    <div class="mb-16" v-if="$device.isMobileOrTablet">
      <AtomsButtonColor
        class="fixed z-10 flex items-center top-4 right-4 rounded-md bg-gray-200 ring-1 ring-gray-400 dark:ring-0 dark:bg-white/10 p-2 dark:lg:bg-transparent"
      />
      <AtomsLinkList>
        <li>
          <NuxtLink to="/" title="Home"><Icon name="line-md:home-simple" class="w-4 h-4 md:w-6 md:h-6 -mt-0.5 text-gray-300 dark:text-gray-700" /></NuxtLink>
        </li>
        <li><Icon name="line-md:chevron-small-left" class="w-5 h-5 md:w-6 md:h-6 text-gray-300 dark:text-gray-700" /></li>
      </AtomsLinkList>
    </div>
    <h1 data-aos="fade-down" data-aos-duration="1000" class="text-gray-500 dark:text-gray-300 text-center text-4xl lg:text-3xl 2xl:text-4xl font-bold mb-16">
      <div class="leading-relaxed" v-if="$device.isDesktop">Software I use, gadgets I love, and<br />the tech stack that I use.</div>
      <div v-else>Uses</div>
    </h1>

    <div class="grid grid-cols-8 gap-2 space-y-4 lg:space-y-0 lg:gap-12 2xl:gap-20">
      <AtomsCardUses />
    </div>
  </div>
</template>
