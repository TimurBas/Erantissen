module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f7fafc",
        "primary-dark": "#11342e",
        nav: "#ffffff",
        "nav-dark": "#0F2E29",
        footer: "#0F2E29",
        "footer-dark": "#F5F6F6",
        "success-toast-dark": "#11bf43",
        facebook: "#4267b3",
        "cart-products-dark": "#17453d",
      },
      keyframes: {
        fade: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "1" },
        },
        instagram: {
          "0%": { color: "#4c68d7" },
          "15%": { color: "#8a3ab9" },
          "30%": { color: "#e95950" },
          "45%": { color: "#bc2a8d" },
          "60%": { color: "#fccc63" },
          "75%": { color: "#fbad50" },
          "100%": { color: "#cd486b" },
        },
      },
      animation: {
        fade: "fade 1000ms ease-out",
        instagram: "instagram 3s alternate infinite",
      },
    },
  },
  plugins: [],
};
