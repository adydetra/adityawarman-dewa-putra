function data(id: number, title: string, tech: string, src: string, url: string) {
  return {
    id,
    title,
    tech,
    src,
    to: url,
  };
}

export const projects = [
  data(1, "Personal Site", "Nuxt", "line-md:external-link", "https://github.com/devdewa/adityawarman-dewa-putra"),
  data(2, "Old Personal Site", "HTML", "line-md:external-link", "https://dewaprogramming.vercel.app"),
  data(3, "Dewa Programming", "Laravel", "line-md:github-loop", "https://github.com/DewaSmkn1JAKARTA/DewaProgramming"),
  data(4, "Decorative Plant", "Nuxt", "line-md:external-link", "https://decorative-plant.vercel.app"),
  data(5, "Learning Centre Indonesia", "Laravel", "line-md:external-link", "https://learningcentreindonesia.com/web"),
  data(6, "Wangyland", "Nuxt", "line-md:external-link", "https://wangyland.vercel.app"),
  data(7, "Bang CV", "NEXT.js", "line-md:github-loop", "https://github.com/devdewa/bangcv"),
  data(8, "MP3 / MP4 Downloader", "NEXT.js", "line-md:external-link", "https://dewa-downloader.vercel.app"),
  data(9, "E-Commerce LSP", "PHP", "line-md:github-loop", "https://github.com/devdewa/e-commerce-lsp"),
  data(10, "Belajar HTML App", "Expo", "line-md:github-loop", "https://github.com/devdewa/expo-belajar-html-app"),
  data(11, "Averroes Unipessoal. Lda", "HTML", "line-md:external-link", "https://www.averroes.info"),
  data(12, "Protem", "Vue", "line-md:github-loop", "https://github.com/devdewa/pt-tpi-book"),
  data(13, "Ensik Archieve", "Nuxt", "line-md:github-loop", "https://github.com/ose-id/ensik-archieve"),
  data(14, "D-Notes", "Nuxt", "line-md:github-loop", "https://github.com/devdewa/d-notes"),
  data(15, "OSE", "Astro", "line-md:github-loop", "https://github.com/ose-id/ose"),
];
