import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        '40px': ['40px', '0.85'],
        '18px': ['18px', '1.1'],
      },
      colors: {
        customGray: '#282830', 
        lightgray: '#D3D3D3',
      },
    },
  },
  plugins: [],
} satisfies Config
