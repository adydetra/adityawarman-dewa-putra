<template>
  <NuxtLayout>
    <VitePwaManifest />
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body * {
  @apply transition-colors ease-in-out duration-500;
}
</style>