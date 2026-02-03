"use client";

import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Sparkles, Play } from "lucide-react";
import { MagneticButton } from "../reactbits/MagneticButton";
import Image from "next/image";
import { FadeIn } from "../animations/FadeIn";
import { CinematicLogo } from "./CinematicLogo";

// Dynamically import background components
const FloatingShapes = dynamic(() => import("../reactbits/FloatingShapes"), { ssr: false });
const AnimatedGradient = dynamic(() => import("../reactbits/AnimatedGradient"), { ssr: false });

// ─── Text Reveal Animation ───
const TextReveal = ({ children, delay = 0 }: { children: string; delay?: number }) => {
    const words = children.split(" ");

    return (
        <motion.span className="inline-flex flex-wrap justify-center gap-x-3">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 30, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: delay + i * 0.1,
                        ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="inline-block"
                    style={{ transformOrigin: "bottom" }}
                >
                    {word}
                </motion.span>
            ))}
        </motion.span>
    );
};

// ─── Animated Badge ───
const AnimatedBadge = () => (
    <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "backOut" }}
        className="inline-flex items-center gap-2 px-5 py-2 rounded-full glass-purple"
    >
        <motion.span
            className="flex h-2 w-2 rounded-full bg-emerald-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="text-xs font-semibold text-primary-700 tracking-widest uppercase">
            Eccellenza Medica dal 1998
        </span>
        <Sparkles className="w-3 h-3 text-primary-500" />
    </motion.div>
);

export const Hero = () => {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);
    const y = useTransform(scrollY, [0, 400], [0, 100]);
    const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20 bg-gradient-to-b from-white via-primary-50/30 to-white">

            {/* ─── Background Effects ─── */}
            <div className="absolute inset-0 z-0">
                <AnimatedGradient />
                <FloatingShapes count={15} />
            </div>

            {/* Subtle Grid Pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03]"
                style={{
                    backgroundImage: `linear-gradient(to right, #8B5CF6 1px, transparent 1px), linear-gradient(to bottom, #8B5CF6 1px, transparent 1px)`,
                    backgroundSize: "60px 60px",
                }}
            />

            {/* Radial Vignette */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-white/80 pointer-events-none z-10" />

            {/* ─── Main Content ─── */}
            <motion.div
                className="relative z-20 max-w-6xl mx-auto text-center flex flex-col items-center gap-8"
                style={{ opacity, y, scale }}
            >
                {/* Badge */}
                <AnimatedBadge />

                {/* Logo - Cinematic */}
                <FadeIn delay={0.1} className="relative">
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <CinematicLogo />
                        {/* Glow under logo */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-primary-500/20 blur-2xl rounded-full" />
                    </motion.div>
                </FadeIn>

                {/* Main Headline */}
                <div className="relative mt-4">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                        <div className="text-gray-800 mb-2">
                            <TextReveal delay={0.4}>Scienza.</TextReveal>
                        </div>
                        <div className="text-gradient-purple-teal">
                            <TextReveal delay={0.7}>Movimento.</TextReveal>
                        </div>
                    </h1>

                    {/* Decorative line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary rounded-full origin-center"
                    />
                </div>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed font-light mt-6"
                >
                    Il punto di incontro tra{" "}
                    <span className="text-primary-600 font-medium">riabilitazione avanzata</span>
                    {" "}e cura della persona.{" "}
                    <br className="hidden md:block" />
                    Benvenuti nel futuro della fisioterapia.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    className="flex flex-col sm:flex-row gap-4 mt-8 items-center"
                >
                    <a href="#booking">
                        <MagneticButton className="group h-14 px-8 rounded-full bg-gradient-to-r from-primary-600 to-primary-500 text-white font-bold text-base tracking-wide shadow-glow hover:shadow-glow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            <span>Prenota una Visita</span>
                            <motion.div
                                animate={{ x: [0, 4, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                <ArrowRight className="w-5 h-5" />
                            </motion.div>
                        </MagneticButton>
                    </a>

                    <a
                        href="#servizi"
                        className="group flex items-center gap-3 px-6 py-3 rounded-full border-2 border-gray-200 hover:border-primary-300 bg-white/50 backdrop-blur-sm text-gray-600 hover:text-primary-600 transition-all duration-300"
                    >
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                            <Play className="w-4 h-4 text-primary-600 ml-0.5" />
                        </div>
                        <span className="font-medium">Esplora i Servizi</span>
                    </a>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="flex items-center gap-6 mt-12 text-gray-400 text-sm"
                >
                    <div className="flex items-center gap-2">
                        <div className="flex -space-x-2">
                            {[1, 2, 3].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-200 to-primary-300 border-2 border-white"
                                />
                            ))}
                        </div>
                        <span>+2000 pazienti soddisfatti</span>
                    </div>
                    <div className="hidden sm:block h-4 w-px bg-gray-300" />
                    <div className="hidden sm:flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className="ml-1">4.9/5</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* ─── Scroll Indicator ─── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2"
                >
                    <motion.div
                        animate={{ opacity: [0.5, 1, 0.5], y: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-1.5 rounded-full bg-primary-500"
                    />
                </motion.div>
                <span className="text-xs text-gray-400 uppercase tracking-widest">Scorri</span>
            </motion.div>
        </section>
    );
};
