import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black-ink anchor matching the logo type
        ink: "#0A0A0A",
        // Deep jade base
        jade: {
          900: "#072820",
          800: "#0E3B2F",
          700: "#155446",
          600: "#1F6E5C",
          500: "#2B8A75",
          400: "#4FA690",
          300: "#86C2B0",
          200: "#BFDDD0",
          100: "#E3EEE8",
          50:  "#F1F6F2",
        },
        // Brand kelly green sampled from the logo arrow
        brand: {
          700: "#0F5E36",
          600: "#147547",
          500: "#167E47",  // primary brand green
          400: "#2C9A5E",
          300: "#5BB783",
        },
        // Warm copper as supporting accent
        copper: {
          600: "#9E4F1F",
          500: "#B8632A",
          400: "#D07A3D",
        },
        cream: "#F5F2EC",
        paper: "#FAFAF7",
        mist:  "#D6DBD6",
        graphite: "#3D4945",
      },
      fontFamily: {
        display: ['Manrope', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['Inter', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        revealUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        ping: {
          '0%':   { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        drawPath: {
          '0%':   { strokeDashoffset: '2000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        slideUp: 'slideUp 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        revealUp: 'revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        scaleIn: 'scaleIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        marquee: 'marquee 40s linear infinite',
        floatY: 'floatY 4s ease-in-out infinite',
        ping: 'ping 2.2s cubic-bezier(0, 0, 0.2, 1) infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        drawPath: 'drawPath 2.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
