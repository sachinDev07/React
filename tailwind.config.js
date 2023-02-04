/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,}",
  ],
  theme: {
    extend: {
      backgroundImage : {
        'about_hero' : "url('./src/assests/images/about_img.jpg')",
      },

      keyframes: {
        "shimmer": {
          "100%": {
            "transform": "translateX(100%)",
          },
        },
      },
      
      animation : {
        'shimmer-effect' : "shimmer 2s linear infinite",
      },

      
    },
  },
  plugins: [],
}
