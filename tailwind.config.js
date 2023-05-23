/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#f58220",
      },
      maxWidth: {
        "1/6": "16.666667%",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        "5/6": "83.333333%",
        "5/12": "41.666667%",
        "7/12": "58.333333%",
        "1/12": "8.333333%",
        "8/12": "66.666667%",
        "1/3": "33.333333%",
        "11/12": "91.666667%",
      },
      boxShadow: {
        custom: "0 2px 10px 0px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
