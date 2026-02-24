<script setup lang="ts">
const works = useWorks();

interface GroupMeta {
  icon: string;
  link: string;
}

const GROUP_META: Record<string, GroupMeta> = {
  Nuxt: { icon: 'simple-icons:nuxtdotjs', link: 'nuxt.com' },
  Laravel: { icon: 'simple-icons:laravel', link: 'laravel.com' },
  HTML: { icon: 'simple-icons:html5', link: 'developer.mozilla.org/docs/Web/HTML' },
  Next: { icon: 'simple-icons:nextdotjs', link: 'nextjs.org' },
  PHP: { icon: 'simple-icons:php', link: 'www.php.net' },
  Vue: { icon: 'simple-icons:vuedotjs', link: 'vuejs.org' },
  React: { icon: 'simple-icons:react', link: 'react.dev' },
  Python: { icon: 'simple-icons:python', link: 'www.python.org' },
  Svelte: { icon: 'simple-icons:svelte', link: 'svelte.dev' },
  Electron: { icon: 'simple-icons:electron', link: 'electronjs.org' },
  Astro: { icon: 'simple-icons:astro', link: 'astro.build' },
};

function getGroupMeta(label: string) {
  return GROUP_META[label];
}

type WorkItem = ReturnType<typeof useWorks>[number];

interface GroupedWork {
  label: string;
  items: WorkItem[];
  icon?: string;
  link?: string;
}

function hasUiLabel(work: WorkItem) {
  return Boolean(work.ui && work.ui.toLowerCase() !== 'none');
}

function normalizeCategory(tech: string) {
  return tech === 'Laravel' || tech === 'Laravel Blade' ? 'Laravel' : tech;
}

const groupedWorks = computed(() => {
  const map = new Map<string, GroupedWork>();

  works.forEach((work) => {
    const label = normalizeCategory(work.tech);
    const entry = map.get(label);
    const meta = getGroupMeta(label);

    if (entry) {
      entry.items.push(work);
    }
    else {
      map.set(label, {
        label,
        items: [work],
        icon: meta?.icon,
        link: meta?.link,
      });
    }
  });

  return Array.from(map.values()).sort((a, b) => {
    const diff = b.items.length - a.items.length;

    return diff !== 0 ? diff : a.label.localeCompare(b.label);
  });
});
</script>

<template>
  <div class="flex flex-col gap-12 w-full">
    <section
      v-for="(group, index) in groupedWorks"
      :key="group.label"
      class="flex flex-col gap-6"
      :class="{ 'xl:mb-20': index !== groupedWorks.length - 1 }"
    >
      <h2 class="flex items-center gap-4 text-xl md:text-2xl 2xl:text-3xl font-semibold text-neutral-600 dark:text-neutral-200 tracking-wide uppercase">
        <NuxtLink
          v-if="group.icon && group.link"
          :to="`https://${group.link}`"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex"
          :title="`${group.label} official website`"
          :aria-label="group.label"
        >
          <Icon
            :name="group.icon"
            class="text-base md:text-xl 2xl:text-2xl text-neutral-500 dark:text-neutral-400 category-icon"
          />
        </NuxtLink>
        <Icon
          v-else-if="group.icon"
          :name="group.icon"
          class="text-base md:text-xl 2xl:text-2xl text-neutral-500 dark:text-neutral-400 category-icon"
        />
        <span class="group-title-text">{{ group.label }}</span>
        <span class="flex-1 h-px bg-neutral-300 dark:bg-neutral-700" />
      </h2>
      <div class="grid grid-cols-8 3xl:grid-cols-9 gap-6 md:gap-8 lg:gap-12 3xl:gap-20">
        <NuxtLink
          v-for="work in group.items"
          :key="work.title"
          :to="`https://${work.url}`"
          :title="work.title"
          target="_blank"
          class="relative flex justify-center col-span-8 md:col-span-4 3xl:col-span-3 pt-4 pb-6 2xl:pb-7 text-neutral-500 dark:text-neutral-400 transition-colors ease-in-out duration-500 cursor-pointer hover:backdrop-saturate-200 border-2 border-dashed border-neutral-400 dark:border-neutral-800 hover:border-yellow-500 dark:hover:border-neutral-100"
        >
          <div class="flex flex-col gap-4 2xl:gap-6 w-full px-6">
            <div class="flex items-center">
              <span class="text-xs 2xl:text-base font-light tracking-wider">{{ work.title }}</span>
            </div>
            <div class="flex justify-between items-center w-full">
              <span class="text-[11px] lg:text-[9.5px] 2xl:text-xs font-extralight tracking-widest space-x-2.5">
                <span class="bg-neutral-100 dark:bg-neutral-900 rounded py-0.5 px-1.5 transition-colors ease-in-out duration-500">{{ work.tech }}</span>
                <span
                  v-if="hasUiLabel(work)"
                  class="bg-neutral-100 dark:bg-neutral-900 rounded py-0.5 px-1.5 transition-colors ease-in-out duration-500"
                >{{ work.ui }}</span>
              </span>
              <div class="absolute flex items-center right-6 p-1.5 shadow-sm bg-neutral-100 dark:bg-zinc-800 rounded-full border border-neutral-400/50 dark:border-zinc-700/50 ring-0 transition-colors ease-in-out duration-500">
                <Icon
                  :name="work.icon"
                  class="text-xs 2xl:text-base"
                />
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.category-icon {
  animation: category-icon-float 3s ease-in-out infinite;
}

.group-title-text {
  color: inherit;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: currentColor;
}

@keyframes category-icon-float {
  0%,
  100% {
    transform: translateY(0);
    opacity: 0.85;
  }

  50% {
    transform: translateY(-3px);
    opacity: 1;
  }
}
</style>
