<template>
  <!-- Workstation -->
  <div data-aos="zoom-in" data-aos-duration="1000" class="col-span-2" :class="card">
    <div>
      <h2 :class="h2Style">Workstation</h2>
      <ul class="flex justify-center text-gray-400 gap-6">
        <li v-for="workstation in workstations" :key="workstation.id">
          <NuxtLink :to="workstation.to" target="_blank" :title="workstation.title" :class="link">
            <Icon :name="workstation.name" :class="icon" />
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
        <li v-for="operating in operatings" :key="operating.id">
          <NuxtLink :to="operating.to" target="_blank" :title="operating.title" :class="link">
            <Icon :name="operating.name" :class="icon" />
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
        <li v-for="database in databases" :key="database.id">
          <NuxtLink :to="database.to" target="_blank" :title="database.title" :class="link">
            <Icon :name="database.name" :class="icon" />
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
        <li v-for="development in developments" :key="development.id">
          <NuxtLink :to="development.to" target="_blank" :title="development.title" :class="link">
            <Icon :name="development.name" :class="icon" />
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
        <li v-for="pack in packages" :key="pack.id">
          <NuxtLink :to="pack.to" target="_blank" :title="pack.title" :class="link">
            <Icon :name="pack.name" :class="icon" />
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
        <li v-for="frontend in frontends" :key="frontend.id">
          <NuxtLink :to="frontend.to" target="_blank" :title="frontend.title" :class="link">
            <Icon :name="frontend.name" :class="icon" />
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
        <li v-for="backend in backends" :key="backend.id">
          <NuxtLink :to="backend.to" target="_blank" :title="backend.title" :class="link">
            <Icon :name="backend.name" :class="icon" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const card = "flex justify-center border-dashed border-2 border-gray-400 pt-4 pb-6 hover:border-yellow-500 dark:hover:border-gray-100 ease-in-out duration-300";
const h2Style = "text-gray-400 text-md 2xl:text-lg font-semibold mb-3 2xl:mb-6 flex justify-center";
const link = "cursor-pointer ease-in-out duration-300 hover:text-yellow-400 dark:hover:text-yellow-200";
const icon = "w-4 h-4 2xl:w-5 2xl:h-5";

const workstations = [
  {
    id: 1,
    name: "ic:round-smartphone",
    title: "Xiaomi Redmi Note 7 Pro",
    to: "https://www.gsmarena.com/xiaomi_redmi_note_7-9513.php",
  },
  {
    id: 2,
    name: "solar:laptop-outline",
    title: "Asus A412DA Ryzen 3",
    to: "https://www.reviewlaptop-id.com/asus-a412da-ek301t-amd-ryzen-3-3200u/",
  },
];

const operatings = [
  {
    id: 1,
    name: "uim:android",
    title: "Android",
    to: "https://www.android.com/intl/id_id/",
  },
  {
    id: 2,
    name: "uim:windows",
    title: "Windows",
    to: "https://www.microsoft.com/en-us/windows",
  },
  {
    id: 3,
    name: "cib:arch-linux",
    title: "Arch Linux",
    to: "https://archlinux.org/",
  },
];

const databases = [
  {
    id: 1,
    name: "tabler:brand-mysql",
    title: "MySQL",
    to: "https://www.mysql.com/",
  },
  {
    id: 2,
    name: "akar-icons:postgresql-fill",
    title: "PostgreSQL",
    to: "https://www.postgresql.org/",
  },
];

const developments = [
  {
    id: 1,
    name: "akar-icons:vscode-fill",
    title: "VS Code",
    to: "https://code.visualstudio.com/",
  },
  {
    id: 2,
    name: "solar:figma-bold-duotone",
    title: "FIGMA",
    to: "https://www.figma.com",
  },
  {
    id: 3,
    name: "simple-icons:androidstudio",
    title: "Android Studio",
    to: "https://developer.android.com/studio",
  },
  {
    id: 4,
    name: "simple-icons:alacritty",
    title: "Alacritty",
    to: "https://alacritty.org/",
  },
  {
    id: 5,
    name: "simple-icons:postman",
    title: "Postman",
    to: "https://www.postman.com/",
  },
  {
    id: 6,
    name: "simple-icons:xampp",
    title: "XAMPP",
    to: "https://www.apachefriends.org/download.html",
  },
  {
    id: 7,
    name: "mdi:firefox",
    title: "Firefox",
    to: "https://www.mozilla.org/id/firefox/new/",
  },
];

const packages = [
  {
    id: 1,
    name: "simple-icons:npm",
    title: "NPM",
    to: "https://www.npmjs.com/",
  },
  {
    id: 2,
    name: "akar-icons:yarn-fill",
    title: "Yarn",
    to: "https://yarnpkg.com/",
  },
];

const backends = [
  {
    id: 1,
    name: "akar-icons:php-fill",
    title: "PHP",
    to: "https://www.php.net/",
  },
  {
    id: 2,
    name: "mdi:laravel",
    title: "Laravel",
    to: "https://laravel.com/",
  },
];

const frontends = [
  {
    id: 1,
    name: "simple-icons:tailwindcss",
    title: "Tailwind CSS",
    to: "https://tailwindcss.com/",
  },
  {
    id: 2,
    name: "ri:bootstrap-fill",
    title: "Bootstrap",
    to: "https://getbootstrap.com/",
  },
  {
    id: 3,
    name: "akar-icons:jquery-fill",
    title: "jQuery",
    to: "https://jquery.com/",
  },
  {
    id: 4,
    name: "simple-icons:vuedotjs",
    title: "Vue Js",
    to: "https://vuejs.org/",
  },
  {
    id: 5,
    name: "simple-icons:nuxtdotjs",
    title: "Nuxt Js",
    to: "https://nuxt.com/",
  },
  {
    id: 6,
    name: "devicon-plain:vitejs",
    title: "Vite Js",
    to: "https://vitejs.dev/",
  },
  {
    id: 7,
    name: "tabler:brand-react-native",
    title: "React Native",
    to: "https://reactnative.dev/",
  },
];
</script>
