import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: ['var(--font-nunito)', 'sans-serif'],
		  },
		transform: ['hover', 'focus'],
		rotate: {
		  'y-180': 'rotateY(180deg)',
		},
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			'bg-primary': '#f5b2c5',
  			'bg-second': '#fbe7e9 ',
  			'text-primary': 'rgb(227 56 105)',
  			sakura: '#FFD3E0',
  			brownSakura: '#4E3629',
  			'border-primary': '#f3a5bd',
  			'text-head': '#f5b2c5',
  			'text-second': '#E3629'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			  scroll: {
				to: {
				  transform: "translate(calc(-50% - 0.5rem))",
				},
			  },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			  scroll:
			  "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
  		}
  	}
  },
  plugins: [],
};

export default config;
