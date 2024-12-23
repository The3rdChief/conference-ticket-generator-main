/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inconsolata: ["Inconsolata", "serif"],
      },
      colors: {
        neut700: "hsl(245, 19%, 35%)",
        neut500: "hsl(245, 15%, 58%)",
        neut900: "hsl(248, 70%, 10%)",
        orange500: "hsl(7, 88%, 67%)",
        orange700: "hsl(7, 71%, 60%)",
      },
    },
  },
  plugins: [],
};
