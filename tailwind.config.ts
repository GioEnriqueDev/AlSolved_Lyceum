import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            // ─── Extended Color Palette ───
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                    50: "#FAF5FF",
                    100: "#F3E8FF",
                    200: "#E9D5FF",
                    300: "#D8B4FE",
                    400: "#C084FC",
                    500: "#A855F7",
                    600: "#9333EA",
                    700: "#7C3AED",
                    800: "#6D28D9",
                    900: "#5B21B6",
                    950: "#3B0764",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                violet: {
                    50: "#FAF5FF",
                    100: "#F3E8FF",
                    200: "#E9D5FF",
                    300: "#D8B4FE",
                    400: "#C084FC",
                    500: "#A855F7",
                    600: "#9333EA",
                    700: "#7C3AED",
                    800: "#6D28D9",
                    900: "#5B21B6",
                    950: "#3B0764",
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
            },

            // ─── Border Radius ───
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
                "2xl": "1rem",
                "3xl": "1.5rem",
                "4xl": "2rem",
            },

            // ─── Box Shadows ───
            boxShadow: {
                glow: "0 0 20px rgba(139, 92, 246, 0.3)",
                "glow-lg": "0 0 40px rgba(139, 92, 246, 0.4)",
                "glow-xl": "0 0 60px rgba(139, 92, 246, 0.5)",
                "glow-teal": "0 0 20px rgba(20, 184, 166, 0.3)",
                "soft-xl": "0 20px 50px -12px rgba(0, 0, 0, 0.15)",
                "soft-2xl": "0 25px 60px -15px rgba(0, 0, 0, 0.2)",
                "inner-glow": "inset 0 0 20px rgba(139, 92, 246, 0.1)",
                "card-hover": "0 20px 40px rgba(139, 92, 246, 0.15), 0 0 0 1px rgba(139, 92, 246, 0.1)",
            },

            // ─── Typography ───
            fontFamily: {
                sans: ["Inter", "system-ui", "sans-serif"],
            },
            letterSpacing: {
                tightest: "-.075em",
                tighter: "-.05em",
                tight: "-.025em",
                normal: "0",
                wide: ".025em",
                wider: ".05em",
                widest: ".1em",
                "ultra-wide": ".2em",
            },
            fontSize: {
                "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
                "display-lg": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
                "display-xl": ["6rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
            },

            // ─── Backdrop Blur ───
            backdropBlur: {
                xs: "2px",
                "2xl": "40px",
                "3xl": "64px",
            },

            // ─── Keyframes ───
            keyframes: {
                // Accordion
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                // Shimmer
                shimmer: {
                    from: { backgroundPosition: "200% 0" },
                    to: { backgroundPosition: "-200% 0" },
                },
                // Float
                float: {
                    "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
                    "50%": { transform: "translateY(-20px) rotate(2deg)" },
                },
                "float-slow": {
                    "0%, 100%": { transform: "translateY(0px)" },
                    "50%": { transform: "translateY(-10px)" },
                },
                // Pulse Glow
                "pulse-glow": {
                    "0%, 100%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" },
                    "50%": { boxShadow: "0 0 40px rgba(139, 92, 246, 0.6)" },
                },
                // Morph Blob
                morph: {
                    "0%, 100%": { borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
                    "25%": { borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%" },
                    "50%": { borderRadius: "50% 60% 30% 60% / 30% 60% 70% 40%" },
                    "75%": { borderRadius: "60% 40% 60% 30% / 70% 30% 50% 60%" },
                },
                // Gradient Shift
                "gradient-shift": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                },
                // Scale In
                "scale-in": {
                    "0%": { opacity: "0", transform: "scale(0.9)" },
                    "100%": { opacity: "1", transform: "scale(1)" },
                },
                // Slide In
                "slide-in-up": {
                    "0%": { opacity: "0", transform: "translateY(30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-in-down": {
                    "0%": { opacity: "0", transform: "translateY(-30px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                "slide-in-left": {
                    "0%": { opacity: "0", transform: "translateX(-30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                "slide-in-right": {
                    "0%": { opacity: "0", transform: "translateX(30px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                // Bounce Subtle
                "bounce-subtle": {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-5px)" },
                },
                // Spin Slow
                "spin-slow": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                },
                // Fade In
                "fade-in": {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
                // Width Grow
                "width-grow": {
                    "0%": { width: "0%" },
                    "100%": { width: "100%" },
                },
                // Confetti
                confetti: {
                    "0%": { transform: "translateY(0) rotateZ(0deg)", opacity: "1" },
                    "100%": { transform: "translateY(-200px) rotateZ(720deg)", opacity: "0" },
                },
                // Scan Line
                "scan-line": {
                    "0%": { top: "-10%" },
                    "100%": { top: "110%" },
                },
            },

            // ─── Animations ───
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                shimmer: "shimmer 2s linear infinite",
                float: "float 6s ease-in-out infinite",
                "float-slow": "float-slow 8s ease-in-out infinite",
                "float-delayed": "float 6s ease-in-out infinite 3s",
                "pulse-glow": "pulse-glow 2s ease-in-out infinite",
                morph: "morph 8s ease-in-out infinite",
                "gradient-shift": "gradient-shift 4s ease infinite",
                "scale-in": "scale-in 0.5s ease-out",
                "slide-in-up": "slide-in-up 0.5s ease-out",
                "slide-in-down": "slide-in-down 0.5s ease-out",
                "slide-in-left": "slide-in-left 0.5s ease-out",
                "slide-in-right": "slide-in-right 0.5s ease-out",
                "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
                "spin-slow": "spin-slow 20s linear infinite",
                "fade-in": "fade-in 0.5s ease-out",
                "width-grow": "width-grow 1s ease-out",
                confetti: "confetti 1s ease-out forwards",
                "scan-line": "scan-line 3s linear infinite",
            },

            // ─── Transitions ───
            transitionDuration: {
                "400": "400ms",
                "600": "600ms",
                "800": "800ms",
                "2000": "2000ms",
            },
            transitionTimingFunction: {
                "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
                "smooth-out": "cubic-bezier(0.21, 0.47, 0.32, 0.98)",
                spring: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
            },

            // ─── Spacing ───
            spacing: {
                "18": "4.5rem",
                "22": "5.5rem",
                "30": "7.5rem",
                "128": "32rem",
                "144": "36rem",
            },

            // ─── Z-Index ───
            zIndex: {
                "60": "60",
                "70": "70",
                "80": "80",
                "90": "90",
                "100": "100",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
