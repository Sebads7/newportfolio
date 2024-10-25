// postcss.config.js
module.exports = {
  plugins: [
    "postcss-import", // Optional: Enables @import for CSS files
    "tailwindcss", // Enables Tailwind CSS
    "autoprefixer", // Adds vendor prefixes for better browser support
  ],
};
