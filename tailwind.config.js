/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      fontFamily: {
        inter: ["Inter", "sans - serif"],
      },
      colors: {
        blueColor: "#4F46E5",
        bgColor: "#EDEDED",
        greenColor: "#059669",
        lightGrayColor: "#6B7280",

        blackColor: "#111827",
        textBlack: "#414042",
        lightbtncolor: "#EEF2FF",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@headlessui/tailwindcss")],
};
