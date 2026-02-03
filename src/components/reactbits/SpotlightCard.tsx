"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface SpotlightCardProps extends React.PropsWithChildren {
    className?: string;
    spotlightColor?: string;
}

export const SpotlightCard = ({
    children,
    className = "",
    spotlightColor = "rgba(139, 92, 246, 0.12)",
}: SpotlightCardProps) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position for spotlight
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // 3D tilt values
    const rotateX = useSpring(0, { stiffness: 150, damping: 20 });
    const rotateY = useSpring(0, { stiffness: 150, damping: 20 });
    const scale = useSpring(1, { stiffness: 200, damping: 20 });

    // Spotlight gradient position
    const spotlightX = useSpring(mouseX, { stiffness: 100, damping: 15 });
    const spotlightY = useSpring(mouseY, { stiffness: 100, damping: 15 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;

        const rect = divRef.current.getBoundingClientRect();
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Spotlight position
        mouseX.set(x);
        mouseY.set(y);

        // 3D tilt (max 5 degrees)
        const tiltX = ((y - centerY) / centerY) * -5;
        const tiltY = ((x - centerX) / centerX) * 5;

        rotateX.set(tiltX);
        rotateY.set(tiltY);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        scale.set(1.02);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        rotateX.set(0);
        rotateY.set(0);
        scale.set(1);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                scale,
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            className={`relative rounded-2xl bg-white border border-gray-100 shadow-lg overflow-hidden transition-shadow duration-500 ${isHovered ? "shadow-card-hover" : ""
                } ${className}`}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: useTransform(
                        [spotlightX, spotlightY],
                        ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`
                    ),
                }}
            />

            {/* Border Glow Effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
                style={{
                    opacity: isHovered ? 1 : 0,
                    boxShadow: `inset 0 0 0 1px ${spotlightColor.replace("0.12", "0.3")}`,
                }}
            />

            {/* Shine Effect */}
            <motion.div
                className="pointer-events-none absolute inset-0 opacity-0"
                style={{
                    opacity: isHovered ? 0.5 : 0,
                    background: "linear-gradient(105deg, transparent 40%, rgba(255, 255, 255, 0.8) 45%, transparent 50%)",
                    transform: useTransform(mouseX, (x) => `translateX(${x - 200}px)`),
                    transition: "opacity 0.3s",
                }}
            />

            {/* Content */}
            <div className="relative h-full" style={{ transform: "translateZ(20px)" }}>
                {children}
            </div>
        </motion.div>
    );
};
