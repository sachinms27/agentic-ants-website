/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-hero-light': 'radial-gradient(ellipse at center, rgba(120, 119, 198, 0.3) 0%, rgba(255, 255, 255, 0) 70%)',
        'gradient-hero-dark': 'radial-gradient(ellipse at center, rgba(120, 119, 198, 0.2) 0%, rgba(0, 0, 0, 0) 70%)',
      },
    },
  },
  plugins: [],
}