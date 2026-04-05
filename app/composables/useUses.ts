export interface Uses {
  icon: string;
  title: string;
  url: string;
  description?: string | string[];
}

export function useOperatings(): Uses[] {
  return [
    { icon: 'mage:microsoft-windows', title: 'Windows', url: 'www.microsoft.com/en-us/windows', description: 'Office PC + HP Victus 15' },
    { icon: 'cib:arch-linux', title: 'Arch Linux', url: 'archlinux.org', description: 'Asus Vivobook Ultra A412DA' },
  ];
}

export function useWorkstations(): Uses[] {
  return [
    { icon: 'ic:round-smartphone', title: 'Redmi Note 14', url: 'www.gsmarena.com/xiaomi_redmi_note_14_4g_(global)-13616.php', description: 'Smartphone' },
    {
      icon: 'solar:laptop-outline',
      title: 'HP Victus 15',
      url: 'www.google.com/search?client=firefox-b-d&hs=YXep&sca_esv=c886fa4b6d8c3132&sxsrf=ANbL-n7HOvSOmpArGNXscSOQF6dpgWFC3w:1775399237594&udm=2&fbs=ADc_l-ZYJee2O_fivKcZsJOmE8SMlKSfU_NRjTpwJysXuPPDBuqxEqoWhc67V2wA5GSJzrqf_nwNjwkDe7a0iBvotnRzAXBPxVyTQS50to1qdtZaKRoF_cw1TcJdtdT__WT0rzMtt7qtXJkdvor4xIamY1zNyjnqiwHLZtUfPdei37uBZ53BRUAPhICBpG52ak4-GahTeDOFNJ2bx-FFCYfaACqkHCwDlA&q=hp+victus+15&sa=X&ved=2ahUKEwjyspDH9daTAxUPzTgGHe8lNyEQtKgLegQIFhAB&biw=1852&bih=986',
      description: [
        'Intel Core i7-12700H',
        'NVIDIA GeForce RTX 3050',
        '32GB RAM',
        '1TB NVMe Gen 4 XPG S70 Blade',
      ],
    },
    {
      icon: 'solar:laptop-outline',
      title: 'Asus Vivobook Ultra A412DA',
      url: 'www.google.com/search?q=Asus+A412DA+Ryzen+3',
      description: [
        'AMD Ryzen 3 3200U',
        'Radeon Vega 3',
        '12GB RAM',
        '256GB NVMe Gen 3 + 1TB HDD',
      ],
    },
    { icon: 'ic:baseline-monitor', title: 'Lenovo L24i-30', url: 'psref.lenovo.com/syspool/Sys/PDF/Lenovo_Monitors/Lenovo_L24i_30/Lenovo_L24i_30_Spec.pdf', description: 'Monitor' },
    { icon: 'tabler:rectangle', title: 'Paradox Mask & Tarot', url: 'paradoxgaming.id/produk/fox-mask-tarot', description: 'Mousepad' },
    { icon: 'streamline:entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless', title: 'HUAWEI FreeBuds SE (Gen-1)', url: 'www.antaranews.com/berita/2887133/huawei-freebuds-se-meluncur-di-indonesia', description: 'TWS / Earbuds' },
    { icon: 'streamline:entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless', title: 'Soundcore R50i', url: 'www.soundcore.com/products/r50i-a3949', description: 'TWS / Earbuds' },
  ];
}

export function useDatabases(): Uses[] {
  return [
    { icon: 'tabler:brand-mysql', title: 'MySQL', url: 'www.mysql.com', description: 'Relational Database' },
    { icon: 'akar-icons:postgresql-fill', title: 'PostgreSQL', url: 'www.postgresql.org', description: 'Relational Database' },
  ];
}

export function useDevelopments(): Uses[] {
  return [
    { icon: 'material-symbols:antigravity', title: 'Antigravity', url: 'antigravity.google', description: 'Code Editor Agent' },
    { icon: 'cib:figma', title: 'FIGMA', url: 'www.figma.com', description: 'Design Tool' },
    { icon: 'bi:git', title: 'Git', url: 'git-scm.com', description: 'Terminal & Version Control' },
    { icon: 'simple-icons:alacritty', title: 'Alacritty', url: 'alacritty.org', description: 'Terminal' },
    { icon: 'simple-icons:androidstudio', title: 'Android Studio', url: 'developer.android.com/studio', description: 'Android IDE' },
    { icon: 'simple-icons:zenbrowser', title: 'Zen Browser', url: 'www.zen-browser.app', description: 'Web Browser' },
    { icon: 'simple-icons:laragon', title: 'Laragon', url: 'laragon.org', description: 'Development Environment' },
  ];
}

export function useTechstacks(): Uses[] {
  return [
    { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt', url: 'nuxt.com', description: 'Vue Framework' },
    { icon: 'simple-icons:vuedotjs', title: 'Vue', url: 'vuejs.org', description: 'Framework' },
    { icon: 'simple-icons:react', title: 'React', url: 'react.dev', description: 'Library' },
    { icon: 'file-icons:electron', title: 'Electron', url: 'electronjs.org', description: 'Desktop Framework' },
    { icon: 'simple-icons:astro', title: 'Astro', url: 'astro.build', description: 'Content-driven Framework' },
    { icon: 'simple-icons:python', title: 'Python', url: 'python.org', description: 'Programming Language' },
    { icon: 'simple-icons:tailwindcss', title: 'TailwindCSS', url: 'tailwindcss.com', description: 'CSS Framework' },
    { icon: 'simple-icons:hono', title: 'Hono', url: 'hono.dev', description: 'Backend Framework' },
    { icon: 'simple-icons:bun', title: 'Bun', url: 'bun.sh', description: 'Runtime & Package Manager' },
  ];
}
