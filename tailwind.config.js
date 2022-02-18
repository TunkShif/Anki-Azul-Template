module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./templates/**/*.html"
  ],
  theme: {
    fontFamily: {
      "sans": ["Noto Sans CJK SC", "Microsoft Yahei", "Droid Sans", "Roboto", "Helvetica Neue", "sans-serif"]
    },
    extend: {
      colors: {
        "anki-blue": "#03a9f4",
        "white-smoke": "#eeeeee"
      }
    }
  },
  plugins: [
    require("daisyui")
  ]
}
