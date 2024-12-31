/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 25s linear infinite", // Define a slow spin
        "spin-mid": "spin 20s linear infinite", // Define a medium spin
        "spin-fast": "spin 15s linear infinite", // Define a fast spin
      },
      colors: {
        "amethyst-purple": "#9b37ff",
        "steel-blue": "#7989a2",
        "sky-blue": "#47e9ff",
        coral: "#FF7F50",
        darkCoral: "#FF6347",
        lightTeal: "#008080",
        gold: "#FFD700",
      },
      backgroundImage: {
        parallax: 'url("/public/Images/img.jpg")', // Corrected path
        parallax2: 'url("/public/Images/lamp.jpg")', // Corrected path
        parallax3: 'url("/public/Images/vase.jpg")', // Corrected path
      },
    },
  },
  plugins: [],
};
