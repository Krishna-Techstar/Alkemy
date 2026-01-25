import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Core Neon Palette
        "neon-red": "hsl(var(--neon-red))",
        "crimson-glow": "hsl(var(--crimson-glow))",
        "electric-purple": "hsl(var(--electric-purple))",
        "neon-magenta": "hsl(var(--neon-magenta))",
        "cyber-blue": "hsl(var(--cyber-blue))",
        
        // Background Depths
        "deep-space": "hsl(var(--deep-space))",
        "midnight-navy": "hsl(var(--midnight-navy))",
        "smoke-black": "hsl(var(--smoke-black))",
        
        // Semantic Colors
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        heading: ["Bebas Neue", "Orbitron", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
        body: ["Inter", "Space Grotesk", "sans-serif"],
        retro: ["VT323", "monospace"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        arcade: "18px",
      },
      boxShadow: {
        "glow-red": "var(--glow-red)",
        "glow-red-intense": "var(--glow-red-intense)",
        "glow-purple": "var(--glow-purple)",
        "glow-purple-intense": "var(--glow-purple-intense)",
        "glow-cyan": "var(--glow-cyan)",
        "glow-cyan-intense": "var(--glow-cyan-intense)",
        "arcade": "0 0 30px hsla(265, 75%, 67%, 0.3), inset 0 0 60px hsla(0, 0%, 0%, 0.5)",
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "neon-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px hsla(0, 100%, 56%, 0.7), 0 0 40px hsla(0, 100%, 56%, 0.4)" 
          },
          "50%": { 
            boxShadow: "0 0 30px hsla(0, 100%, 56%, 0.9), 0 0 60px hsla(0, 100%, 56%, 0.6)" 
          },
        },
        "text-flicker": {
          "0%, 100%": { opacity: "1" },
          "33%": { opacity: "0.8" },
          "66%": { opacity: "0.9" },
        },
        "float-ember": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "0.8" },
          "100%": { transform: "translateY(-100vh) rotate(720deg)", opacity: "0" },
        },
        "slide-in-up": {
          "0%": { opacity: "0", transform: "translateY(100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.4s ease-out forwards",
        "neon-pulse": "neon-pulse 2s ease-in-out infinite",
        "text-flicker": "text-flicker 4s ease-in-out infinite",
        "float-ember": "float-ember 8s linear infinite",
        "slide-in-up": "slide-in-up 0.6s ease-out forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-overlay": "var(--gradient-hero-overlay)",
        "neon-red-gradient": "var(--gradient-neon-red)",
        "neon-purple-gradient": "var(--gradient-neon-purple)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
