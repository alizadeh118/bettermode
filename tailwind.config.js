/** @type {import("tailwindcss").Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'selector',
    plugins: [require('@tailwindcss/typography')],
}
