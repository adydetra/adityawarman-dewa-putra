function data(id: number, name: string, title: string, url: string) {
  return {
    id,
    name,
    title,
    to: url,
  };
}

export const operatings = [data(1, "uim:windows", "Windows", "https://www.microsoft.com/en-us/windows"), data(2, "cib:arch-linux", "Arch Linux", "https://archlinux.org/")];

export const workstations = [
  data(1, "ic:round-smartphone", "Xiaomi Redmi Note 7 Pro", "https://www.gsmarena.com/xiaomi_redmi_note_7-9513.php"),
  data(2, "solar:laptop-outline", "Asus A412DA Ryzen 3", "https://www.reviewlaptop-id.com/asus-a412da-ek301t-amd-ryzen-3-3200u/"),
  data(3, "tabler:rectangle", "Paradox Tarot", "https://paradoxgaming.id/produk/fox-mask-tarot/"),
  data(
    4,
    "streamline:entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless",
    "HUAWEI FreeBuds SE",
    "https://consumer.huawei.com/id/headphones/freebuds-se/"
  ),
];

export const databases = [
  data(1, "tabler:brand-mysql", "MySQL", "https://www.mysql.com/"),
  data(2, "akar-icons:postgresql-fill", "PostgreSQL", "https://www.postgresql.org/"),
];

export const packages = [
  data(1, "simple-icons:npm", "NPM", "https://www.npmjs.com/"),
  data(2, "akar-icons:yarn-fill", "Yarn", "https://yarnpkg.com/"),
  data(3, "simple-icons:bun", "Bun", "https://bun.sh/"),
];

export const techstacks = [
  data(1, "simple-icons:tailwindcss", "Tailwind CSS", "https://tailwindcss.com/"),
  data(2, "ri:bootstrap-fill", "Bootstrap", "https://getbootstrap.com/"),
  data(3, "simple-icons:vuedotjs", "Vue Js", "https://vuejs.org/"),
  data(4, "simple-icons:nuxtdotjs", "Nuxt", "https://nuxt.com/"),
  data(5, "file-icons:vite", "Vite Js", "https://vitejs.dev/"),
  data(6, "simple-icons:expo", "Expo", "https://expo.dev/"),
];

export const developments = [
  data(1, "akar-icons:vscode-fill", "VS Code", "https://code.visualstudio.com/"),
  data(2, "cib:figma", "FIGMA", "https://www.figma.com"),
  data(3, "simple-icons:androidstudio", "Android Studio", "https://developer.android.com/studio"),
  data(4, "simple-icons:alacritty", "Alacritty", "https://alacritty.org/"),
  data(5, "bi:git", "Git", "https://git-scm.com/"),
  data(6, "simple-icons:postman", "Postman", "https://www.postman.com/"),
  data(7, "simple-icons:firefoxbrowser", "Firefox Developer Edition", "https://www.mozilla.org/id/firefox/developer/"),
];
