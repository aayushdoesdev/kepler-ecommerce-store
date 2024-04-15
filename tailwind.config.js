/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dancingScript: ["Dancing Script", "sans-sherif"],
        poppins: ["Poppins", "sans-sherif"]
      }
    },
  },
  plugins: [],
}

