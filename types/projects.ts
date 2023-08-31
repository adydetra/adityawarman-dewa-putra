function data(id: number, title: string, src: string, url: string) {
  return {
    id,
    title,
    src,
    to: url,
  };
}

export const projects = [
  data(1, "Portfolio", "icon/hero-mobile.webp", "https://github.com/devdewa/adityawarman-dewa-putra"),
  data(2, "Old Portfolio", "icon/old-portfolio.png", "https://dewaprogramming.vercel.app"),
  data(3, "DewaProgramming", "icon/dewaprogramming.png", "https://github.com/DewaSmkn1JAKARTA/DewaProgramming"),
  data(4, "Decorative Plant", "icon/decorative-plant.svg", "https://decorative-plant.vercel.app"),
  data(5, "Learning Centre Indonesia", "icon/lci.svg", "https://learningcentreindonesia.com/web"),
  data(6, "Wangyland", "icon/wangyland.png", "https://wangyland.vercel.app"),
  data(7, "Bang CV", "icon/bangcv.webp", "https://github.com/devdewa/bangcv"),
  data(8, "MP3 / MP4 Downloader", "icon/github.svg", "https://dewa-downloader.vercel.app"),
  data(9, "E-Commerce LSP", "icon/lsp.webp", "https://github.com/devdewa/E-Commerce-LSP"),
  data(10, "Belajar HTML App", "icon/expo.svg", "https://github.com/devdewa/expo-belajar-html-app"),
  data(11, "Averroes Unipessoal. Lda", "icon/averroes.png", "https://www.averroes.info"),
  data(12, "Protem", "icon/github.svg", "https://github.com/devdewa/pt-tpi-book"),
];
