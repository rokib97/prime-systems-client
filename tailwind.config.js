module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#266CFB",

          secondary: "#828DF8",

          accent: "#F471B5",

          neutral: "#1D283A",

          "base-100": "#FAFAFA",

          info: "#0CA6E9",

          success: "#2BD4BD",

          warning: "#F4C152",

          error: "#FB6F84",
        },
      },
      {
        dark: {
          primary: "#266CFB",

          secondary: "#828DF8",

          accent: "#2ac185",

          neutral: "#131A20",

          "base-100": "#253146",

          info: "#3B83E8",

          success: "#20927D",

          warning: "#BD830F",

          error: "#E5331F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
