/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: { "orange-650": "#ff5733" },
      textShadow: {
        default: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        lg: "4px 4px 6px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow": {
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.3)",
        },
        ".text-shadow-lg": {
          "text-shadow": "4px 4px 6px rgba(0, 0, 0, 0.5)",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
