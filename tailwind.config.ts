import { nextui } from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
    theme: {
    	extend: {
    		backgroundImage: {
    			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'cyber-gradient': `
                    linear-gradient(65deg, #0F0F12 15%, #1A1A1F),
                    linear-gradient(155deg, #1A1A1F 15%, #0F0F12)
                `,
                'flasko-gradient': 'linear-gradient(180deg, #FFD6C4, #FFF5EE)'
    		},
    		colors: {
                primary: {
                    50: '#FFFFFF',    // Pure white (base)
                    100: '#FAFAFA',   // Lightest tint
                    200: '#F8F8F8',   // Lighter tint
                    300: '#F5F5F5',   // Light tint
                    400: '#F0F0F0',   // Soft tint
                    500: '#E8E8E8',   // Medium tint
                    600: '#E0E0E0',   // Medium-dark tint
                    700: '#D8D8D8',   // Dark tint
                    800: '#D0D0D0',   // Darker tint
                    900: '#C8C8C8',   // Darkest tint
                },
                secondary: {
                    50: '#EAEAEB',    // Lightest tint
                    100: '#D4D4D6',   // Lighter tint
                    200: '#A9A9AD',   // Light tint
                    300: '#7E7E84',   // Soft tint
                    400: '#54545B',   // Medium tint
                    500: '#1A1A1E',   // Base color
                    600: '#17171B',   // Light shade
                    700: '#141418',   // Medium shade
                    800: '#111114',   // Dark shade
                    900: '#0E0E11',   // Darkest shade
                },
                accent: {
                    50: '#FFF2EE',    // Lightest tint
                    100: '#FFE5DD',   // Lighter tint
                    200: '#FFCCBB',   // Light tint
                    300: '#FFB299',   // Soft tint
                    400: '#FF9977',   // Medium tint
                    500: '#FF7F50',   // Base color
                    600: '#FF6637',   // Light shade
                    700: '#FF4D1F',   // Medium shade
                    800: '#FF3306',   // Dark shade
                    900: '#EC2A00',   // Darkest shade
                }
    		},
            fontSize: {
                13: '13px',
                15: '15px',
                17: '17px',
                19: '19px',
                23: '23px',
                22: '22px',
                21: '21px'
            },
            height: {
                screenA: 'calc(100dvh - 71.6px)',
                screenB: 'calc(100dvh - 66.2px)'
            },
            translate: {
                35: '35.8px',
                33: '33.1px'
            }
    	}
    },
    plugins: [nextui()],
    presets: [require("@relume_io/relume-tailwind")]
};

export default config;
