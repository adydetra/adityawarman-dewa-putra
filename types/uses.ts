function dt(id: number, name: string, title: string, url: string) {
  return {
    id,
    name,
    title,
    to: url,
  };
}

export const workstations = [
  dt(1, "ic:round-smartphone", "Xiaomi Redmi Note 7 Pro", "https://www.gsmarena.com/xiaomi_redmi_note_7-9513.php"),
  dt(2, "solar:laptop-outline", "Asus A412DA Ryzen 3", "https://www.reviewlaptop-id.com/asus-a412da-ek301t-amd-ryzen-3-3200u/"),
  dt(3, "streamline:entertainment-earpods-airpods-audio-earpods-music-earbuds-true-wireless", "HUAWEI FreeBuds SE", "https://consumer.huawei.com/id/headphones/freebuds-se/")
];

export const operatings = [
  dt(1, "uim:android", "Android", "https://www.android.com/intl/id_id/"),
  dt(2, "uim:windows", "Windows", "https://www.microsoft.com/en-us/windows"),
  dt(3, "cib:arch-linux", "Arch Linux", "https://archlinux.org/"),
];

export const databases = [
  dt(1, "tabler:brand-mysql", "MySQL", "https://www.mysql.com/"),
  dt(2, "akar-icons:postgresql-fill", "PostgreSQL", "https://www.postgresql.org/"),
];

export const developments = [
  dt(1, "akar-icons:vscode-fill", "VS Code", "https://code.visualstudio.com/"),
  dt(2, "solar:figma-bold-duotone", "FIGMA", "https://www.figma.com"),
  dt(3, "simple-icons:androidstudio", "Android Studio", "https://developer.android.com/studio"),
  dt(4, "simple-icons:alacritty", "Alacritty", "https://alacritty.org/"),
  dt(5, "mdi:git", "Git", "https://git-scm.com/"),
  dt(6, "simple-icons:postman", "Postman", "https://www.postman.com/"),
  dt(7, "simple-icons:xampp", "XAMPP", "https://www.apachefriends.org/download.html"),
  dt(8, "mdi:firefox", "Firefox", "https://www.mozilla.org/id/firefox/new/"),
];

export const packages = [dt(1, "simple-icons:npm", "NPM", "https://www.npmjs.com/"), dt(2, "akar-icons:yarn-fill", "Yarn", "https://yarnpkg.com/")];

export const backends = [dt(1, "akar-icons:php-fill", "PHP", "https://www.php.net/"), dt(2, "mdi:laravel", "Laravel", "https://laravel.com/")];

export const frontends = [
  dt(1, "simple-icons:tailwindcss", "Tailwind CSS", "https://tailwindcss.com/"),
  dt(2, "ri:bootstrap-fill", "Bootstrap", "https://getbootstrap.com/"),
  dt(3, "akar-icons:jquery-fill", "jQuery", "https://jquery.com/"),
  dt(4, "simple-icons:vuedotjs", "Vue Js", "https://vuejs.org/"),
  dt(5, "simple-icons:nuxtdotjs", "Nuxt", "https://nuxt.com/"),
  dt(6, "file-icons:vite", "Vite Js", "https://vitejs.dev/"),
  dt(7, "simple-icons:expo", "Expo", "https://expo.dev/"),
];
