export interface Uses {
  icon: string;
  title: string;
  url: string;
}

export const useOperatings = (): Uses[] => {
  const operatings: Uses[] = [
    { icon: "uim:windows", title: "Windows", url: "https://www.microsoft.com/en-us/windows" },
    { icon: "cib:arch-linux", title: "Arch Linux", url: "https://archlinux.org/" },
  ];
  return operatings;
};

export const useWorkstations = (): Uses[] => {
  const workstations: Uses[] = [
    { icon: "ic:round-smartphone", title: "Xiaomi Redmi Note 7 Pro", url: "https://www.gsmarena.com/xiaomi_redmi_note_7-9513.php" },
    { icon: "solar:laptop-outline", title: "Asus A412DA Ryzen 3", url: "https://www.reviewlaptop-id.com/asus-a412da-ek301t-amd-ryzen-3-3200u/" },
    { icon: "tabler:rectangle", title: "Paradox Tarot", url: "https://paradoxgaming.id/produk/fox-mask-tarot/" },
    { icon: "streamline:entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless", title: "HUAWEI FreeBuds SE", url: "https://consumer.huawei.com/en/headphones/freebuds-se/" },
  ];
  return workstations;
};

export const useDatabases = (): Uses[] => {
  const databases: Uses[] = [
    { icon: "tabler:brand-mysql", title: "MySQL", url: "https://www.mysql.com/" },
    { icon: "akar-icons:postgresql-fill", title: "PostgreSQL", url: "https://www.postgresql.org/" },
  ];
  return databases;
};

export const usePackages = (): Uses[] => {
  const packages: Uses[] = [
    { icon: "simple-icons:npm", title: "NPM", url: "https://www.npmjs.com/" },
    { icon: "akar-icons:yarn-fill", title: "Yarn", url: "https://yarnpkg.com/" },
    { icon: "file-icons:pnpm", title: "PNPM", url: "https://pnpm.io/" },
    { icon: "simple-icons:bun", title: "Bun", url: "https://bun.sh/" },
  ];
  return packages;
};

export const useTechstacks = (): Uses[] => {
  const techstacks: Uses[] = [
    { icon: "simple-icons:tailwindcss", title: "TailwindCSS", url: "https://tailwindcss.com/" },
    { icon: "simple-icons:vuedotjs", title: "Vue", url: "https://vuejs.org/" },
    { icon: "simple-icons:nuxtdotjs", title: "Nuxt", url: "https://nuxt.com/" },
    { icon: "file-icons:vite", title: "Vite", url: "https://vitejs.dev/" },
    { icon: "devicon-plain:typescript", title: "TypeScript", url: "https://www.typescriptlang.org/" },
  ];
  return techstacks;
};

export const useDevelopments = (): Uses[] => {
  const developments: Uses[] = [
    { icon: "akar-icons:vscode-fill", title: "VS Code", url: "https://code.visualstudio.com/" },
    { icon: "cib:figma", title: "FIGMA", url: "https://www.figma.com" },
    { icon: "bi:git", title: "Git", url: "https://git-scm.com/" },
    { icon: "simple-icons:alacritty", title: "Alacritty", url: "https://alacritty.org/" },
    { icon: "simple-icons:postman", title: "Postman", url: "https://www.postman.com/" },
    { icon: "simple-icons:firefoxbrowser", title: "Firefox Developer Edition", url: "https://www.mozilla.org/id/firefox/developer/" },
    { icon: "NuxtIcon", title: "Arc", url: "https://arc.net/" },
  ];
  return developments;
};