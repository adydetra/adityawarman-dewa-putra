<template>
  <main class="bg-white dark:bg-gray-950 text-gray-500 dark:text-white min-h-screen">
    <section class="lg:bg-[url('/images/pattern-hero-left.png')] lg:dark:bg-[url('/images/pattern-hero-left-dark.png')] bg-contain bg-center px-8 lg:px-32">
      <div class="min-h-screen container mx-auto py-4 lg:py-10 px-8 lg:px-28 relative">
        <AtomsButtonBack />
        <AtomsButtonColor
          class="fixed top-4 right-4 rounded-md bg-gray-200 ring-1 ring-gray-400 dark:ring-0 lg:ring-0 dark:bg-white/10 px-2 py-1 lg:p-0 lg:bg-transparent dark:lg:bg-transparent lg:top-7 lg:right-9"
        />
        <slot />
        <AtomsFooter class="!text-center lg:hidden" />
      </div>
    </section>
  </main>
</template>
