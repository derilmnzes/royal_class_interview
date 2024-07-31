import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary_color:'#DB4444',
        secondary_color:'#000000',
        primary_font_color:"#000000",
        secondary_font_color:'#FAFAFA'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
fontFamily:{
  primary_font_family: ['var(--poppins-font)'],
  secondary_font_family: ['var(--font-inter)'],
}
    },
  },
  plugins: [],
};
export default config;
