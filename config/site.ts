export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "After 8",
  description:
    "Beautifully designed components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      hrif: "/about",
    },
    {
      title: "Song List",
      href: "/songs",
    },
    {
      title: "Upcoming Shows",
      href: "/shows",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    docs: "https://ui.shadcn.com",
  },
}
