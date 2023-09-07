<template>
  <!-- Operating System -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="col-span-2" :class="card">
    <div>
      <h2 :class="h2">OS</h2>
      <ul class="flex justify-center text-gray-400 gap-6">
        <li v-for="data in operatings" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Workstation -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="col-span-4" :class="card">
    <div>
      <h2 :class="h2">Workstation</h2>
      <ul class="flex justify-center text-gray-400 gap-6">
        <li v-for="data in workstations" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Database -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="col-span-2" :class="card">
    <div>
      <h2 :class="h2">Database</h2>
      <ul class="flex justify-center text-gray-400 gap-6">
        <li v-for="data in databases" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Package Manager -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="backdrop-saturate-200 col-span-4" :class="card">
    <div>
      <h2 :class="h2">Package Manager</h2>
      <ul class="flex justify-center text-gray-400 gap-6">
        <li v-for="data in packages" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Tech Stack Development -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="backdrop-saturate-200 col-span-4" :class="card">
    <div>
      <h2 :class="h2">Tech Stack</h2>
      <ul class="flex justify-center text-gray-400 gap-6 2xl:gap-8">
        <li v-for="data in techstacks" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Development tools -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="col-span-8" :class="card">
    <div>
      <h2 :class="h2">Development tools</h2>
      <ul class="flex justify-center text-gray-400 gap-10">
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

const card =
  "flex justify-center pt-4 pb-6 border-2 border-dashed border-gray-400 dark:border-gray-600 hover:border-yellow-500 dark:hover:border-gray-100 ease-in-out duration-300";
const h2 = "text-gray-400 text-md 2xl:text-lg font-semibold mb-3 2xl:mb-6 flex justify-center";
const link = "cursor-pointer ease-in-out duration-300 hover:text-yellow-400 dark:hover:text-yellow-200";
const icon = "w-4 h-4 2xl:w-5 2xl:h-5";
</script>
