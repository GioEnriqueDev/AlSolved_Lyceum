"use client";

import { useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

interface BlurTextProps {
    text: string;
    className?: string;
    delay?: number;
    direction?: "top" | "bottom";
}

export const BlurText = ({
    text,
    className = "",
    delay = 0.1,
    direction = "top",
}: BlurTextProps) => {
    const words = text.split(" ");

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay * i },
        }),
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
            },
        },
        hidden: {
            opacity: 0,
            filter: "blur(20px)",
            y: direction === "top" ? -20 : 20,
        },
    };

    return (
        <motion.div
            className={`flex flex-wrap ${className}`}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {words.map((word, index) => (
                <motion.span variants={child} key={index} className="mr-2 mb-2 inline-block">
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};
