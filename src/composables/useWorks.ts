export interface Works {
  icon: string;
  title: string;
  tech: string;
  ui: string;
  url: string;
}

export function useWorks(): Works[] {
  const works: Works[] = [
    { icon: 'line-md:github-loop', title: 'Personal Site', tech: 'Nuxt', ui: 'TailwindCSS', url: 'github.com/adydetra/adityawarman-dewa-putra' },
    { icon: 'line-md:github-loop', title: 'Old Personal Site', tech: 'HTML', ui: 'Bootstrap', url: 'github.com/adydetra/portfolio' },
    { icon: 'line-md:github-loop', title: 'Dewa Programming', tech: 'Laravel', ui: 'Bootstrap', url: 'github.com/adityawarmandewaputra/dewa-programming' },
    { icon: 'line-md:external-link', title: 'Decorative Plant', tech: 'Laravel Blade', ui: 'Bootstrap', url: 'decorative-plant.vercel.app' },
    { icon: 'line-md:github-loop', title: 'Maritime Explore', tech: 'Laravel Blade', ui: 'Bootstrap', url: 'github.com/adydetra/maritime-explore' },
    { icon: 'line-md:external-link', title: 'Learning Centre Indonesia', tech: 'Laravel Blade', ui: 'Bootstrap', url: 'learningcentreindonesia.com/web' },
    { icon: 'line-md:external-link', title: 'Wangyland', tech: 'Nuxt', ui: 'TailwindCSS', url: 'wangyland.vercel.app' },
    { icon: 'line-md:github-loop', title: 'MP3 / MP4 Downloader', tech: 'Next', ui: 'TailwindCSS', url: 'github.com/adydetra/mp3-mp4-downloader' },
    { icon: 'line-md:github-loop', title: 'E-Commerce LSP', tech: 'PHP', ui: 'Bootstrap', url: 'github.com/adydetra/e-commerce-lsp' },
    { icon: 'line-md:external-link', title: 'Averroes Unipessoal. Lda', tech: 'HTML', ui: 'Bootstrap', url: 'github.com/adydetra/averroes' },
    { icon: 'line-md:external-link', title: 'List Web', tech: 'Nuxt', ui: 'TailwindCSS', url: 'list-web.adydetra.my.id' },
    { icon: 'line-md:external-link', title: 'TPI Admin', tech: 'Vue', ui: 'TailwindCSS', url: 'tpi-admin.vercel.app' },
    { icon: 'line-md:external-link', title: 'Protem', tech: 'Vue', ui: 'TailwindCSS', url: 'tpi-protem.vercel.app' },
    { icon: 'line-md:github-loop', title: 'Nuxt Starter', tech: 'Nuxt', ui: 'TailwindCSS', url: 'github.com/adydetra/nuxt-starter' },
    { icon: 'line-md:github-loop', title: 'Ensik Archieve', tech: 'Nuxt', ui: 'TailwindCSS', url: 'github.com/ose-id/ensik-archieve' },
    { icon: 'line-md:external-link', title: 'D-Notes', tech: 'Nuxt', ui: 'UnoCSS', url: 'd-notes-adydetra.vercel.app' },
    { icon: 'line-md:github-loop', title: 'OSE', tech: 'Nuxt', ui: 'UnoCSS', url: 'github.com/ose-id/ose' },
    { icon: 'line-md:external-link', title: 'Insta', tech: 'Nuxt', ui: 'UnoCSS', url: 'insta.adydetra.my.id' },
    { icon: 'line-md:github-loop', title: 'Nunko', tech: 'Nuxt', ui: 'TailwindCSS', url: 'github.com/adydetra/nunko' },
    { icon: 'line-md:external-link', title: 'Blog', tech: 'Nuxt', ui: 'UnoCSS', url: 'blog.adydetra.my.id' },
    { icon: 'line-md:external-link', title: 'Numon', tech: 'Nuxt', ui: 'UnoCSS', url: 'numon.vercel.app' },
  ];
  return works;
}
