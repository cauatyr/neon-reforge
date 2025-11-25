import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        display: ['Orbitron', 'system-ui', 'sans-serif'],
        body: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        automotive: {
          red: "hsl(var(--ferrari-red))",
          energy: "hsl(var(--energy-red))",
          bronze: "hsl(var(--bronze-metallic))",
          carbon: "hsl(var(--carbon-black))",
          steel: "hsl(var(--steel-gray))",
          white: "hsl(var(--polished-white))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "power-pulse": {
          "0%, 100%": {
            textShadow: "0 0 20px hsla(0, 85%, 55%, 0.8), 0 0 40px hsla(0, 85%, 55%, 0.6)",
          },
          "50%": {
            textShadow: "0 0 40px hsla(0, 85%, 55%, 1), 0 0 60px hsla(0, 85%, 55%, 0.8)",
          },
        },
        "energy-run": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        "metal-shine": {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        "ignition": {
          "0%": { 
            opacity: "0",
            transform: "scale(0.8)",
            filter: "brightness(0.5)"
          },
          "50%": {
            filter: "brightness(2)"
          },
          "100%": { 
            opacity: "1",
            transform: "scale(1)",
            filter: "brightness(1)"
          },
        },
        "border-glow": {
          "0%": { 
            boxShadow: "0 0 10px rgba(220, 38, 38, 0.3)",
            borderColor: "rgba(220, 38, 38, 0.3)"
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(220, 38, 38, 0.8), 0 0 50px rgba(220, 38, 38, 0.4)",
            borderColor: "rgba(220, 38, 38, 0.9)"
          },
          "100%": { 
            boxShadow: "0 0 10px rgba(220, 38, 38, 0.3)",
            borderColor: "rgba(220, 38, 38, 0.3)"
          },
        },
        "light-run": {
          "0%": { 
            backgroundPosition: "-200% center",
            opacity: "0.5"
          },
          "50%": {
            opacity: "1"
          },
          "100%": { 
            backgroundPosition: "200% center",
            opacity: "0.5"
          },
        },
        "rev": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        "zoom-pulse": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        "slide-power": {
          "0%": {
            opacity: "0",
            transform: "translateX(-50px) rotateY(-15deg)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0) rotateY(0)"
          },
        },
        "digital-flip": {
          "0%": { 
            transform: "rotateX(0deg)",
            opacity: "0"
          },
          "50%": {
            transform: "rotateX(90deg)",
            opacity: "0.5"
          },
          "100%": {
            transform: "rotateX(0deg)",
            opacity: "1"
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "power-pulse": "power-pulse 2s ease-in-out infinite",
        "energy-run": "energy-run 2s linear infinite",
        "metal-shine": "metal-shine 3s linear infinite",
        "scan": "scan 3s ease-in-out infinite",
        "ignition": "ignition 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "border-glow": "border-glow 2s ease-in-out infinite",
        "light-run": "light-run 3s linear infinite",
        "rev": "rev 1s ease-in-out infinite",
        "zoom-pulse": "zoom-pulse 4s ease-in-out infinite",
        "slide-power": "slide-power 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "digital-flip": "digital-flip 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
