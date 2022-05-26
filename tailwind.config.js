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

          // "base-100": "#0F1729",
          "base-100": "#FAFAFA",

          info: "#0CA6E9",

          success: "#2BD4BD",

          warning: "#F4C152",

          error: "#FB6F84",
        },
      },
      {
        dark: {
          primary: "#3ABFF8",

          secondary: "#828DF8",

          accent: "#F471B5",

          neutral: "#1D283A",

          // "base-100": "#0F1729",
          "base-100": "#253146",

          // "base-100": "#31475E",
          // "base-100": "#2D3649",
          // "base-100": "#322E42",

          // "base-100": "#31363A",

          info: "#0CA6E9",

          success: "#2BD4BD",

          warning: "#F4C152",

          error: "#FB6F84",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
