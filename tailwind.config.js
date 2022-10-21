/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}"
   ,"./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-background': "url('../src/Assets/Homepage/header-bg.png')",
        'loc-background':"url('../src/Assets/Homepage/loc-bg.png')"
      }
    },
  },
  plugins: [
    
  ],
}
