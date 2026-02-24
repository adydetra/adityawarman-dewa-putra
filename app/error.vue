<script setup lang="ts">
import type { NuxtError } from '#app';

const _props = defineProps({
  error: Object as () => NuxtError,
});

function handleError() {
  clearError({ redirect: '/' });
}
</script>

<template>
  <div
    class="min-h-dvh flex items-center justify-center bg-black py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8 text-center">
      <div class="space-y-6">
        <h2 class="text-3xl sm:text-4xl font-extrabold text-neutral-100">
          {{ error?.statusCode === 404 ? 'Page Not Found' : 'Something Went Wrong' }}
        </h2>
        <p class="text-sm text-neutral-500">
          {{ error?.message }}
        </p>
      </div>

      <div class="p-8">
        <div class="text-center">
          <div
            class="inline-flex justify-center items-center w-32 h-32 rounded-full bg-red-100"
          >
            <svg
              class="w-16 h-16 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                v-if="error?.statusCode === 404"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <button
          class="group relative mx-auto flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-neutral-600 hover:bg-neutral-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500"
          @click="handleError"
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
</template>
