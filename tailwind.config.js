module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f7fafc",
        "primary-dark": "#11342e",
        nav: "#F5F6F6",
        "nav-dark": "#0F2E29",
        footer: "#F5F6F6",
        "footer-dark": "#0F2E29",
        "success-toast-dark": "#11bf43",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fade: "fade 1000ms ease-out",
      },
    },
  },
  plugins: [],
};
