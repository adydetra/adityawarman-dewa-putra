<template>
  <NuxtLink
    :data-aos="achievement.aos"
    data-aos-duration="1000"
    :to="achievement.to"
    target="_blank"
    :title="achievement.title"
    class="shadow-xl shadow-blue-500/5 dark:shadow-blue-800/5 col-span-4 cursor-pointer ease-in-out duration-300 hover:scale-105 rounded-2xl backdrop-saturate-200 bg-gray-50/70 dark:bg-transparent hover:bg-yellow-200/20 flex justify-center pt-4 pb-6"
    v-for="achievement in achievements"
    :key="achievement.id"
  >
    <div class="w-full flex flex-col justify-between gap-6 xl:p-8 2xl:p-12">
      <img
        :src="achievement.thumbnail"
        alt=""
        class="w-full h-60 bg-gray-800/50 py-8 px-12 rounded-2xl"
      />
      <p class="text-justify indent-8 text-gray-400 leading-relaxed">
        <span class="text-sky-400">#</span> {{ achievement.deskripsi }}
      </p>
      <p class="flex items-center font-semibold text-gray-500 dark:text-gray-200">
        Result: <span class="ml-2 text-gray-400 leading-relaxed">{{ achievement.result }}</span>
      </p>
      <div class="flex items-center text-gray-500 dark:text-white mt-4">
        <img
          :src="achievement.src"
          alt=""
          class="w-12 h-12 rounded-full bg-white p-1.5 shadow-md border border-zinc-700/50 bg-zinc-800 ring-0"
        />
        <Icon name="ph:link-bold" class="w-3 h-3 lg:w-4 2xl:w-5 lg:h-4 2xl:h-5 ml-3" />
        <span class="ml-2 text-sm lg:text-md 2xl:text-base font-semibold">{{
          achievement.title
        }}</span>
      </div>
    </div>

    <!-- Icon Team / Individual -->
    <div
      class="flex justify-center items-center absolute bg-gray-300 text-black -top-4 -left-4 w-12 inset-0 h-12 rounded-full"
    >
      <Icon :name="achievement.icon" class="w-3 h-3 lg:w-4 2xl:w-5 lg:h-4 2xl:h-5" />
    </div>
  </NuxtLink>
</template>

<script>
export default {
  data() {
    return {
      achievements: [
        {
          id: 1,
          aos: "flip-left",
          title: "Hackathon Maritime 2021",
          thumbnail: "icon/hackathon.svg",
          src: "icon/maritime-explore.svg",
          icon: "ri:team-fill",
          to: "sertifikat-hackathon.jpg",
          result: "Semifinalist",
          deskripsi:
            "Kompetisi ini diselenggarakan oleh Dinas Pembinaan Potensi Maritim Markas Besar Angkatan Laut (Dispotmar Mabesal) dalam rangka menggalang potensi anak bangsa di bidang inovasi produk digital kemaritiman.",
        },
        {
          id: 2,
          aos: "flip-right",
          title: "KKSI 2021",
          thumbnail: "icon/kksi.svg",
          src: "icon/go-prakerin.svg",
          icon: "ri:team-fill",
          to: "sertifikat-kksi.pdf",
          result: "Juara Harapan 1",
          deskripsi:
            "KKSI adalah singkatan dari Kamp Kreatif SMK Indonesia, yang merupakan event nasional yang rutin diselenggarakan oleh kementrian pendidikan dan kebudayaan serta direktorat jenderal vokasi yang dibantu oleh SMK pengampu atau penyelenggara.",
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
            "Tulis coding tanpa harus install aplikasi lain dan langsung lihat hasil dari codemu dalam satu tempat. Membuat Halaman Website Pertama Kamu dengan menggunakan Skilvul Playground, hanya di Skilvul Playground!",
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
            "Bootstrap membuat front-end developer dapat membuat website dengan cepat, fokus pada responsive mobile, dan membuat website menjadi lebih interaktif tanpa membuat banyak CSS dan JavaScript dari nol.",
        },
      ],
    };
  },
};
</script>
