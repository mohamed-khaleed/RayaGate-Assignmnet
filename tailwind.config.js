/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-green": "#0a5c5b",
        "light-green": "#8eb5b0",
        "medium-green":"#35c4bc",
        "ice-blue":"#d5eeed",
        "grey-green":"#89a4a5",
        "light-grey":"#9d9d9d",
        "light-white":"#f7fbfb",
        "light-sky-blue": "#eaffff",
      },
    },
  },
  plugins: [],
}

