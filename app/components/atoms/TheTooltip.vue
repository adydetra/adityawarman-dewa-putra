<script setup lang="ts">
interface Props {
  title: string;
  description?: string | string[];
}

defineProps<Props>();

const isVisible = ref(false);
const tooltipId = useId();

let hideTimeout: ReturnType<typeof setTimeout> | null = null;

function showTooltip() {
  if (hideTimeout)
    clearTimeout(hideTimeout);
  isVisible.value = true;
}

function hideTooltip() {
  hideTimeout = setTimeout(() => {
    isVisible.value = false;
  }, 100);
}
</script>

<template>
  <div
    class="relative inline-block"
    :aria-describedby="isVisible ? tooltipId : undefined"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @focusin="showTooltip"
    @focusout="hideTooltip"
  >
    <slot />

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 translate-y-2 scale-95"
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 translate-y-2 scale-95"
    >
      <div
        v-if="isVisible"
        :id="tooltipId"
        role="tooltip"
        class="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 z-[100] w-64 sm:w-72 p-4 rounded-xl border border-neutral-200/50 dark:border-neutral-800/50 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] pointer-events-none"
      >
        <div class="text-xs font-bold text-neutral-900 dark:text-white uppercase tracking-wider mb-2 flex items-center gap-2">
          <div class="w-1 h-3 bg-yellow-400 rounded-full" />
          {{ title }}
        </div>

        <div v-if="description" class="text-[11px] leading-relaxed text-neutral-600 dark:text-neutral-400 font-medium">
          <template v-if="Array.isArray(description)">
            <ul class="flex flex-col gap-1.5 mt-2">
              <li
                v-for="(spec, i) in description"
                :key="i"
                class="flex gap-2.5 items-center bg-neutral-100/50 dark:bg-neutral-800/50 p-1.5 px-2 rounded-lg border border-transparent hover:border-yellow-400/30 transition-colors"
              >
                <span class="w-1 h-1 rounded-full bg-yellow-400 shrink-0" />
                <span class="truncate">{{ spec }}</span>
              </li>
            </ul>
          </template>
          <template v-else>
            <div class="p-1 px-1.5">
              {{ description }}
            </div>
          </template>
        </div>

        <div class="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border-r border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white dark:bg-neutral-900 translate-y-[-1px]" />
      </div>
    </Transition>
  </div>
</template>
