export interface Works {
  icon: string
  title: string
  tech: string
  url: string
}

export function useWorks(): Works[] {
  const works: Works[] = [
    { icon: 'line-md:github-loop', title: 'Personal Site', tech: 'Nuxt', url: 'github.com/adydetra/adityawarman-dewa-putra' },
    { icon: 'line-md:github-loop', title: 'Old Personal Site', tech: 'HTML', url: 'github.com/adydetra/portfolio' },
    { icon: 'line-md:github-loop', title: 'Dewa Programming', tech: 'Laravel', url: 'github.com/adityawarmandewaputra/dewa-programming' },
    { icon: 'line-md:external-link', title: 'Decorative Plant', tech: 'Laravel Blade', url: 'decorative-plant.vercel.app' },
    { icon: 'line-md:github-loop', title: 'Maritime Explore', tech: 'Laravel Blade', url: 'github.com/adydetra/maritime-explore' },
    { icon: 'line-md:external-link', title: 'Learning Centre Indonesia', tech: 'Laravel Blade', url: 'learningcentreindonesia.com/web' },
    { icon: 'line-md:external-link', title: 'Wangyland', tech: 'Nuxt', url: 'wangyland.vercel.app' },
    { icon: 'line-md:github-loop', title: 'Bang CV', tech: 'Next', url: 'github.com/adydetra/bangcv' },
    { icon: 'line-md:github-loop', title: 'MP3 / MP4 Downloader', tech: 'Next', url: 'github.com/adydetra/mp3-mp4-downloader' },
    { icon: 'line-md:github-loop', title: 'E-Commerce LSP', tech: 'PHP', url: 'github.com/adydetra/e-commerce-lsp' },
    { icon: 'line-md:github-loop', title: 'Belajar HTML App', tech: 'Expo', url: 'github.com/adydetra/expo-belajar-html-app' },
    { icon: 'line-md:external-link', title: 'Averroes Unipessoal. Lda', tech: 'HTML', url: 'www.averroes.info' },
    { icon: 'line-md:external-link', title: 'List Web', tech: 'Nuxt', url: 'list-web.adydetra.my.id' },
    { icon: 'line-md:external-link', title: 'TPI Admin', tech: 'Vue', url: 'tpi-admin.vercel.app' },
    { icon: 'line-md:external-link', title: 'Protem', tech: 'Vue', url: 'tpi-protem.vercel.app' },
    { icon: 'line-md:github-loop', title: 'Nuxt Starter', tech: 'Nuxt', url: 'github.com/adydetra/nuxt-starter' },
    { icon: 'line-md:github-loop', title: 'Ensik Archieve', tech: 'Nuxt', url: 'github.com/ose-id/ensik-archieve' },
    { icon: 'line-md:external-link', title: 'D-Notes', tech: 'Nuxt', url: 'd-notes-adydetra.vercel.app' },
    { icon: 'line-md:github-loop', title: 'OSE', tech: 'Astro', url: 'github.com/ose-id/ose' },
    { icon: 'line-md:external-link', title: 'Insta', tech: 'Nuxt', url: 'insta.adydetra.my.id' },
    { icon: 'line-md:github-loop', title: 'Nunko', tech: 'Nuxt', url: 'github.com/adydetra/nunko' },
    { icon: 'line-md:external-link', title: 'Blog', tech: 'Nuxt', url: 'blog.adydetra.my.id' },
  ];
  return works;
}
