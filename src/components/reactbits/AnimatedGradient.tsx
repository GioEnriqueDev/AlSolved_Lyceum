"use client";

import { motion } from "framer-motion";

export default function AnimatedGradient({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
            {/* Single optimized blob with CSS animation instead of JS */}
            <div
                className="absolute w-[500px] h-[500px] rounded-full will-change-transform animate-float-slow"
                style={{
                    background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
                    left: "10%",
                    top: "-5%",
                }}
            />

            <div
                className="absolute w-[400px] h-[400px] rounded-full will-change-transform animate-float"
                style={{
                    background: "radial-gradient(circle, rgba(20, 184, 166, 0.12) 0%, transparent 70%)",
                    right: "0%",
                    top: "30%",
                    animationDelay: "-3s",
                }}
            />

            <div
                className="absolute w-[350px] h-[350px] rounded-full will-change-transform animate-float-slow"
                style={{
                    background: "radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)",
                    left: "30%",
                    bottom: "-10%",
                    animationDelay: "-5s",
                }}
            />
        </div>
    );
}
