/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"],
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial", "Noto Sans", "Liberation Sans", "sans-serif"]
      },
      colors: {
        sage: {
          700: "#4f6a56",
          600: "#5f7a66",
          500: "#6b7f5d"
        },
        sand: {
          50: "#fbfaf7",
          100: "#f6f2ea",
          200: "#eee6d8"
        },
        ink: {
          900: "#1b1b1b"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
