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
        'bg-primary': "rgb(96 165 250)",
        'bg-second':"rgb(147 197 253)",
        'text-primary':"#60a5fa",
        'sakura': '#FFD3E0',  
        'brownSakura': '#4E3629',
      },
    },
  },
  plugins: [],
};
export default config;
