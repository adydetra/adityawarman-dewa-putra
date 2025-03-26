export interface Uses {
  icon: string;
  title: string;
  url: string;
}

export function useOperatings(): Uses[] {
  return [
    { icon: 'uim:windows', title: 'Windows', url: 'www.microsoft.com/en-us/windows' },
    { icon: 'cib:arch-linux', title: 'Arch Linux', url: 'archlinux.org' },
  ];
}

export function useWorkstations(): Uses[] {
  return [
    { icon: 'ic:round-smartphone', title: 'Xiaomi Redmi Note 7 Pro', url: 'www.gsmarena.com/xiaomi_redmi_note_7-9513.php' },
    { icon: 'solar:laptop-outline', title: 'Asus A412DA Ryzen 3', url: 'www.google.com/search?sca_esv=1a19a9bccf6da8da&sxsrf=ADLYWIKTqWm5IzISfS7Kl8PTl4XbpH_-1Q:1725216826704&q=Asus+A412DA+Ryzen+3&udm=2&fbs=AEQNm0CvspUPonaF8UH5s_LBD3JPX4RSeMPt9v8oIaeGMh2T2PRrsfVPlQRxSTpQ4UUI6wdh60Bm53mxaBz4ng0b7PV-YGWOXPAK2E9Fu6maaEHunHtoSjVk3b-j4DUpo16Oa_LVdETsNu_VGLBMmFaNxor7f38b2SzeEgh2In7gbY1o1jZb0CIcwnVDOcoRa1v5_LKsm1fEDd6pfd2A3dGDUASPo0aaxA&sa=X&ved=2ahUKEwj73_bAtaKIAxXsT2cHHQ68KXAQtKgLegQICxAB&biw=1904&bih=1000&dpr=1' },
    { icon: 'ic:baseline-monitor', title: 'Lenovo L24i-30', url: 'psref.lenovo.com/syspool/Sys/PDF/Lenovo_Monitors/Lenovo_L24i_30/Lenovo_L24i_30_Spec.pdf' },
    { icon: 'tabler:rectangle', title: 'Paradox Mask & Tarot', url: 'paradoxgaming.id/produk/fox-mask-tarot' },
    { icon: 'streamline:entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless', title: 'HUAWEI FreeBuds SE', url: 'consumer.huawei.com/en/headphones/freebuds-se' },
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
    { icon: 'file-icons:pnpm', title: 'pnpm', url: 'pnpm.io' },
    { icon: 'simple-icons:bun', title: 'Bun', url: 'bun.sh' },
  ];
}

export function useTechstacks(): Uses[] {
  return [
    { icon: 'devicon-plain:typescript', title: 'TypeScript (Language)', url: 'www.typescriptlang.org' },
    { icon: 'simple-icons:python', title: 'Python (Language)', url: 'python.org' },
    { icon: 'simple-icons:react', title: 'React (JS Library)', url: 'react.dev' },
    { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt (Vue Framework)', url: 'nuxt.com' },
    { icon: 'tabler:brand-threejs', title: 'Threejs (3D, JS Based)', url: 'threejs.org' },
    { icon: 'simple-icons:tailwindcss', title: 'TailwindCSS (UI)', url: 'tailwindcss.com' },
    { icon: 'simple-icons:unocss', title: 'UnoCSS (UI)', url: 'unocss.dev' },
  ];
}

export function useDevelopments(): Uses[] {
  return [
    { icon: 'akar-icons:vscode-fill', title: 'VS Code', url: 'code.visualstudio.com' },
    { icon: 'cib:figma', title: 'FIGMA', url: 'www.figma.com' },
    { icon: 'bi:git', title: 'Git', url: 'git-scm.com' },
    { icon: 'simple-icons:alacritty', title: 'Alacritty', url: 'alacritty.org' },
    { icon: 'simple-icons:postman', title: 'Postman', url: 'www.postman.com' },
    { icon: 'ArcIcon', title: 'Arc', url: 'arc.net' },
    { icon: 'ZenIcon', title: 'Zen Browser', url: 'www.zen-browser.app' },
    { icon: 'devicon-plain:putty', title: 'PuTTY', url: 'www.putty.org' },
  ];
}
