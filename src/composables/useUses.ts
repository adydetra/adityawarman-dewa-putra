export interface Uses {
  icon: string;
  title: string;
  url: string;
}

export function useOperatings(): Uses[] {
  const operatings: Uses[] = [
    { icon: 'uim:windows', title: 'Windows', url: 'www.microsoft.com/en-us/windows' },
    { icon: 'cib:arch-linux', title: 'Arch Linux', url: 'archlinux.org' },
  ];
  return operatings;
}

export function useWorkstations(): Uses[] {
  const workstations: Uses[] = [
    { icon: 'ic:round-smartphone', title: 'Xiaomi Redmi Note 7 Pro', url: 'www.gsmarena.com/xiaomi_redmi_note_7-9513.php' },
    { icon: 'solar:laptop-outline', title: 'Asus A412DA Ryzen 3', url: 'www.reviewlaptop-id.com/asus-a412da-ek301t-amd-ryzen-3-3200u' },
    { icon: 'tabler:rectangle', title: 'Paradox Tarot', url: 'paradoxgaming.id/produk/fox-mask-tarot' },
    { icon: 'streamline:entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless', title: 'HUAWEI FreeBuds SE', url: 'consumer.huawei.com/en/headphones/freebuds-se' },
  ];
  return workstations;
}

export function useDatabases(): Uses[] {
  const databases: Uses[] = [
    { icon: 'tabler:brand-mysql', title: 'MySQL', url: 'www.mysql.com' },
    { icon: 'akar-icons:postgresql-fill', title: 'PostgreSQL', url: 'www.postgresql.org' },
  ];
  return databases;
}

export function usePackages(): Uses[] {
  const packages: Uses[] = [
    { icon: 'simple-icons:npm', title: 'NPM', url: 'www.npmjs.com' },
    { icon: 'akar-icons:yarn-fill', title: 'Yarn', url: 'yarnpkg.com' },
    { icon: 'file-icons:pnpm', title: 'PNPM', url: 'pnpm.io' },
    { icon: 'simple-icons:bun', title: 'Bun', url: 'bun.sh' },
  ];
  return packages;
}

export function useTechstacks(): Uses[] {
  const techstacks: Uses[] = [
    { icon: 'simple-icons:tailwindcss', title: 'TailwindCSS (UI)', url: 'tailwindcss.com' },
    { icon: 'simple-icons:unocss', title: 'UnoCSS (UI)', url: 'unocss.dev' },
    { icon: 'simple-icons:vuedotjs', title: 'Vue (JS Framework)', url: 'vuejs.org' },
    { icon: 'simple-icons:nuxtdotjs', title: 'Nuxt (Vue Framework)', url: 'nuxt.com' },
    { icon: 'file-icons:vite', title: 'Vite (Frontend Tooling)', url: 'vitejs.dev' },
    { icon: 'devicon-plain:vitest', title: 'Vitest (Testing)', url: 'vitest.dev' },
    { icon: 'devicon-plain:typescript', title: 'TypeScript (Language)', url: 'www.typescriptlang.org' },
  ];
  return techstacks;
}

export function useDevelopments(): Uses[] {
  const developments: Uses[] = [
    { icon: 'akar-icons:vscode-fill', title: 'VS Code', url: 'code.visualstudio.com' },
    { icon: 'cib:figma', title: 'FIGMA', url: 'www.figma.com' },
    { icon: 'bi:git', title: 'Git', url: 'git-scm.com' },
    { icon: 'simple-icons:alacritty', title: 'Alacritty', url: 'alacritty.org' },
    { icon: 'simple-icons:postman', title: 'Postman', url: 'www.postman.com' },
    { icon: 'simple-icons:firefoxbrowser', title: 'Firefox Developer Edition', url: 'www.mozilla.org/id/firefox/developer' },
    { icon: 'NuxtIcon', title: 'Arc', url: 'arc.net' },
  ];
  return developments;
}
