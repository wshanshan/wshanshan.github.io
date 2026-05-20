import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://wshanshan.github.io",
    title: "Tinkering",
    description: "An amazing website about data, model, code and fun projects",
    author: "Shanshan Wang",
    profile: "https://www.linkedin.com/in/wshanshannj",
    lang: "en",
    timezone: "America/New_York",
  },
  posts: {
    perPage: 5,
    perIndex: 5,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: { enabled: false },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/wshanshan" },
    { name: "linkedin", url: "https://www.linkedin.com/in/wshanshannj" },
    { name: "mail",     url: "mailto:wshanshan@gmail.com" },
  ],
  shareLinks: [
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
