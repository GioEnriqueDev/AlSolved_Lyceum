"use client";

import { motion } from "framer-motion";

interface AnimatedGradientProps {
    className?: string;
}

export default function AnimatedGradient({ className = "" }: AnimatedGradientProps) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {/* Primary Blob */}
            <motion.div
                className="absolute w-[600px] h-[600px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)",
                    left: "10%",
                    top: "-10%",
                }}
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Secondary Blob */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(20, 184, 166, 0.2) 0%, transparent 70%)",
                    right: "-5%",
                    top: "20%",
                }}
                animate={{
                    x: [0, -80, 0],
                    y: [0, 80, 0],
                    scale: [1.1, 0.9, 1.1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Tertiary Blob */}
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full"
                style={{
                    background: "radial-gradient(circle, rgba(167, 139, 250, 0.2) 0%, transparent 70%)",
                    left: "40%",
                    bottom: "-10%",
                }}
                animate={{
                    x: [0, 60, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Morphing Blob */}
            <motion.div
                className="absolute w-[350px] h-[350px] animate-morph"
                style={{
                    background: "linear-gradient(135deg, rgba(139, 92, 246, 0.15) 0%, rgba(20, 184, 166, 0.15) 100%)",
                    right: "20%",
                    bottom: "20%",
                }}
                animate={{
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
        </div>
    );
}
