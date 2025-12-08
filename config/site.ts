export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI Boilerplate",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Docs",
      href: "/docs",
    },
  ],

  links: {
    github: "https://github.com/handi7/next-heroui-boilerplate",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
