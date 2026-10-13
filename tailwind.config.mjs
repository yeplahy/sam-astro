/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        sec: {
          DEFAULT: "#387aff", // Persian Blue Accent
          hover: "#5d93ff",
          glow: "rgba(56, 122, 255, 0.35)",
        },
      },
      keyframes: {
        scaleAnim: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        'heart-pulse': {
          '0%': { transform: 'scale(1)' },
          '25%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1)' },
          '75%': { transform: 'scale(1.06)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        scale: 'scaleAnim 300ms ease-in-out',
        'heart-pulse': 'heart-pulse 0.6s ease-in-out',
      },
    },
  },
  plugins: [],
};
