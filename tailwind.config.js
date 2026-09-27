/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0D1117",
          raised: "#141922",
          line: "#242B36",
        },
        paper: {
          DEFAULT: "#ECE8DF",
          dim: "#A7ACB4",
        },
        brass: {
          DEFAULT: "#C08A4E",
          dim: "#8A6236",
        },
        steel: "#3D4A5C",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};
