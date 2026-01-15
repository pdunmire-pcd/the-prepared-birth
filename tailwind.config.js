/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "Noto Sans", "sans-serif"],
      },
      colors: {
        sage: {
          50: "#f4f7f3",
          100: "#e6eee4",
          200: "#c6d8c1",
          300: "#a3bf9a",
          400: "#7ca56f",
          500: "#5f8a54",
          600: "#4b6f42",
          700: "#3d5a35",
          800: "#334a2d",
          900: "#2b3e26"
        },
        ink: "#111214",
        paper: "#faf8f4",
      },
      boxShadow: {
        soft: "0 10px 25px rgba(17,18,20,0.08)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
