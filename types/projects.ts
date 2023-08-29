function dt(id: number, title: string, src: string, url: string) {
  return {
    id,
    title,
    src,
    to: url,
  };
}

export const projects = [
  dt(1, "Portfolio", "icon/hero-mobile.webp", "https://github.com/devdewa/adityawarman-dewa-putra"),
  dt(2, "Old Portfolio", "icon/old-portfolio.png", "https://dewaprogramming.vercel.app"),
  dt(3, "DewaProgramming", "icon/dewaprogramming.png", "https://github.com/DewaSmkn1JAKARTA/DewaProgramming"),
  dt(4, "Decorative Plant", "icon/decorative-plant.svg", "https://decorative-plant.vercel.app"),
  dt(5, "Learning Centre Indonesia", "icon/lci.svg", "https://learningcentreindonesia.com/web"),
  dt(6, "Wangyland", "icon/wangyland.png", "https://wangyland.vercel.app"),
  dt(7, "Bang CV", "icon/bangcv.webp", "https://github.com/devdewa/bangcv"),
  dt(8, "MP3 / MP4 Downloader", "icon/github.svg", "https://dewa-downloader.vercel.app"),
  dt(9, "E-Commerce LSP", "icon/lsp.webp", "https://github.com/devdewa/E-Commerce-LSP"),
  dt(10, "Belajar HTML App", "icon/expo.svg", "https://github.com/devdewa/expo-belajar-html-app"),
  dt(11, "Averroes Unipessoal. Lda", "icon/averroes.png", "https://www.averroes.info"),
  dt(12, "Protem", "icon/github.svg", "https://github.com/devdewa/pt-tpi-book"),
];
