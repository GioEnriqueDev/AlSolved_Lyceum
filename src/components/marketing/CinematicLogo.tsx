"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ─── Medical Pulse Animation ───
const MedicalPulse = () => (
    <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 400 100" preserveAspectRatio="none">
        <motion.path
            d="M0,50 L40,50 L50,20 L60,80 L70,50 L100,50 L110,20 L120,80 L130,50 L400,50"
            fill="transparent"
            stroke="#8B5CF6"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
                pathLength: [0, 1, 1],
                opacity: [0, 1, 0],
                pathOffset: [0, 0, 1]
            }}
            transition={{
                duration: 3,
                ease: "linear",
                repeat: Infinity,
                repeatDelay: 1
            }}
        />
    </svg>
);

// ─── Fluid Wave Animation ───
const FluidWave = () => (
    <div className="absolute inset-0 overflow-hidden rounded-xl opacity-10 pointer-events-none">
        <motion.div
            className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-teal-400 to-transparent blur-xl"
            animate={{
                transform: [
                    "translate(-50%, 50%) rotate(0deg)",
                    "translate(-50%, 50%) rotate(360deg)"
                ]
            }}
            transition={{
                duration: 15,
                ease: "linear",
                repeat: Infinity
            }}
            style={{
                width: "300%",
                height: "300%",
                left: "-100%",
                top: "-100%",
                borderRadius: "40%"
            }}
        />
    </div>
);

// ─── Floating Medical Symbols ───
const FloatingCross = ({ delay = 0, x = 0, y = 0, color = "text-primary-200" }: { delay?: number, x?: number, y?: number, color?: string }) => (
    <motion.div
        className={`absolute text-2xl font-bold ${color} pointer-events-none select-none`}
        style={{ left: `${x}%`, top: `${y}%` }}
        animate={{
            y: [0, -15, 0],
            opacity: [0, 0.6, 0],
            scale: [0.8, 1.2, 0.8]
        }}
        transition={{
            duration: 4,
            delay: delay,
            repeat: Infinity,
            ease: "easeInOut"
        }}
    >
        +
    </motion.div>
);

export const CinematicLogo = () => {
    return (
        <motion.div
            className="relative flex items-center justify-center py-6 px-10 rounded-3xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
        >
            {/* ─── Background Effects ─── */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl border border-white/60 shadow-lg shadow-primary-500/5 overflow-hidden -z-10">
                <FluidWave />
                <MedicalPulse />

                {/* Floating Elements */}
                <FloatingCross x={10} y={20} delay={0} color="text-primary-300" />
                <FloatingCross x={85} y={60} delay={1.5} color="text-teal-300" />
                <FloatingCross x={20} y={80} delay={2.5} color="text-violet-200" />

                {/* Subtle Shine Sweep */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -skew-x-12"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 6, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                />
            </div>

            {/* ─── Logo Image ─── */}
            <div className="relative w-52 h-20 md:w-64 md:h-24">
                <Image
                    src="/AlSolved_Lyceum/logo-transparent.png"
                    alt="Lyceum"
                    fill
                    className="object-contain drop-shadow-md"
                    priority
                />
            </div>

            {/* ─── Tagline (Optional) ─── */}
            <motion.div
                className="absolute -bottom-2 text-[10px] font-bold tracking-[0.2em] text-primary-500 uppercase opacity-0"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
            >
                Health & Care
            </motion.div>
        </motion.div>
    );
};
