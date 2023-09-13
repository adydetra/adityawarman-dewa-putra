export default defineNuxtRouteMiddleware(() => {
  const route = useRoute();
  useSeoMeta({
    title: () => (route.meta.title as string) || "",
    titleTemplate: (title) => (title ? `${title} - Dewa` : "Adityawarman Dewa Putra"),
    description: "This is my personal site, build using Nuxt Js",
  });
});
