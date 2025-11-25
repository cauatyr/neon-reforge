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
            textShadow: "0 0 20px hsla(30, 45%, 50%, 0.8), 0 0 40px hsla(30, 45%, 50%, 0.6)",
          },
          "50%": {
            textShadow: "0 0 40px hsla(30, 45%, 50%, 1), 0 0 60px hsla(30, 45%, 50%, 0.8)",
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
            boxShadow: "0 0 10px rgba(191, 139, 70, 0.3)",
            borderColor: "rgba(191, 139, 70, 0.3)"
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(191, 139, 70, 0.8), 0 0 50px rgba(191, 139, 70, 0.4)",
            borderColor: "rgba(191, 139, 70, 0.9)"
          },
          "100%": { 
            boxShadow: "0 0 10px rgba(191, 139, 70, 0.3)",
            borderColor: "rgba(191, 139, 70, 0.3)"
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
        // Premium Button Animations - Professional & Mobile-First
        "premium-breath": {
          "0%, 100%": { 
            transform: "translateY(0)",
            boxShadow: "0 10px 40px rgba(191, 139, 70, 0.4)"
          },
          "50%": { 
            transform: "translateY(-3px)",
            boxShadow: "0 12px 45px rgba(191, 139, 70, 0.5)"
          },
        },
        "button-press": {
          "0%": { transform: "scale(1) translateY(0)" },
          "50%": { transform: "scale(0.98) translateY(2px)" },
          "100%": { transform: "scale(1) translateY(0)" },
        },
        "button-entry": {
          "0%": { 
            opacity: "0",
            transform: "scale(0.95)",
            boxShadow: "0 0 0 rgba(191, 139, 70, 0)"
          },
          "100%": { 
            opacity: "1",
            transform: "scale(1)",
            boxShadow: "0 10px 40px rgba(191, 139, 70, 0.4)"
          },
        },
        // Global Interaction Animations
        "scroll-glow": {
          "0%": { 
            opacity: "0",
            transform: "scaleX(0)"
          },
          "50%": { 
            opacity: "0.3"
          },
          "100%": { 
            opacity: "0",
            transform: "scaleX(1)"
          },
        },
        "section-slide": {
          "0%": { 
            transform: "translateY(8px)",
            opacity: "0"
          },
          "100%": { 
            transform: "translateY(0)",
            opacity: "1"
          },
        },
        "card-tilt": {
          "0%": { transform: "perspective(1000px) rotateX(0deg)" },
          "50%": { transform: "perspective(1000px) rotateX(1deg)" },
          "100%": { transform: "perspective(1000px) rotateX(0deg)" },
        },
        "page-entry": {
          "0%": { 
            opacity: "0",
            transform: "translateY(10px)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        // Professional Cinematic Animations - No Pixelation
        "subtle-shine": {
          "0%": {
            backgroundPosition: "-200% center",
            opacity: "0"
          },
          "50%": {
            opacity: "1"
          },
          "100%": {
            backgroundPosition: "200% center",
            opacity: "0"
          }
        },
        "edge-light-sweep": {
          "0%": {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            opacity: "1"
          },
          "100%": {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: "0"
          }
        },
        // Crystal Motion Tech Button
        "crystal-breath": {
          "0%, 100%": { 
            transform: "translateY(0)",
            boxShadow: "0 8px 25px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          },
          "50%": { 
            transform: "translateY(-3px)",
            boxShadow: "0 10px 35px rgba(191, 139, 70, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.15)"
          },
        },
        "crystal-entry": {
          "0%": { 
            opacity: "0",
            transform: "scale(0.90)",
            borderColor: "rgba(200, 200, 200, 0)"
          },
          "100%": { 
            opacity: "1",
            transform: "scale(1)",
            borderColor: "rgba(200, 200, 200, 0.6)"
          },
        },
        "crystal-flash": {
          "0%": { 
            transform: "translateX(-100%) skewX(-15deg)",
            opacity: "0"
          },
          "50%": {
            opacity: "0.8"
          },
          "100%": { 
            transform: "translateX(200%) skewX(-15deg)",
            opacity: "0"
          },
        },
        // Section-specific animations
        "hero-title-slide": {
          "0%": { 
            opacity: "0",
            transform: "translateY(30px)"
          },
          "100%": { 
            opacity: "1",
            transform: "translateY(0)"
          },
        },
        "spotlight-reveal": {
          "0%": { 
            clipPath: "circle(0% at 50% 50%)",
            transform: "scale(0.97)"
          },
          "100%": { 
            clipPath: "circle(100% at 50% 50%)",
            transform: "scale(1)"
          },
        },
        "dual-axis-reveal": {
          "0%": { 
            opacity: "0",
            transform: "translate(-6px, 8px)"
          },
          "70%": {
            opacity: "1"
          },
          "100%": { 
            opacity: "1",
            transform: "translate(0, 0) rotate(0deg)"
          },
        },
        "card-glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(191, 139, 70, 0.2), inset 0 0 15px rgba(191, 139, 70, 0.05)"
          },
          "50%": { 
            boxShadow: "0 0 30px rgba(191, 139, 70, 0.4), inset 0 0 20px rgba(191, 139, 70, 0.1)"
          },
        },
        "pendular-entry": {
          "0%": { 
            opacity: "0",
            transform: "rotate(-2deg) translateY(20px)"
          },
          "60%": {
            transform: "rotate(1deg) translateY(-5px)"
          },
          "100%": { 
            opacity: "1",
            transform: "rotate(0deg) translateY(0)"
          },
        },
        "split-text": {
          "0%": { 
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            opacity: "0"
          },
          "100%": { 
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: "1"
          },
        },
        "led-border-run": {
          "0%": { 
            strokeDashoffset: "1000"
          },
          "100%": { 
            strokeDashoffset: "0"
          },
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
        "laser-edge": {
          "0%": { 
            clipPath: "inset(0 100% 0 0)"
          },
          "25%": { 
            clipPath: "inset(0 0 0 0)"
          },
          "50%": { 
            clipPath: "inset(0 0 100% 0)"
          },
          "75%": { 
            clipPath: "inset(0 0 0 100%)"
          },
          "100%": { 
            clipPath: "inset(100% 0 0 0)"
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
        "slide-power": "slide-power 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "digital-flip": "digital-flip 0.6s ease-out forwards",
        "subtle-shine": "subtle-shine 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "edge-light-sweep": "edge-light-sweep 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        // Crystal Motion Tech Button
        "crystal-breath": "crystal-breath 7s ease-in-out infinite",
        "crystal-entry": "crystal-entry 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "crystal-flash": "crystal-flash 0.6s ease-out",
        // Section-specific animations
        "hero-title-slide": "hero-title-slide 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "spotlight-reveal": "spotlight-reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "dual-axis-reveal": "dual-axis-reveal 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "card-glow-pulse": "card-glow-pulse 0.2s ease-out",
        "pendular-entry": "pendular-entry 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
        "split-text": "split-text 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "led-border-run": "led-border-run 1.5s ease-out forwards",
        "laser-edge": "laser-edge 0.8s ease-out forwards",
        // Global Interactions
        "scroll-glow": "scroll-glow 1.2s ease-out forwards",
        "section-slide": "section-slide 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "card-tilt": "card-tilt 0.3s ease-out forwards",
        "page-entry": "page-entry 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
