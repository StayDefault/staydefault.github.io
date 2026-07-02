module.exports = {
  darkMode: "class",
  content: [
    "./layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography")
  ]
};
