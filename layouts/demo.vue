<template>
  <section class="bg-white dark:bg-gray-950 text-gray-500 dark:text-white min-h-screen">
    <div class="lg:bg-[url('/images/pattern-hero-left.png')] lg:dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center">
      <div class="flex flex-col min-h-screen mx-auto py-4 lg:py-10 px-6 md:px-10 relative">
        <div class="hidden lg:block">
          <AtomsBack />
          <AtomsColorMode
            class="fixed top-4 right-4 rounded-md bg-gray-200 ring-1 ring-gray-400 dark:ring-0 lg:ring-0 dark:bg-white/10 px-2 py-1 lg:p-0 lg:bg-transparent dark:lg:bg-transparent lg:top-7 lg:right-9"
          />
        </div>
        <div class="mb-16 lg:hidden">
          <AtomsColorMode
            class="fixed z-10 flex items-center top-4 right-4 rounded-md bg-gray-200 ring-1 ring-gray-400 dark:ring-0 dark:bg-white/10 p-2 dark:lg:bg-transparent"
          />
          <AtomsNav />
        </div>
        <slot />
        <AtomsFooter class="!text-center lg:hidden" />
      </div>
    </div>
  </section>
</template>
