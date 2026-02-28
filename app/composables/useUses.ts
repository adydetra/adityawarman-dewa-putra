export interface Uses {
  icon: string;
  title: string;
  url: string;
  description?: string;
}

export function useOperatings(): Uses[] {
  return [
    { icon: 'mage:microsoft-windows', title: 'Windows', url: 'www.microsoft.com/en-us/windows', description: 'Office PC' },
    { icon: 'cib:arch-linux', title: 'Arch Linux', url: 'archlinux.org', description: 'Personal Laptop' },
  ];
}

export function useWorkstations(): Uses[] {
  return [
    { icon: 'ic:round-smartphone', title: 'Redmi Note 14', url: 'www.gsmarena.com/xiaomi_redmi_note_14_4g_(global)-13616.php', description: 'Smartphone' },
    { icon: 'solar:laptop-outline', title: 'Asus A412DA Ryzen 3', url: 'www.google.com/search?sca_esv=1a19a9bccf6da8da&sxsrf=ADLYWIKTqWm5IzISfS7Kl8PTl4XbpH_-1Q:1725216826704&q=Asus+A412DA+Ryzen+3&udm=2&fbs=AEQNm0CvspUPonaF8UH5s_LBD3JPX4RSeMPt9v8oIaeGMh2T2PRrsfVPlQRxSTpQ4UUI6wdh60Bm53mxaBz4ng0b7PV-YGWOXPAK2E9Fu6maaEHunHtoSjVk3b-j4DUpo16Oa_LVdETsNu_VGLBMmFaNxor7f38b2SzeEgh2In7gbY1o1jZb0CIcwnVDOcoRa1v5_LKsm1fEDd6pfd2A3dGDUASPo0aaxA&sa=X&ved=2ahUKEwj73_bAtaKIAxXsT2cHHQ68KXAQtKgLegQICxAB&biw=1904&bih=1000&dpr=1', description: 'Laptop' },
    { icon: 'ic:baseline-monitor', title: 'Lenovo L24i-30', url: 'psref.lenovo.com/syspool/Sys/PDF/Lenovo_Monitors/Lenovo_L24i_30/Lenovo_L24i_30_Spec.pdf', description: 'Monitor' },
    { icon: 'tabler:rectangle', title: 'Paradox Mask & Tarot', url: 'paradoxgaming.id/produk/fox-mask-tarot', description: 'Mousepad' },
    { icon: 'streamline:entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless', title: 'HUAWEI FreeBuds SE (Gen-1)', url: 'www.antaranews.com/berita/2887133/huawei-freebuds-se-meluncur-di-indonesia', description: 'TWS / Earbuds' },
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
