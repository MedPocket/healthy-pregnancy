import { defineConfig } from "blume";

export default defineConfig({
  title: "Thai kỳ khỏe mạnh",
  description:
    "Cẩm nang dành cho bạn: Thai kỳ khỏe mạnh. Ấn bản thứ 12 • Bản dịch tiếng Việt từ Cleveland Clinic.",

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

  theme: {
    accent: "teal",
    radius: "md",
    mode: "light", // default to light mode to resemble the PDF book style
    fonts: {
      display: "inter-tight",
      body: "inter",
      mono: "ibm-plex-mono",
    },
  },

  seo: {
    og: {
      fonts: ["Geist"],
    },
  },

  content: {
    root: "docs",
  },

  deployment: {
    output: "static",
    site:
      process.env.NETLIFY === "true"
        ? process.env.URL || "https://healthy-pregnancy.netlify.app"
        : "https://medpocket.github.io",
    base: process.env.NETLIFY === "true" ? "/" : "/healthy-pregnancy",
  },
});
