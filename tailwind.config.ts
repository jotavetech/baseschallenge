import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#27191C",
          dark: "#E0E4CE",
        },
        secondary: {
          DEFAULT: "#CC3917",
          dark: "#6E9987",
        },
        "app-bg": {
          DEFAULT: "#F9FADC",
          dark: "#100B0C",
        },
        "input-bg": {
          DEFAULT: "#8FA691",
          dark: "#2D3839",
        },
        "button-bg": {
          "1": {
            DEFAULT: "#D4CEAA",
            dark: "#114D4D",
          },
          "2": {
            DEFAULT: "#6E9987",
            dark: "#6E9987",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
