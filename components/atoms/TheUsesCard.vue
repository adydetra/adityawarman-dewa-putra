<template>
  <!-- Operating System -->
  <div class="col-span-8 lg:col-span-2" :class="card">
    <div>
      <h2 :class="h2">OS</h2>
      <ul :class="list" class="gap-6">
        <li v-for="data in operatings" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Workstation -->
  <div class="col-span-8 lg:col-span-4" :class="card">
    <div>
      <h2 :class="h2">Workstation</h2>
      <ul :class="list" class="gap-6">
        <li v-for="data in workstations" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Database -->
  <div class="col-span-8 lg:col-span-2" :class="card">
    <div>
      <h2 :class="h2">Database</h2>
      <ul :class="list" class="gap-6">
        <li v-for="data in databases" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Package Manager -->
  <div class="lg:backdrop-saturate-200 col-span-8 lg:col-span-4" :class="card">
    <div>
      <h2 :class="h2">Package Manager</h2>
      <ul :class="list" class="gap-6">
        <li v-for="data in packages" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Tech Stack Development -->
  <div class="lg:backdrop-saturate-200 col-span-8 lg:col-span-4" :class="card">
    <div>
      <h2 :class="h2">Tech Stack</h2>
      <ul :class="list" class="gap-6 2xl:gap-8">
        <li v-for="data in techstacks" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Development tools -->
  <div class="col-span-8" :class="card">
    <div>
      <h2 :class="h2">Development tools</h2>
      <ul :class="list" class="gap-6 lg:gap-10">
        <li v-for="data in developments" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as use from "~/types/uses";

const operatings = use.operatings;
const workstations = use.workstations;
const databases = use.databases;
const packages = use.packages;
const techstacks = use.techstacks;
const developments = use.developments;

const card = "flex justify-center pt-6 pb-8 bg-gray-200/30 dark:bg-gray-500/5 rounded-md text-gray-400";
const h2 = "text-sm md:text-md 2xl:text-lg font-light mb-3 2xl:mb-6 text-center";
const list = "flex flex-wrap justify-center";
const link = "cursor-pointer ease-in-out duration-300 dark:text-gray-600 hover:text-yellow-400 dark:hover:text-yellow-200";
const icon = "w-3 h-3 lg:w-4 lg:h-4 2xl:w-5 2xl:h-5";
</script>
