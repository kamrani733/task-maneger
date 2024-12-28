module.exports = {
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
