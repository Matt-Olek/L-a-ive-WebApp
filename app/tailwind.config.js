/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#7B5295",
          "primary-focus": "#4C266A",
          "primary-content": "#ffffff",

          secondary: "#9E7DB3",
          "secondary-focus": "#7B5295",
          "secondary-content": "#ffffff",

          accent: "#fffaff",
          "accent-focus": "#9E7DB3",
          "accent-content": "#ffffff",

          neutral: "#AB598B",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",

          "base-100": "#ffffff",
          "base-200": "#ffedff",
          "base-300": "#ced3d9",
          "base-content": "#1e2734",

          info: "#4C266A",
          success: "#009485",
          warning: "#ffb647",
          error: "#fe8662",

          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",

          "--animation-btn": ".25s",
          "--animation-input": ".2s",

          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
};
