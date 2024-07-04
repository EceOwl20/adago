/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          
      },
      colors: {
        darkSeaBlue: "#101522",
        flameOrange: "#F47C20",
        royalBlue: "#273661",
        haki: "#bfba8c",
      },
      fontFamily: {
        hurme: ['Hurme Geometric Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
