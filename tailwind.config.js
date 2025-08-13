/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js,ts,jsx,tsx}",
    "./projects/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkgunmetal: "#192230",
        arsenic: "#3d474e",
        canary: "#ffed00",
        gunmetal: "#2c2f38",

        richblack: "#021A1A",
        darkgreen: "#032221",
        bangladesh: "#03624c",
        meadow: "#2cc295",
        caribbean: "#00DF81",
        flash: "#f1f7f6",

        palette1: "#021A1A",
        palette2: "#032221",
        palette3: "#03624c",
        palette4: "#2cc295",
        palette5: "#00DF81",
        palette6: "#f1f7f6",

        primary: "#FF6B6B",
        secondary: "#4ECDC4",
        accent: "#FFD93D",
        dark: "#1A1A2E",

        sand: "#ffefca",
        clay: "#d87546",
        darkclay: "#c26a3f",

        strongCyan: "hsl(171, 66%, 44%)",
        lightBlue: "hsl(233, 100%, 69%)",
        darkGrayishBlue: "hsl(210, 10%, 33%)",
        grayishBlue: "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        mulish: ["Mulish", "sans-serif"],
        rokit: ["Rokkitt", "monospace"],
        bai: ["Bai Jamjuree", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
