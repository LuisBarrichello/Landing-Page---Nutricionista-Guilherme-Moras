/** @type {import('tailwindcss').Config} */

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sarala: ['Sarala', 'sans-serif'],
                inter: ['Inter', 'sans-serif'],
            },
            colors: {
                'main-color': {
                    DEFAULT: '#101728',
                    50: '#f1f7fd',
                    100: '#dfedfa',
                    200: '#c7dff6',
                    300: '#a0cbf0',
                    400: '#73aee7',
                    500: '#5291df',
                    600: '#3e75d2',
                    700: '#3462c1',
                    800: '#30519d',
                    900: '#2b457d',
                },
                gray: {
                    100: '#f3f4f5',
                    200: '#d0d4d9',
                    300: '#aeb3bc',
                    400: '#7b8493',
                    500: '#4d545e',
                    600: '#2a2e34',
                },
                /* colors for buttons */
                buttons: {
                    active: '#3462c1',
                    default: '#5291df',
                    disabled: '#f1f7fd',
                    'disabled-text': '#73aee7',
                    hover: '#3e75d2',
                },
                white: '#ffffff',
            },
            spacing: {
                desktop: '32px',
                tablet: '24px', 
                mobile: '16px',
            },
        },
    },
};
