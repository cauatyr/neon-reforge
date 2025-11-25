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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // ENGINE PULSE MOTION - Premium Automotive Float
        "engine-pulse-motion": {
          "0%, 100%": {
            transform: "translateX(0) scale(1)"
          },
          "50%": {
            transform: "translateX(1.5px) scale(1.01)"
          }
        },
        "engine-border-glow": {
          "0%, 100%": {
            boxShadow: "0 0 20px rgba(205, 127, 50, 0.2), 0 0 40px rgba(205, 127, 50, 0.1)"
          },
          "50%": {
            boxShadow: "0 0 30px rgba(205, 127, 50, 0.45), 0 0 60px rgba(205, 127, 50, 0.25), 0 0 0 2px rgba(205, 127, 50, 0.3)"
          }
        },
        "metal-shine-diagonal": {
          "0%": {
            transform: "translateX(-150%) translateY(-150%)",
            opacity: "0"
          },
          "50%": {
            opacity: "1"
          },
          "100%": {
            transform: "translateX(150%) translateY(150%)",
            opacity: "0"
          }
        },
        // Text Energy Animations
        "auto-light-sweep": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px) skewX(-8deg) scale(0.96)",
            filter: "blur(8px)"
          },
          "40%": {
            opacity: "1",
            transform: "translateY(0px) skewX(0deg) scale(1)",
            filter: "blur(0px)"
          },
          "100%": {
            textShadow: "0px 0px 18px rgba(255, 255, 255, 0.35)"
          }
        },
        "energy-line-sweep": {
          "0%": { left: "-100%", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { left: "100%", opacity: "0" }
        },
        "text-micro-shake": {
          "0%, 100%": { transform: "translateX(0px)" },
          "25%": { transform: "translateX(1px)" },
          "75%": { transform: "translateX(-1px)" }
        },
        "diagonal-flash": {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "0.3" }
        },
        "autospeed-underline": {
          "0%": { width: "0%", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { width: "100%", opacity: "1" }
        },
        "hud-drift": {
          "0%": {
            opacity: "0",
            transform: "translateX(-25px) translateY(8px) scale(0.96) rotateX(10deg)"
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0px) translateY(0px) scale(1) rotateX(0deg)"
          }
        },
        "digital-flick-reveal": {
          "0%": { opacity: "0", letterSpacing: "-2px" },
          "40%": { opacity: "0.4", letterSpacing: "0px" },
          "60%": { opacity: "0.7" },
          "100%": { opacity: "1" }
        },
        // Section Animations
        "ignition-flash": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95)",
            filter: "brightness(0.7) contrast(1.2)"
          },
          "30%": {
            opacity: "1",
            filter: "brightness(1.3) contrast(1.1)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
            filter: "brightness(1) contrast(1)"
          }
        },
        "section-light-run": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateX(100%)", opacity: "0" }
        },
        "premium-slide-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        "energy-darken": {
          "0%, 100%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(0.85)" }
        },
        "energy-build-up": {
          "0%": { opacity: "0", transform: "scale(0.8)" },
          "100%": { opacity: "0.3", transform: "scale(1.2)" }
        },
        // Holographic and HUD
        "holographic-float": {
          "0%, 100%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0.1"
          },
          "50%": {
            transform: "translateY(-15px) translateX(10px)",
            opacity: "0.2"
          }
        },
        "hud-grid-pulse": {
          "0%, 100%": { opacity: "0.05" },
          "50%": { opacity: "0.15" }
        },
        // Parallax Layers
        "parallax-layer-1": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(1px)" }
        },
        "parallax-layer-2": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(2.5px)" }
        },
        "parallax-layer-3": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(1.5px)" }
        },
        "parallax-layer-4": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-3px)" }
        },
        // Image Animations
        "cinematic-image-entry": {
          "0%": {
            opacity: "0",
            transform: "scale(0.92)",
            filter: "blur(4px)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
            filter: "blur(0px)"
          }
        },
        "energy-edge-sweep": {
          "0%": { strokeDashoffset: "1000", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { strokeDashoffset: "0", opacity: "0" }
        },
        // Legacy animations
        "power-pulse": {
          "0%, 100%": {
            textShadow: "0 0 20px hsla(30, 45%, 50%, 0.8), 0 0 40px hsla(30, 45%, 50%, 0.6)"
          },
          "50%": {
            textShadow: "0 0 40px hsla(30, 45%, 50%, 1), 0 0 60px hsla(30, 45%, 50%, 0.8)"
          }
        },
        "automotive-energy-reveal": {
          "0%": {
            opacity: "0",
            filter: "blur(4px)",
            transform: "translateX(-1px)"
          },
          "30%": {
            opacity: "0.6",
            filter: "blur(2px)",
            transform: "translateX(1px)"
          },
          "60%": {
            opacity: "0.9",
            filter: "blur(0px)",
            transform: "translateX(-0.5px)"
          },
          "100%": {
            opacity: "1",
            filter: "blur(0px)",
            transform: "translateX(0px)"
          }
        },
        "led-border-run": {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" }
        },
        "parallax-fade": {
          "0%": { opacity: "0", transform: "translateY(1.5px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // CTA Animations
        "engine-pulse-motion": "engine-pulse-motion 2.8s cubic-bezier(0.25, 0.1, 0.25, 1) infinite",
        "engine-border-glow": "engine-border-glow 4s ease-in-out infinite",
        "metal-shine-diagonal": "metal-shine-diagonal 0.9s ease-out forwards",
        // Text Animations
        "auto-light-sweep": "auto-light-sweep 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "text-micro-shake": "text-micro-shake 0.9s ease-out forwards",
        "energy-line-sweep": "energy-line-sweep 0.9s ease-out forwards",
        "diagonal-flash": "diagonal-flash 0.9s ease-out forwards",
        "autospeed-underline": "autospeed-underline 0.9s ease-out forwards",
        "hud-drift": "hud-drift 0.8s cubic-bezier(0.25, 0.8, 0.25, 1) forwards",
        "digital-flick-reveal": "digital-flick-reveal 0.65s ease-out forwards",
        // Section Animations
        "ignition-flash": "ignition-flash 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "section-light-run": "section-light-run 1.5s ease-out forwards",
        "premium-slide-up": "premium-slide-up 0.8s ease-out forwards",
        "energy-darken": "energy-darken 2s ease-in-out",
        "energy-build-up": "energy-build-up 1.5s ease-out forwards",
        // Holographic and HUD
        "holographic-float": "holographic-float 8s ease-in-out infinite",
        "hud-grid-pulse": "hud-grid-pulse 4s ease-in-out infinite",
        // Parallax
        "parallax-layer-1": "parallax-layer-1 6s ease-in-out infinite",
        "parallax-layer-2": "parallax-layer-2 5s ease-in-out infinite",
        "parallax-layer-3": "parallax-layer-3 5.5s ease-in-out infinite",
        "parallax-layer-4": "parallax-layer-4 4.5s ease-in-out infinite",
        // Images
        "cinematic-image-entry": "cinematic-image-entry 0.8s ease-out forwards",
        "energy-edge-sweep": "energy-edge-sweep 0.6s ease-out forwards",
        // Legacy
        "power-pulse": "power-pulse 2s ease-in-out infinite",
        "automotive-energy-reveal": "automotive-energy-reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "led-border-run": "led-border-run 2s ease-out forwards",
        "parallax-fade": "parallax-fade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
