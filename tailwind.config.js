/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        dark: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
        red: "rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset, rgb(204, 219, 232) 3px 3px 6px 0px inset",
        lifted: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        navshadow: "0 1px 6px 0 rgba(32, 33, 36, 0.28)",
      },
    },
  },
  plugins: [],
};
