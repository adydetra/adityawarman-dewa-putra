function data(id: number, name: string, title: string, url: string) {
  return {
    id,
    name,
    title,
    to: url,
  };
}

export const social = [
  data(1, "ri:twitter-x-fill", "Twitter", "https://twitter.com/adydetra"),
  data(2, "ri:mastodon-fill", "Mastodon", "https://mastodon.social/@adityawarman"),
  data(3, "ri:instagram-fill", "Instagram", "https://www.instagram.com/adydetra"),
  data(4, "ri:github-fill", "Github", "https://github.com/devdewa"),
  data(5, "ri:discord-fill", "Discord", "https://discord.gg/9z6APrYMAq"),
  data(6, "ri:linkedin-box-fill", "Linkedin", "https://linkedin.com/in/adityawarman-dewa-putra"),
];
