module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx,vue}',
    './public/index.html',
    './.storybook/**/*.{js,jsx,ts,tsx}',
  ],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#93C5FD",
          DEFAULT: "#3772FF",
          dark: "#1E40AF",
        },
        Main:"#ECECE5",
        Gray:"#8899AF"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
