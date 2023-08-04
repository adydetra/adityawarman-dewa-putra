<template>
  <ul class="flex text-gray-500 dark:text-gray-400 xl:gap-7 2xl:gap-8">
    <li v-for="data in datas" :key="data.id">
      <NuxtLink
        :to="data.to"
        :title="data.title"
        target="_blank"
        class="cursor-pointer ease-in-out duration-300 hover:text-yellow-400 dark:hover:text-yellow-200"
      >
        <Icon :name="data.name" class="w-4 h-4 lg:w-6 lg:h-6" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        { id: 1, name: "uim:github-alt", title: "Github", to: "https://github.com/devdewa/" },
        {
          id: 2,
          name: "uim:instagram",
          title: "Instagram",
          to: "https://www.instagram.com/741_dewa/",
        },
        {
          id: 3,
          name: "uim:facebook-f",
          title: "Facebook",
          to: "https://web.facebook.com/adityawarman.dewa.putra",
        },
        {
          id: 4,
          name: "uim:linkedin-alt",
          title: "Linkedin",
          to: "https://www.linkedin.com/in/adityawarman-dewa-putra/",
        },
      ],
    };
  },
};
</script>
