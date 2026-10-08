import { defineConfig } from "blume";

export default defineConfig({
  title: "Thai kỳ khỏe mạnh",
  description: "Cẩm nang dành cho bạn: Thai kỳ khỏe mạnh. Ấn bản thứ 12 từ Cleveland Clinic.",

  feedback: false,

  github: {
    owner: "MedPocket",
    repo: "healthy-pregnancy",
    branch: "main",
  },

  i18n: {
    defaultLocale: "vi",
    locales: [{ code: "vi", label: "Tiếng Việt" }],
    hideDefaultLocalePrefix: true,
  },

  seo: {
    og: {
      site: false,
      logo: false,
    },
  },

  theme: {
    accent: "teal",
    radius: "md",
    mode: "light",
    fonts: {
      body: "inter",
      display: "inter",
    },
  },

  markdown: {
    externalLinks: true,
  },

  deployment: {
    base: process.env.NETLIFY === "true" ? "/" : "/healthy-pregnancy",
  },
});
