import { defineConfig } from "blume";

export default defineConfig({
  title: "Thai kỳ khỏe mạnh",
  description: "Cẩm nang dành cho bạn: Thai kỳ khỏe mạnh. Ấn bản thứ 12 • Bản dịch tiếng Việt từ Cleveland Clinic.",

  // Theme styling based on the user's requested Medical Teal style
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

  content: {
    root: "docs",
  },

  deployment: {
    output: "static",
  },
});
