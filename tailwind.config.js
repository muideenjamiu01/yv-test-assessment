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
        lightPrimary: "#9570A4",
        primaryGrey: "#C2C6CE",
        grey100: "#4A4C56",
        black100: "#161721",
        black200: "#07080B",
        black300: "#0F1016",
        black500: "#1D1F2C",
        black600: "#333333",
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
        loginInnerBg: "url('/assets/images/login-inner-bg.png')",
        loginBackground: "url('/assets/images/login-background.png')",
      },
    },
  },
  plugins: [],
};
