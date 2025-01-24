/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customblack: '#202124',
        customGray:'#8E8E8E',
        customname:'#334155',
        custom1:'#E14942',
        customborder:'#CBD5E1',
        customimgborder:'#7F7F800D'
      },
    },
  },
  plugins: [],
};
