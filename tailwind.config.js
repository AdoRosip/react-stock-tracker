/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "rgb(249, 250, 250)",
        "secondary-bg": "#F1F2F2",
        "primary-text": "rgb(56, 56, 56)",
        "secondary-text": "rgb(50, 50, 50)",
        "stock-page": "rgb(77, 77, 77);",
        "ternary-text": "rgb(170, 171, 209)",
        "weak-text": "rgb(130, 130, 130)",
      },
      fontFamily: {
        quicksand: "Quicksand, sans-serif",
        garamond: "EB Garamond, serif",
        inter: "Inter, sans-serif",
        roboto: "Roboto, sans-serif",
      },
      boxShadow: {
        "3xl": "2px 4px 27px 6px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [],
}
