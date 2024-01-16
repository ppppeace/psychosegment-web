import type { Config } from 'tailwindcss';

const config: Config = {
    content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)'
            },
            backgroundImage: {
                web: "url('/assets/web_BG.jpg')"
            }
        },
        fontFamily: {
            // prompt: ['Prompt', 'Helvetica', 'arial', 'sans-serif', ''],
            // thonburi: ['Thonburi', 'Helvetica', 'arial', 'sans-serif']
        }
    }
};
export default config;
