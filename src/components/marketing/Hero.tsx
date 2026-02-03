"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "../reactbits/MagneticButton";
import { CinematicLogo } from "./CinematicLogo";

// Lazy load background components
const FloatingShapes = dynamic(() => import("../reactbits/FloatingShapes"), { ssr: false });
const AnimatedGradient = dynamic(() => import("../reactbits/AnimatedGradient"), { ssr: false });

// ─── Animated Badge ───
const AnimatedBadge = () => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100"
    >
        <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
        <span className="text-xs font-semibold text-primary-700 tracking-wide uppercase">
            Eccellenza Medica dal 1998
        </span>
        <Sparkles className="w-3 h-3 text-primary-500" />
    </motion.div>
);

export const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16 bg-gradient-to-b from-white via-primary-50/30 to-white">

            {/* ─── Background Effects (Optimized) ─── */}
            <div className="absolute inset-0 z-0">
                <AnimatedGradient />
                <FloatingShapes count={4} />
            </div>

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(to right, #8B5CF6 1px, transparent 1px), linear-gradient(to bottom, #8B5CF6 1px, transparent 1px)`,
                    backgroundSize: "80px 80px",
                }}
            />

            {/* ─── Main Content ─── */}
            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center gap-6">

                {/* Badge */}
                <AnimatedBadge />

                {/* Logo */}
                <CinematicLogo />

                {/* Main Headline */}
                <div className="mt-4">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                        <span className="block text-gray-800 mb-2">Scienza.</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary">
                            Movimento.
                        </span>
                    </h1>
                </div>

                {/* Subheadline */}
                <p className="text-base sm:text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed mt-4">
                    Il punto di incontro tra{" "}
                    <span className="text-primary-600 font-medium">riabilitazione avanzata</span>
                    {" "}e cura della persona.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6 items-center">
                    <a href="#booking">
                        <MagneticButton className="h-12 sm:h-14 px-6 sm:px-8 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center gap-2">
                            <span>Prenota una Visita</span>
                            <ArrowRight className="w-4 h-4" />
                        </MagneticButton>
                    </a>

                    <a
                        href="#servizi"
                        className="flex items-center gap-2 px-6 py-3 text-gray-600 hover:text-primary-600 transition-colors font-medium"
                    >
                        <span>Esplora i Servizi</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-8 text-gray-400 text-sm">
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 border-2 border-white"
                                />
                            ))}
                        </div>
                        <span className="text-xs sm:text-sm">+2000 pazienti</span>
                    </div>
                    <div className="h-4 w-px bg-gray-200 hidden sm:block" />
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className="ml-1 text-xs sm:text-sm">4.9/5</span>
                    </div>
                </div>
            </div>

            {/* ─── Scroll Indicator ─── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-5 h-8 rounded-full border-2 border-gray-300 flex items-start justify-center p-1.5">
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1 h-1 rounded-full bg-primary-500"
                    />
                </div>
            </motion.div>
        </section>
    );
};
