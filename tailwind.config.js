/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-neuehaas)"],
        // sans: ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],
      },
      theme: {
        backgroundColor: {
          sidebar: "#333333",
        },
      },
      colors: {
        primary: "#003EFF",
        primaryBlack: "#1F1F23",
        primaryRed: "#FF5663",
        lightRed: "#FFF4F5",
        primaryGreen: "#129043",
        secondaryGreen: "#B6FDD3",
        lightGreen: "#E6FFF0",
        primaryOrange: "#D98F00",
        lightOrange: "#FFF8EB",
        primaryDarkGrey: "#373B47",
        primaryGrey: "#697598",
        lightGrey: "#F6F8FA",
        pink: "#FFB7BD",
        pink100: "#FCDDEC",
        grey200: "#B7BDCF",
        grey300: "#D9D9E0",
        grey400: "#666F77",
        green400: "#2DB260",
        gold: "#F8E39B",
      },

      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        wide: ".025em",
        wider: ".05em",
        widest: ".1em",
        widest: ".25em",
        normal: "0.5px",
      },
      lineHeight: {
        "extra-loose": "2.5",
        11: "3.125rem",
      },
      gap: {
        13: "3.125rem",
      },

      backgroundImage: {
        loginBackground: "url('/assets/svgs/vForms.svg')",
      },
    },
  },
  plugins: [],
};
