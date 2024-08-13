/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    transform: (content) => content.replace(/taos:/g, ''),
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  },

  safelist: [
    '!duration-[0ms]',
    '!delay-[0ms]',
    'html.js :where([class*="taos:"]:not(.taos-init))'
  ], 
  theme: {
    extend: {
      screens: {
        'sm': '320px',
        // => @media (min-width: 320px) { ... }
  
        'md': '375px',
        // => @media (min-width: 375px) { ... }
  
        'lg': '425px',
        // => @media (min-width: 425px) { ... }
  
        'xl': '768px',
        // => @media (min-width: 768px) { ... }
  
        '2xl': '1024px',
        // => @media (min-width: 1024px) { ... }

        '3xl': '1440px',
        // => @media (min-width: 1440px) { ... }
        
        '4xl': '2560px',
        // => @media (min-width: 2560px) { ... }
      },
      
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', "Inter"],
        serif: ['ui-serif', 'Georgia',"Inter"],
        inter: ["Inter_Fallback"],
        mono: ['ui-monospace', 'SFMono-Regular'],
        body: ["sans-serif"],
      },
  
      fontWeight: {
        light: '300',
        semibold: '600',
        extrabold: '800',
      },
    },
  },
  plugins: [
    require('taos/plugin')
  ],
}