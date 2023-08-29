function dt(id: number, name: string, title: string, url: string) {
  return {
    id,
    name,
    title,
    to: url,
  };
}

export const social = [
  dt(1, "line-md:twitter-x", "Twitter", "https://twitter.com/adydetra"),
  dt(2, "line-md:mastodon", "Mastodon", "https://mastodon.social/@adityawarman"),
  dt(3, "line-md:github-loop", "Github", "https://github.com/devdewa"),
  dt(4, "line-md:discord", "Discord", "https://discord.gg/9z6APrYMAq"),
  dt(5, "line-md:email", "Email", "mailto:devdewa123.sp@gmail.com"),
  dt(6, "line-md:instagram", "Instagram", "https://www.instagram.com/adydetra"),
];
