/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        'gold': 'rgba(220, 203, 141, 1)', // base UI gold
        'silver': 'rgba(217, 217, 217, 1)', // base UI silver
        'bronze': 'rgba(150, 124, 110, 1)', // base UI bronze
        'dark-grey': 'rgba(31, 33, 36, 1)', // base UI dark grey
        'blur-dark-grey': 'rgba(31, 33, 36, 0.75)', // base UI blur dark grey
      }
    },
  },
  plugins: [],
}

