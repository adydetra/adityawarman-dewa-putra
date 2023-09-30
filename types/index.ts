function data(id: number, name: string, title: string, url: string) {
  return {
    id,
    name,
    title,
    to: url,
  };
}

export const social = [
  data(1, "line-md:twitter-x", "Twitter", "https://twitter.com/adydetra"),
  data(2, "line-md:mastodon", "Mastodon", "https://mastodon.social/@adityawarman"),
  data(3, "line-md:instagram", "Instagram", "https://www.instagram.com/adydetra"),
  data(4, "line-md:github-loop", "Github", "https://github.com/adydetra"),
  data(5, "line-md:discord", "Discord", "https://discord.gg/9z6APrYMAq"),
  data(6, "line-md:linkedin", "Linkedin", "https://linkedin.com/in/adityawarman-dewa-putra"),
];
