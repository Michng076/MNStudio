/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F3A40',
        secondary: '#CFB760',
        secondary_hover: '#F4EED9',
      },
      fontFamily: {
        sans: ["Inter"],
        mono: ["Source Code Pro"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms")({ strategy: "base" }),
  ],
};
