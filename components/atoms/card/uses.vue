<template>
  <!-- Workstation -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="col-span-2" :class="card">
    <div>
      <h2 :class="h2Style">Workstation</h2>
      <ul class="flex justify-center text-gray-400 gap-6">
        <li v-for="data in workstations" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Operating System -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="col-span-4" :class="card">
    <div>
      <h2 :class="h2Style">Operating System</h2>
      <ul class="flex justify-center text-gray-400 gap-6">
        <li v-for="data in operatings" :key="data.id">
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
      <h2 :class="h2Style">Database</h2>
      <ul class="flex justify-center text-gray-400 gap-6">
        <li v-for="data in databases" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Development tools -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="backdrop-saturate-200 col-span-4" :class="card">
    <div>
      <h2 :class="h2Style">Development tools</h2>
      <ul class="flex justify-center text-gray-400 gap-6">
        <li v-for="data in developments" :key="data.id">
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
      <h2 :class="h2Style">Package Manager</h2>
      <ul class="flex justify-center text-gray-400 gap-6">
        <li v-for="data in packages" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Front End Development -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="col-span-8" :class="card">
    <div>
      <h2 :class="h2Style">Front End Development</h2>
      <ul class="flex justify-center text-gray-400 gap-6 2xl:gap-8">
        <li v-for="data in frontends" :key="data.id">
          <NuxtLink :to="data.to" target="_blank" :title="data.title" :class="link">
            <Icon :name="data.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- Back End Development -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="backdrop-saturate-200 col-span-8" :class="card">
    <div>
      <h2 :class="h2Style">Back End Development</h2>
      <ul class="flex justify-center text-gray-400 gap-6">
        <li v-for="data in backends" :key="data.id">
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

const workstations = use.workstations;
const operatings = use.operatings;
const databases = use.databases;
const developments = use.developments;
const packages = use.packages;
const frontends = use.frontends;
const backends = use.backends;

const card = "flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-yellow-500 dark:hover:border-gray-100 ease-in-out duration-300";
const h2Style = "text-gray-400 text-md 2xl:text-lg font-semibold mb-3 2xl:mb-6 flex justify-center";
const link = "cursor-pointer ease-in-out duration-300 hover:text-yellow-400 dark:hover:text-yellow-200";
const icon = "w-4 h-4 2xl:w-5 2xl:h-5";
</script>
