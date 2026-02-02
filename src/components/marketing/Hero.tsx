"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "../reactbits/MagneticButton";
import Image from "next/image";
import { FadeIn } from "../animations/FadeIn";
import { CinematicLogo } from "./CinematicLogo";

// Dynamically import Scene3D to avoid SSR issues with Canvas
const Scene3D = dynamic(() => import("../reactbits/Scene3D"), { ssr: false });

export const Hero = () => {
    const { scrollY } = useScroll();
    const y2 = useTransform(scrollY, [0, 500], [0, -50]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16 bg-slate-950">
            {/* 3D Background - Subtle & Elegant */}
            <div className="absolute inset-0 z-0 opacity-80">
                <Scene3D />
            </div>

            {/* Vignette for focus */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/60 to-slate-950/90 pointer-events-none z-0" />

            <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center gap-10">

                {/* Logo - Cinematic & Integrated */}
                <FadeIn delay={0.1} className="relative mb-6">
                    <CinematicLogo />
                </FadeIn>

                {/* Badge - Clean & Medical */}
                <FadeIn delay={0.2}>
                    <div className="inline-flex items-center space-x-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]"></span>
                        <span className="text-xs font-semibold text-slate-300 tracking-widest uppercase">Eccellenza Medica</span>
                    </div>
                </FadeIn>

                {/* Main Headline - Elegant Typography */}
                <div className="relative">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]">
                        <FadeIn delay={0.3}>
                            <span className="block text-slate-200">Scienza.</span>
                        </FadeIn>
                        <FadeIn delay={0.45}>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                                Movimento.
                            </span>
                        </FadeIn>
                    </h1>
                </div>

                {/* Subheadline - Readable & Professional */}
                <FadeIn delay={0.6}>
                    <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light mx-auto">
                        Il punto di incontro tra riabilitazione avanzata e cura della persona. <br className="hidden md:block" />
                        Benvenuti nel futuro della fisioterapia.
                    </p>
                </FadeIn>

                {/* Actions - Weighted & Clear */}
                <FadeIn delay={0.8} className="flex flex-col sm:flex-row gap-6 mt-8 items-center justify-center">
                    <a href="#booking">
                        <MagneticButton className="h-14 px-10 rounded-full bg-white text-slate-900 font-bold text-base tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                            Prenota una Visita
                        </MagneticButton>
                    </a>

                    <a href="#servizi" className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <span className="text-base font-medium tracking-wide">Esplora i Servizi</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </FadeIn>
            </div>

            {/* Minimal Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-slate-500 to-transparent"></div>
            </motion.div>
        </section>
    );
};
