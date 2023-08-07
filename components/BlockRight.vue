<script setup>
const route = useRoute();

const navigation = [
  { name: "Home", href: "/", current: route.name == "index" },
  { name: "Uses", href: "/uses", current: route.name.includes("uses") },
  { name: "Projects", href: "/projects", current: route.name.includes("projects") },
  { name: "Achiements", href: "/achievements", current: route.name.includes("achievements") },
];
</script>

<template>
  <NuxtLink
    v-for="item in navigation"
    :key="item.name"
    :to="item.href"
    :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium']"
    :aria-current="item.current ? 'page' : undefined"
    >{{ item.name }}
  </NuxtLink>
</template>
