function data(id: number, title: string, tech: string, src: string, url: string) {
  return {
    id,
    title,
    tech,
    src,
    to: url,
  };
}

export const works = [
  data(1, "Personal Site", "Nuxt", "line-md:github-loop", "https://github.com/adydetra/adityawarman-dewa-putra"),
  data(2, "Old Personal Site", "HTML", "line-md:github-loop", "https://github.com/adydetra/portfolio"),
  data(3, "Dewa Programming", "Laravel", "line-md:github-loop", "https://github.com/DewaSmkn1JAKARTA/DewaProgramming"),
  data(4, "Decorative Plant", "Laravel Blade", "line-md:external-link", "https://decorative-plant.vercel.app"),
  data(5, "Maritime Explore", "Laravel Blade", "line-md:github-loop", "https://github.com/adydetra/maritime-explore"),
  data(6, "Learning Centre Indonesia", "Laravel Blade", "line-md:external-link", "https://learningcentreindonesia.com/web"),
  data(7, "Wangyland", "Nuxt", "line-md:external-link", "https://wangyland.vercel.app"),
  data(8, "Bang CV", "Next", "line-md:github-loop", "https://github.com/adydetra/bangcv"),
  data(9, "MP3 / MP4 Downloader", "Next", "line-md:github-loop", "https://github.com/adydetra/mp3-mp4-downloader"),
  data(10, "E-Commerce LSP", "PHP", "line-md:github-loop", "https://github.com/adydetra/e-commerce-lsp"),
  data(11, "Belajar HTML App", "Expo", "line-md:github-loop", "https://github.com/adydetra/expo-belajar-html-app"),
  data(12, "Averroes Unipessoal. Lda", "HTML", "line-md:external-link", "https://www.averroes.info"),
  data(13, "List Web", "Nuxt", "line-md:external-link", "https://list-web.adydetra.my.id/"),
  data(14, "Protem", "Vue", "line-md:external-link", "https://pt-teknologi-pustaka-indonesia-buku.vercel.app/"),
  data(15, "Nuxt Starter", "Nuxt", "line-md:github-loop", "https://github.com/adydetra/nuxt-starter"),
  data(16, "Ensik Archieve", "Nuxt", "line-md:github-loop", "https://github.com/ose-id/ensik-archieve"),
  data(17, "D-Notes", "Nuxt", "line-md:github-loop", "https://github.com/adydetra/d-notes"),
  data(18, "OSE", "Astro", "line-md:github-loop", "https://github.com/ose-id/ose"),
  data(19, "Insta", "Nuxt", "line-md:external-link", "https://insta.adydetra.my.id/"),
];
