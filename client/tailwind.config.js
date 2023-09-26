/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#26a8ff",
        secondary: "#ffc107",
        text: "#838e94",
      },
    },
  },
  plugins: [],
};
