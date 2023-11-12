<template>
  <!-- Operating System -->
  <div class="col-span-8 lg:col-span-2" :class="card">
    <div>
      <h2 :class="h2">OS</h2>
      <ul :class="list">
        <li v-for="(data, index) in operatings" :key="index">
          <NuxtLink :to="data.url" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.icon" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Workstation -->
  <div class="col-span-8 lg:col-span-4" :class="card">
    <div>
      <h2 :class="h2">Workstation</h2>
      <ul :class="list">
        <li v-for="(data, index) in workstations" :key="index">
          <NuxtLink :to="data.url" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.icon" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Database -->
  <div class="col-span-8 lg:col-span-2" :class="card">
    <div>
      <h2 :class="h2">Database</h2>
      <ul :class="list">
        <li v-for="(data, index) in databases" :key="index">
          <NuxtLink :to="data.url" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.icon" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Package Manager -->
  <div class="lg:backdrop-saturate-200 col-span-8 lg:col-span-4" :class="card">
    <div>
      <h2 :class="h2">Package Manager</h2>
      <ul :class="list">
        <li v-for="(data, index) in packages" :key="index">
          <NuxtLink :to="data.url" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.icon" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Tech Stack Development -->
  <div class="lg:backdrop-saturate-200 col-span-8 lg:col-span-4" :class="card">
    <div>
      <h2 :class="h2">Tech Stack</h2>
      <ul :class="list">
        <li v-for="(data, index) in techstacks" :key="index">
          <NuxtLink :to="data.url" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.icon" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Development tools -->
  <div class="col-span-8" :class="card">
    <div>
      <h2 :class="h2">Development tools</h2>
      <ul :class="list" class="lg:gap-10">
        <li v-for="(data, index) in developments" :key="index">
          <NuxtLink :to="data.url" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.icon" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const operatings = useOperatings();
const workstations = useWorkstations();
const databases = useDatabases();
const packages = usePackages();
const techstacks = useTechstacks();
const developments = useDevelopments();

const card = "flex justify-center pt-6 pb-8 bg-gray-200/30 dark:bg-gray-500/5 rounded-md text-gray-400";
const h2 = "text-sm md:text-md 2xl:text-lg font-light mb-6 lg:mb-8 text-center";
const list = "flex flex-wrap justify-center px-16 md:!px-0 gap-8 md:gap-12";
const link = "cursor-pointer ease-in-out duration-300 dark:text-gray-600 hover:text-yellow-400 dark:hover:text-yellow-200";
const icon = "w-3.5 h-3.5 md:w-4 md:h-4 2xl:w-5 2xl:h-5";
</script>
