module.exports = {
    content: ['./src/**/*.{js,ts,svelte}'],
    theme: {
        fontFamily: {
            display: ['Proxima Nova'],
            body: ['Raleway'],
        },
        container: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
        }
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        styled: true,
        themes: true,
        base: true,
        utils: true,
        logs: true,
        rtl: false,
        prefix: '',
        darkTheme: 'dark',
        themes: [
            {
                base: {
                    primary: '#67EBEB',
                    secondary: '#ff7d00',
                    accent: '#00DAAC',
                    neutral: '#f1f1f1',
                    'base-100': '#2b2b30',
                    info: '#8C9CEE',
                    success: '#208344',
                    warning: '#F8CB63',
                    error: '#EF705D',
                },
            },
        ],
    },
};
