import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                forest: {
                    DEFAULT: "#1B4332",
                    light: "#2D6A4F",
                    dark: "#081C15",
                },
                champagne: {
                    DEFAULT: "#F4E4C1",
                    gold: "#D4AF37",
                    dark: "#BDA06D",
                },
                cream: {
                    DEFAULT: "#FAF9F6",
                    dark: "#F0EFEA",
                },
            },
            fontFamily: {
                serif: ["var(--font-lora)", "serif"],
                sans: ["var(--font-raleway)", "sans-serif"],
            },
            animation: {
                "float-slow": "float 20s ease-in-out infinite",
                "float-medium": "float 15s ease-in-out infinite",
            },
            keyframes: {
                float: {
                    "0%, 100%": { transform: "translate(0, 0) scale(1)" },
                    "33%": { transform: "translate(30px, -50px) scale(1.1)" },
                    "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
