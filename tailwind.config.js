module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        blue: {
          950: "#0a1747",
          900: "#142850",
          400: "#0077b6",
          300: "#00b4d8",
          200: "#90e0ef",
          100: "#caf0f8"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};