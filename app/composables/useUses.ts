export interface Uses {
  icon: string;
  title: string;
  url: string;
}

export function useOperatings(): Uses[] {
  return [
    { icon: 'mage:microsoft-windows', title: 'Windows', url: 'www.microsoft.com/en-us/windows' },
    { icon: 'cib:arch-linux', title: 'Arch Linux', url: 'archlinux.org' },
  ];
}

export function useWorkstations(): Uses[] {
  return [
    { icon: 'ic:round-smartphone', title: 'Redmi Note 14', url: 'www.gsmarena.com/xiaomi_redmi_note_14_4g_(global)-13616.php' },
    { icon: 'solar:laptop-outline', title: 'Asus A412DA Ryzen 3', url: 'www.google.com/search?sca_esv=1a19a9bccf6da8da&sxsrf=ADLYWIKTqWm5IzISfS7Kl8PTl4XbpH_-1Q:1725216826704&q=Asus+A412DA+Ryzen+3&udm=2&fbs=AEQNm0CvspUPonaF8UH5s_LBD3JPX4RSeMPt9v8oIaeGMh2T2PRrsfVPlQRxSTpQ4UUI6wdh60Bm53mxaBz4ng0b7PV-YGWOXPAK2E9Fu6maaEHunHtoSjVk3b-j4DUpo16Oa_LVdETsNu_VGLBMmFaNxor7f38b2SzeEgh2In7gbY1o1jZb0CIcwnVDOcoRa1v5_LKsm1fEDd6pfd2A3dGDUASPo0aaxA&sa=X&ved=2ahUKEwj73_bAtaKIAxXsT2cHHQ68KXAQtKgLegQICxAB&biw=1904&bih=1000&dpr=1' },
    { icon: 'ic:baseline-monitor', title: 'Lenovo L24i-30', url: 'psref.lenovo.com/syspool/Sys/PDF/Lenovo_Monitors/Lenovo_L24i_30/Lenovo_L24i_30_Spec.pdf' },
    { icon: 'tabler:rectangle', title: 'Paradox Mask & Tarot', url: 'paradoxgaming.id/produk/fox-mask-tarot' },
    { icon: 'streamline:entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless', title: 'HUAWEI FreeBuds SE (Gen-1)', url: 'www.antaranews.com/berita/2887133/huawei-freebuds-se-meluncur-di-indonesia' },
  ];
}

export function useDatabases(): Uses[] {
  return [
    { icon: 'tabler:brand-mysql', title: 'MySQL', url: 'www.mysql.com' },
    { icon: 'akar-icons:postgresql-fill', title: 'PostgreSQL', url: 'www.postgresql.org' },
  ];
}

export function usePackages(): Uses[] {
  return [
    { icon: 'simple-icons:npm', title: 'npm', url: 'www.npmjs.com' },
    { icon: 'simple-icons:bun', title: 'Bun', url: 'bun.sh' },
  ];
}

export function useTechstacks(): Uses[] {
  return [
    { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt (Vue Framework)', url: 'nuxt.com' },
    { icon: 'simple-icons:vuedotjs', title: 'Vue (Framework)', url: 'vuejs.org' },
    { icon: 'simple-icons:react', title: 'React (Library)', url: 'react.dev' },
    { icon: 'simple-icons:electron', title: 'Electron (Desktop)', url: 'electronjs.org' },
    { icon: 'simple-icons:python', title: 'Python (Language)', url: 'python.org' },
    { icon: 'simple-icons:tailwindcss', title: 'TailwindCSS (UI)', url: 'tailwindcss.com' },
    { icon: 'simple-icons:astro', title: 'Astro (Framework for content-driven)', url: 'astro.build' },
  ];
}

export function useDevelopments(): Uses[] {
  return [
    { icon: 'akar-icons:vscode-fill', title: 'VS Code', url: 'code.visualstudio.com' },
    { icon: 'cib:figma', title: 'FIGMA', url: 'www.figma.com' },
    { icon: 'bi:git', title: 'Git', url: 'git-scm.com' },
    { icon: 'simple-icons:alacritty', title: 'Alacritty', url: 'alacritty.org' },
    { icon: 'simple-icons:androidstudio', title: 'Android Studio', url: 'developer.android.com/studio' },
    { icon: 'simple-icons:windsurf', title: 'Windsurf', url: 'windsurf.com' },
    { icon: 'simple-icons:zenbrowser', title: 'Zen Browser', url: 'www.zen-browser.app' },
    { icon: 'simple-icons:laragon', title: 'Laragon', url: 'laragon.org' },
  ];
}
