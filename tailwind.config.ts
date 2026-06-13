import type { Config } from "tailwindcss";
// ADD THE IMPORT HERE:
import tailwindcssAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  // USE THE IMPORTED VARIABLE HERE:
  plugins: [tailwindcssAnimate], 
};

export default config;