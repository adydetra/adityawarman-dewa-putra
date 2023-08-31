function data(id: number, name: string, title: string, url: string) {
  return {
    id,
    name,
    title,
    to: url,
  };
}

export const workstations = [
  data(1, "ic:round-smartphone", "Xiaomi Redmi Note 7 Pro", "https://www.gsmarena.com/xiaomi_redmi_note_7-9513.php"),
  data(2, "solar:laptop-outline", "Asus A412DA Ryzen 3", "https://www.reviewlaptop-id.com/asus-a412da-ek301t-amd-ryzen-3-3200u/"),
  data(3, "tabler:rectangle", "Paradox Tarot", "https://paradoxgaming.id/produk/fox-mask-tarot/"),
  data(4, "streamline:entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless", "HUAWEI FreeBuds SE", "https://consumer.huawei.com/id/headphones/freebuds-se/"),
];

export const operatings = [
  data(1, "uim:android", "Android", "https://www.android.com/intl/id_id/"),
  data(2, "uim:windows", "Windows", "https://www.microsoft.com/en-us/windows"),
  data(3, "cib:arch-linux", "Arch Linux", "https://archlinux.org/"),
];

export const databases = [
  data(1, "tabler:brand-mysql", "MySQL", "https://www.mysql.com/"),
  data(2, "akar-icons:postgresql-fill", "PostgreSQL", "https://www.postgresql.org/"),
];

export const developments = [
  data(1, "akar-icons:vscode-fill", "VS Code", "https://code.visualstudio.com/"),
  data(2, "solar:figma-bold-duotone", "FIGMA", "https://www.figma.com"),
  data(3, "simple-icons:androidstudio", "Android Studio", "https://developer.android.com/studio"),
  data(4, "simple-icons:alacritty", "Alacritty", "https://alacritty.org/"),
  data(5, "mdi:git", "Git", "https://git-scm.com/"),
  data(6, "simple-icons:postman", "Postman", "https://www.postman.com/"),
  data(7, "simple-icons:xampp", "XAMPP", "https://www.apachefriends.org/download.html"),
  data(8, "mdi:firefox", "Firefox", "https://www.mozilla.org/id/firefox/new/"),
];

export const packages = [data(1, "simple-icons:npm", "NPM", "https://www.npmjs.com/"), data(2, "akar-icons:yarn-fill", "Yarn", "https://yarnpkg.com/")];

export const backends = [data(1, "akar-icons:php-fill", "PHP", "https://www.php.net/"), data(2, "mdi:laravel", "Laravel", "https://laravel.com/")];

export const frontends = [
  data(1, "simple-icons:tailwindcss", "Tailwind CSS", "https://tailwindcss.com/"),
  data(2, "ri:bootstrap-fill", "Bootstrap", "https://getbootstrap.com/"),
  data(3, "akar-icons:jquery-fill", "jQuery", "https://jquery.com/"),
  data(4, "simple-icons:vuedotjs", "Vue Js", "https://vuejs.org/"),
  data(5, "simple-icons:nuxtdotjs", "Nuxt", "https://nuxt.com/"),
  data(6, "file-icons:vite", "Vite Js", "https://vitejs.dev/"),
  data(7, "simple-icons:expo", "Expo", "https://expo.dev/"),
];
