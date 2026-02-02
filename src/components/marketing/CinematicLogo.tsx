"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const CinematicLogo = () => {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
            {/* Cinematic Rotating Rim */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border border-t-primary/50 border-r-transparent border-b-secondary/50 border-l-transparent w-full h-full opacity-50 blur-sm"
            />
            <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border border-t-transparent border-r-white/20 border-b-transparent border-l-white/20 w-[90%] h-[90%] opacity-30"
            />

            {/* The Logo Container */}
            <div className="relative w-48 h-48 md:w-60 md:h-60 z-10 filter drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                <Image
                    src="/logo-transparent.png"
                    alt="Lyceum Cinematic Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>

            {/* Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/40 rounded-full blur-[50px] animate-pulse z-0" />
        </div>
    );
};
