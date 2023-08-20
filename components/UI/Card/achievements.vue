<template>
  <NuxtLink
    :data-aos="achievement.aos"
    data-aos-duration="1000"
    :to="achievement.to"
    target="_blank"
    :title="achievement.title"
    class="bg-gray-100/40 dark:bg-slate-900/40 shadow-xl shadow-blue-800/5 hover:bg-yellow-200/20 col-span-4 cursor-pointer ease-in-out duration-300 hover:scale-105 rounded-2xl flex justify-center pt-4 pb-6"
    v-for="achievement in achievements"
    :key="achievement.id"
  >
    <div class="w-full flex flex-col justify-between gap-6 xl:p-8 2xl:p-12">
      <img :src="achievement.thumbnail" alt="" class="w-full h-60 bg-gray-800/50 py-8 px-12 rounded-2xl" />
      <p class="text-justify text-sm 2xl:text-md indent-8 text-gray-400 leading-loose"><span class="text-sky-400">#</span> {{ achievement.deskripsi }}</p>
      <p class="flex items-center font-semibold text-gray-500 dark:text-gray-200">
        Result: <span class="ml-2 text-gray-400 leading-relaxed">{{ achievement.result }}</span>
      </p>
      <div class="flex items-center text-gray-500 dark:text-white mt-4">
        <img :src="achievement.src" alt="" class="w-12 h-12 rounded-full bg-zinc-800 p-1.5 shadow-md border border-zinc-700/50 ring-0" />
        <Icon name="line-md:text-box" class="w-3 h-3 lg:w-4 2xl:w-5 lg:h-4 2xl:h-5 ml-3" />
        <span class="ml-2 text-sm lg:text-md 2xl:text-base font-semibold">{{ achievement.title }}</span>
      </div>
    </div>

    <!-- Icon Team / Individual -->
    <div class="flex justify-center items-center absolute bg-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full">
      <Icon :name="achievement.icon" class="w-3 h-3 lg:w-4 2xl:w-5 lg:h-4 2xl:h-5" />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const achievements = [
  {
    id: 1,
    aos: "flip-left",
    title: "Hackathon Maritime 2021",
    thumbnail: "icon/hackathon.svg",
    src: "icon/maritime-explore.svg",
    icon: "ri:team-fill",
    to: "/images/sertifikat-hackathon.jpg",
    result: "Semifinalist",
    deskripsi:
      "This competition was organized by the Maritime Potential Development Service at the Navy Headquarters (Dispotmar Mabesal) in order to raise the potential of the nation's children in the field of maritime digital product innovation.",
  },
  {
    id: 2,
    aos: "flip-right",
    title: "KKSI 2021",
    thumbnail: "icon/kksi.svg",
    src: "icon/go-prakerin.svg",
    icon: "ri:team-fill",
    to: "pdf/sertifikat-kksi.pdf",
    result: "1st Runner Up",
    deskripsi:
      "KKSI stands for Indonesian Vocational Creative Camp, which is a national-scale event that is routinely held by the Ministry of Education and Culture and the Directorate General of Vocational Education assisted by SMK administrators or organizers.",
  },
  {
    id: 3,
    aos: "flip-left",
    title: "Coding di Skilvul Playground",
    thumbnail: "icon/skilvul.svg",
    src: "icon/html.svg",
    icon: "bxs:user",
    to: "https://skilvul.com/paths/coding-di-skilvul-playground/student/ckqzaqvkkbpov0722lngebxow",
    result: "Complete",
    deskripsi:
      "Write coding without having to install other applications and immediately see the results of your code in one place. Create Your First Website Page using Skillvul Playground, only at Skillvul Playground!",
  },
  {
    id: 4,
    aos: "flip-right",
    title: "Bootstrap 5 - Website Landing Page",
    thumbnail: "icon/skilvul.svg",
    src: "icon/bootstrap.svg",
    icon: "bxs:user",
    to: "https://skilvul.com/courses/bootstrap-5-membuat-website-landing-page/student/ckqzaqvr4bppp0722g5uqhx0w",
    result: "SkilPoin 320/385",
    deskripsi:
      "Bootstrap is a free and open source CSS framework. this working build contains HTML and CSS-based design templates for form, navigation, and other interface components, as well as JavaScript-enabled extensions.",
  },
];
</script>
