/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "425px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
      colors: {
        "primary-h2": "rgba(16, 24, 40, 1)",
        "primary-text": "rgba(71, 84, 103, 1)",
        "primary-placeholder": "rgba(102, 112, 133, 1)",
        "primary-h": "rgba(52, 64, 84, 1)",
        "primary-btn-bg": "rgba(127, 86, 217, 1)",
        "primary-purple-text": "rgba(105, 65, 198, 1)",
      },
      backgroundImage: {
        "hero-sign": "url('/src/assets/sign/hero.jpeg')",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
