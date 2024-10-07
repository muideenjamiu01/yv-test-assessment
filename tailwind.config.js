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
      borderRadius: {
        "5px": "5px",
      },
      boxShadow: {
        dashboard: "0px 12px 30px 0px rgba(173, 173, 173, 0.25)",
        filterCard: "",
        footer: "-11px 0px 5px rgba(0, 0, 0, 0.15",
        card: "0px 2px 11px rgba(20, 100, 244, 0.15);",
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
      fontSize: {
        header: [
          "3rem",
          {
            lineHeight: "3.5rem",
            letterSpacing: "-0.01em",
            fontWeight: "700",
          },
        ],
        "": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
      },
      backgroundImage: {
        loginBackground: "url('/assets/svgs/vForms.svg')",
      },
    },
  },
  plugins: [],
};
