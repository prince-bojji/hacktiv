/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#ffffff',
      'secondary' : '#0a0a0a',
      'secondary-bg' : 'rgba(47, 47, 47, .35)',
      'tertiary': '#5c5c5c',
      'accent': '#ffd02b',
      'warning': '#f75151',
      'success': '#60d238',
      'accent-a' : '#ffda55',
      'accent-bg-a' : 'rgba(255, 218, 85, .5)',
      'accent-bg-b' : 'rgba(255, 218, 85, .3)',
      'accent-b' : '#f4ce47',
      'accent-c' : '#f8ba40',
      'accent-d' : '#b98219',
      'secondary-a' : '#2f2f2f',
      'tertiary-a' : '#717171',
      'tertiary-b' : '#b6b6b6',
      'tertiary-c' : '#dfdfdf',
      'primary-a' : '#f8f8f8',
      'primary-b' : '#f4f4f4'
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'doppio': ['Doppio One', 'sans-serif']
      },
    },
    width: {
      'full': '100%',
      '1/4': '25%',
    },
    screens: {
      'sm': '640px',   
      'md': '768px',   
      'lg': '1024px',  
      'xl': '1280px', 
      '2xl': '1440px', 
    },
  },
  plugins: [
  ],
}

