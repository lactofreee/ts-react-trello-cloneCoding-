/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bgColor': "#3F8CF2",
      'boardColor': "#DADFE9",
      'cardColor': "white",
    },
  }, 
};
