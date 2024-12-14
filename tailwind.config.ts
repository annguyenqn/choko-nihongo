import type { Config } from "tailwindcss";

const config: Config = {
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
        'bg-primary': "#f5b2c5",
        'bg-second':"#fbe7e9 ",
        'text-primary':"rgb(227 56 105)",
        'sakura': '#FFD3E0',  
        'brownSakura': '#4E3629',
        'border-primary':"#f3a5bd",
        'text-head': "#f5b2c5",
        'text-second': "#E3629"
      },
    },
  },
  plugins: [],
};
export default config;
