/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      transparent: "transparent",
      background: "#0e1217",
      "scroll-background-one": "#0c0f14",
      "scroll-background": "hsla(0, 0%, 86.7%, 0)",
      "white-color": "#fff",
      "button-color": "#151618",
      "body-text": "#a9abb3",
      pink: "#d74cf6",
      "blue-ish": "#208bff",
      "gradient-red": "#f5005e",
      "gradient-blue": "#4801f5",
      green: "#00f576",
      "border-color": "#525866",
      "tag-background": "rgba(255,255,255,.04)",
    },
    screens: {
      xxsm: "325px",
      xsm: "480px", //extra small mobile
      sm: "640px", // small - tablet
      md: "1024px", //medium - laptop
      lg: "1280px", //large - desktop
    },
    extend: {},
  },
  plugins: [],
};
