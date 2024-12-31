/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Add Poppins as a custom font
        quicksand: ["quicksand", "sans-serif"],
      },
      colors: {
        primary: {
          50: "#e6e6ff", // Lightest shade
          100: "#ccccff",
          200: "#9999ff",
          300: "#6666ff",
          400: "#3333ff",
          500: "#0054e5", // Base color (default)
          600: "#0000cc",
          700: "#000099",
          800: "#000066",
          900: "#000033", // Darkest shade
        }, // Custom blue for primary color
        grays: {
          50: "#e6e6e8", // Lightest shade
          100: "#ccccd1",
          200: "#b3b3ba",
          300: "#9999a3",
          400: "#80808c",
          500: "#666675", // Base color (default)
          600: "#4d4d5e",
          700: "#333347",
          800: "#1a1a30",
          900: "#000019", // Darkest shade
        },
        secondary: "#F59E0B", // Custom amber for secondary color
        accent: "#10B981", // Custom green for accents
        dark: "#1F2937", // Dark gray for backgrounds
        light: "#F3F4F6", // Light gray for backgrounds
      },
    },
  },
  plugins: [],
};
