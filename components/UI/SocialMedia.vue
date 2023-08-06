<template>
  <ul class="flex text-gray-500 dark:text-gray-400 xl:gap-7 2xl:gap-8">
    <li v-for="data in datas" :key="data.id">
      <NuxtLink
        :to="data.to"
        :title="data.title"
        target="_blank"
        class="cursor-pointer ease-in-out duration-300 hover:text-yellow-400 dark:hover:text-yellow-200"
      >
        <Icon :name="data.name" class="w-6 h-6 2xl:w-7 2xl:h-7" />
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        { id: 1, name: "line-md:github-loop", title: "Github", to: "https://github.com/devdewa/" },
        {
          id: 2,
          name: "line-md:email",
          title: "Email",
          to: "mailto:devdewa123.sp@gmail.com",
        },
        {
          id: 3,
          name: "line-md:instagram",
          title: "Instagram",
          to: "https://www.instagram.com/741_dewa/",
        },
        {
          id: 4,
          name: "line-md:facebook",
          title: "Facebook",
          to: "https://web.facebook.com/adityawarman.dewa.putra",
        },
        {
          id: 5,
          name: "line-md:linkedin",
          title: "Linkedin",
          to: "https://www.linkedin.com/in/adityawarman-dewa-putra/",
        },
      ],
    };
  },
};
</script>
