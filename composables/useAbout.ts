export interface Game {
  src: string;
  title: string;
}

export interface Social {
  icon: string;
  title: string;
  url: string;
}

export const useGame = (): Game[] => {
  const games: Game[] = [
    { src: "wc3.svg", title: "Warcraft III" },
    { src: "minecraft.svg", title: "Minecraft" },
    { src: "dw6.svg", title: "Dynasty Warriors 6" },
    { src: "cs.svg", title: "Counter Strike" },
    { src: "stronghold.svg", title: "Stronghold Crusader" },
    { src: "lfd.svg", title: "Left 4 Dead" },
  ];
  return games;
};

export const useSocial = (): Social[] => {
  const socials: Social[] = [
    { icon: "line-md:twitter-x", title: "Twitter", url: "https://twitter.com/adydetra" },
    { icon: "line-md:mastodon", title: "Mastodon", url: "https://elk.zone/mastodon.social/@adityawarman" },
    { icon: "line-md:instagram", title: "Instagram", url: "https://www.instagram.com/adydetra" },
    { icon: "line-md:github-loop", title: "GitHub", url: "https://github.com/adydetra" },
    { icon: "line-md:discord", title: "Discord", url: "https://discord.gg/9z6APrYMAq" },
    { icon: "line-md:linkedin", title: "LinkedIn", url: "https://linkedin.com/in/adityawarman-dewa-putra" },
  ];
  return socials;
};
